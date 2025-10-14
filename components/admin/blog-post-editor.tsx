"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Save, ArrowLeft, Eye } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

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
      // ✅ FIXED: use post._id instead of post.id
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
                      src={formData.image || "/placeholder.svg"}
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

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                      Content (HTML)
                    </label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      placeholder="Write your post content in HTML..."
                      rows={20}
                      className="font-mono text-sm"
                      required
                    />
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

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

              <div>
                <label htmlFor="image" className="block text-sm font-medium mb-2">
                  Featured Image URL
                </label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
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

          <Card>
            <CardHeader>
              <CardTitle>Writing Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Use HTML tags for formatting (h2, h3, p, ul, li, strong, em)</p>
              <p>• Keep paragraphs short and scannable</p>
              <p>• Include relevant keywords naturally</p>
              <p>• Add internal links to other pages</p>
              <p>• Use the preview to check formatting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
