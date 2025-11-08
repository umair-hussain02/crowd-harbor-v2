"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Save, ArrowLeft, Eye, Upload } from "lucide-react"
import dynamic from "next/dynamic"
import type { BlogPost } from "@/lib/blog"

// ✅ Dynamically import ReactQuill (avoids SSR issues)
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })
import "react-quill/dist/quill.snow.css"

interface BlogPostEditorProps {
  post: BlogPost | null
  onSave: () => void
  onCancel: () => void
  getAuthHeaders: () => Record<string, string>
}

export function BlogPostEditor({ post, onSave, onCancel, getAuthHeaders }: BlogPostEditorProps) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    image: "",
    author: "",
    published: false,
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [preview, setPreview] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || "",
        excerpt: post.excerpt || "",
        content: post.content || "",
        image: post.image || "",
        author: post.author || "",
        published: post.published || false,
      })
    } else {
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        image: "",
        author: "",
        published: false,
      })
    }
  }, [post])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSaving(true)

    try {
      const url = post?._id ? `/api/admin/blogs/${post._id}` : "/api/admin/blogs"
      const method = post?._id ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        onSave()
      } else {
        const data = await response.json()
        setError(data.error || "Failed to save post")
      }
    } catch (error) {
      console.error("Error saving blog post:", error)
      setError("Failed to save post. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // ✅ Upload image to Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError("")

    const formDataUpload = new FormData()
    formDataUpload.append("file", file)
    formDataUpload.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
    )

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
        { method: "POST", body: formDataUpload }
      )
      const data = await res.json()
      if (data.secure_url) {
        setFormData((prev) => ({ ...prev, image: data.secure_url }))
      } else {
        setError("Upload failed. Please try again.")
      }
    } catch (err) {
      console.error(err)
      setError("Image upload failed.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h2 className="text-3xl font-bold text-foreground">{post ? "Edit Post" : "New Post"}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => setPreview(!preview)}>
            <Eye className="w-4 h-4 mr-2" />
            {preview ? "Edit" : "Preview"}
          </Button>
          <Button onClick={handleSubmit} disabled={saving}>
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Saving..." : "Save"}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{preview ? "Preview" : "Content"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {preview ? (
                <div className="space-y-4">
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt={formData.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h1 className="text-3xl font-bold mb-2">{formData.title || "Untitled"}</h1>
                  <p className="text-muted-foreground mb-4">{formData.excerpt}</p>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: formData.content }}
                  />
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Title
                    </label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter post title..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                      Excerpt
                    </label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      placeholder="Brief description of the post..."
                      rows={3}
                      required
                    />
                  </div>

                  {/* ✅ Rich Text Editor */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <ReactQuill
                      theme="snow"
                      value={formData.content}
                      onChange={(value) => handleInputChange("content", value)}
                      placeholder="Write your post content here..."
                    />
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-2">
                  Author
                </label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  placeholder="Author name..."
                  required
                />
              </div>

              {/* ✅ Cloudinary Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                )}
                <div className="flex items-center space-x-2">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="published" className="text-sm font-medium">
                  Published
                </label>
                <Switch
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => handleInputChange("published", checked)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
