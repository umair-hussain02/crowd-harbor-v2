"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  image: string
  author: string
  createdAt: string
  readTime: number
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchLatestPosts()
  }, [])

  const fetchLatestPosts = async () => {
    try {
      const response = await fetch("/api/blogs?limit=3")
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts || [])
      }
    } catch (error) {
      console.error("Failed to fetch blog posts:", error)
    } finally {
      setLoading(false)
    }
  }

  // Mock data for development
  const mockPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Equity Crowdfunding: Trends to Watch in 2025",
      slug: "future-equity-crowdfunding-2025",
      excerpt:
        "Discover the emerging trends shaping the equity crowdfunding landscape and how startups can leverage these opportunities for successful fundraising.",
      image: "/equity-crowdfunding-trends.jpg",
      author: "Sarah Johnson",
      createdAt: "2025-01-15",
      readTime: 5,
    },
    {
      id: "2",
      title: "How to Prepare Your Startup for Crowdcube Success",
      slug: "prepare-startup-crowdcube-success",
      excerpt:
        "A comprehensive guide to preparing your startup for a successful equity crowdfunding campaign on Crowdcube, from pitch deck to investor relations.",
      image: "/startup-preparation-crowdcube.jpg",
      author: "Michael Chen",
      createdAt: "2025-01-10",
      readTime: 7,
    },
    {
      id: "3",
      title: "Case Study: How BrewDog Revolutionized Equity Crowdfunding",
      slug: "brewdog-equity-crowdfunding-case-study",
      excerpt:
        "An in-depth analysis of BrewDog's groundbreaking approach to equity crowdfunding and the lessons startups can learn from their success.",
      image: "/brewdog-crowdfunding-case-study.jpg",
      author: "Emma Thompson",
      createdAt: "2025-01-05",
      readTime: 6,
    },
  ]

  const displayPosts = posts.length > 0 ? posts : mockPosts

  if (loading && posts.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest trends in equity crowdfunding</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-48 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">Stay updated with the latest trends in equity crowdfunding</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(post.createdAt).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/blogs">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
