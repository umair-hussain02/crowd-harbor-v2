"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogPostListProps {
  posts: BlogPost[]
  onEditPost: (post: BlogPost) => void
  onNewPost: () => void
  onPostDeleted: () => void
  getAuthHeaders: () => Record<string, string>
}

export function BlogPostList({ posts, onEditPost, onNewPost, onPostDeleted, getAuthHeaders }: BlogPostListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeletePost = async (postId: string) => {
    setDeleting(postId)
    try {
      const response = await fetch(`/api/admin/blogs/${postId}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      })

      if (response.ok) {
        onPostDeleted()
      } else {
        console.error("Failed to delete post")
      }
    } catch (error) {
      console.error("Error deleting post:", error)
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-foreground">Blog Posts</h2>
        <Button onClick={onNewPost}>
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {filteredPosts.length} of {posts.length} posts
        </div>
      </div>

      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                <Badge variant={post.published ? "default" : "secondary"}>
                  {post.published ? "Published" : "Draft"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {post.published && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/blogs/${post.slug}`} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => onEditPost(post)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                </div>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm" disabled={deleting === post.id}>
                      <Trash2 className="w-4 h-4 mr-2" />
                      {deleting === post.id ? "Deleting..." : "Delete"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{post.title}"? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeletePost(post.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        ))}

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your search.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
