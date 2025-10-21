"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/lib/auth";
import { BlogPostEditor } from "./blog-post-editor";
import { BlogPostList } from "./blog-post-list";
import Email from "./email";
import { Plus, FileText, Users, TrendingUp, LogOut } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { EmailForm } from "./email-form";
import { AddTemplateForm } from "./add-template-form";

// Type for emails
interface EmailItem {
  id: string;
  subject: string;
  recipient: string;
  sentAt: string;
  status: "sent" | "failed";
}

export function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [emails, setEmails] = useState<EmailItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<
    | "dashboard"
    | "posts"
    | "editor"
    | "email"
    | "emailForm"
    | "templateForm"
  >("dashboard");

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const { user, logout, getAuthHeaders } = useAuth();

  // Fetch data
  useEffect(() => {
    fetchPosts();
    fetchEmails();
  }, []);

  // ------------------------
  // BLOG FUNCTIONS
  // ------------------------
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/blogs", {
        headers: getAuthHeaders(),
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts || []);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePostSaved = () => {
    fetchPosts();
    setActiveView("posts");
    setEditingPost(null);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setActiveView("editor");
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setActiveView("editor");
  };

  // ------------------------
  // EMAIL FUNCTIONS
  // ------------------------
  const fetchEmails = async () => {
    try {
      const response = await fetch("/api/admin/emails", {
        headers: getAuthHeaders(),
      });
      if (response.ok) {
        const data = await response.json();
        setEmails(data.emails || []);
      }
    } catch (error) {
      console.error("Failed to fetch emails:", error);
    }
  };

  const handleSendNewEmail = () => {
    setActiveView("emailForm");
  };
  const handleNewTemplate = () => {
    setActiveView("templateForm");
  }
  const handleEmailSent = () => {
    fetchEmails();
    setActiveView("email");
  };

  // ------------------------
  // STATS + RENDER
  // ------------------------
  const publishedPosts = posts.filter((post) => post.published);
  const draftPosts = posts.filter((post) => !post.published);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">
                CrowdHarbor Admin
              </h1>
              <nav className="flex space-x-4">
                <Button
                  variant={activeView === "dashboard" ? "default" : "ghost"}
                  onClick={() => setActiveView("dashboard")}
                >
                  Dashboard
                </Button>
                <Button
                  variant={activeView === "posts" ? "default" : "ghost"}
                  onClick={() => setActiveView("posts")}
                >
                  Posts
                </Button>
                <Button
                  variant={activeView === "email" ? "default" : "ghost"}
                  onClick={() => setActiveView("email")}
                >
                  Email
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.name}
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === "dashboard" && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-foreground">
                Dashboard Overview
              </h2>
              <Button onClick={handleNewPost}>
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Posts
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{posts.length}</div>
                  <p className="text-xs text-muted-foreground">
                    {publishedPosts.length} published, {draftPosts.length}{" "}
                    drafts
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Published Posts
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {publishedPosts.length}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Live on the website
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Draft Posts
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{draftPosts.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Waiting to be published
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <div
                      key={post.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          By {post.author} •{" "}
                          {new Date(post.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={post.published ? "default" : "secondary"}
                        >
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditPost(post)}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeView === "posts" && (
          <BlogPostList
            posts={posts}
            onEditPost={handleEditPost}
            onNewPost={handleNewPost}
            onPostDeleted={fetchPosts}
            getAuthHeaders={getAuthHeaders}
          />
        )}

        {activeView === "editor" && (
          <BlogPostEditor
            post={editingPost}
            onSave={handlePostSaved}
            onCancel={() => setActiveView("posts")}
            getAuthHeaders={getAuthHeaders}
          />
        )}

        {activeView === "email" && (
          <Email
            emails={emails}
            onAddTemplate = {handleNewTemplate}
            onSendNew={handleSendNewEmail}
            onEmailDeleted={fetchEmails}
            getAuthHeaders={getAuthHeaders}
          />
        )}
        {activeView === "emailForm" && (
          <EmailForm
            onCancel={() => setActiveView("email")}
            onEmailSent={handleEmailSent}
            getAuthHeaders={getAuthHeaders}
          />
        )}
        {activeView === "templateForm" && (
          <AddTemplateForm
            onCancel={() => setActiveView("email")}
            onTemplateAdded={() => {
              setActiveView("email");
            }}
            getAuthHeaders={getAuthHeaders}
          />
        )}
      </main>
    </div>
  );
}
