"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  image: string
  author: string
  createdAt: string
  updatedAt: string
  readTime: number
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  // --- Mock Data ---
  const mockPosts: Record<string, BlogPost> = {
    "future-equity-crowdfunding-2025": {
      id: "1",
      title: "The Future of Equity Crowdfunding: Trends to Watch in 2025",
      slug: "future-equity-crowdfunding-2025",
      content: `
        <h2>The Evolution of Equity Crowdfunding</h2>
        <p>Equity crowdfunding has transformed the way startups raise capital...</p>
        <h3>1. Increased Regulatory Support</h3>
        <p>Governments worldwide are recognizing the value...</p>
      `,
      image: "/equity-crowdfunding-trends-2025.jpg",
      author: "Sarah Johnson",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
      readTime: 5,
    },
  }

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blogs/${slug}`)
      if (response.ok) {
        const data = await response.json()
        setPost(data.post)
      } else {
        setPost(mockPosts[slug])
      }
    } catch {
      setPost(mockPosts[slug])
    } finally {
      setLoading(false)
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = post ? `Check out this article: ${post.title}` : ""

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 flex justify-center items-center">
        <div className="animate-pulse w-full max-w-3xl space-y-6 px-6">
          <div className="h-8 bg-muted rounded w-1/3" />
          <div className="h-64 bg-muted rounded" />
          <div className="space-y-4">
            <div className="h-6 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-3/4" />
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center items-center px-4">
        <h1 className="text-2xl font-bold mb-2">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">The article you're looking for doesn’t exist.</p>
        <Button asChild>
          <Link href="/blogs">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-grow pt-30 pb-20">
          <article className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Back Button */}
              <Button asChild variant="ghost" className="mb-6">
                <Link href="/blogs">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>

              {/* Header Image */}
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8 shadow-md"
              />

              {/* Meta Info */}
              <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4">
                <User className="w-4 h-4 mr-1" />
                <span className="mr-4">{post.author}</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Content */}
              <div
                className="prose prose-neutral max-w-none
                prose-headings:text-foreground
                prose-p:text-foreground
                prose-strong:text-foreground
                prose-li:text-foreground
                prose-img:rounded-lg
                prose-a:text-primary hover:prose-a:underline
                text-justify"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Buttons */}
              <div className="mt-12 flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">Share:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
                    window.open(url, "_blank")
                  }}
                >
                  <Twitter className="w-4 h-4 mr-1" /> Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
                    window.open(url, "_blank")
                  }}
                >
                  <Linkedin className="w-4 h-4 mr-1" /> LinkedIn
                </Button>
              </div>

              {/* Footer Section */}
              <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Last updated: {new Date(post.updatedAt).toLocaleDateString()}
                </span>
                <Button asChild>
                  <Link href="/contact">Get Expert Advice</Link>
                </Button>
              </div>
            </motion.div>
          </article>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
