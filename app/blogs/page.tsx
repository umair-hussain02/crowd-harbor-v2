"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search, Calendar, User, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
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

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

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
    {
      id: "4",
      title: "Understanding Valuation in Equity Crowdfunding",
      slug: "understanding-valuation-equity-crowdfunding",
      excerpt:
        "Learn how to properly value your startup for equity crowdfunding campaigns and avoid common valuation mistakes that can derail your fundraising efforts.",
      image: "/startup-valuation-crowdfunding.jpg",
      author: "David Wilson",
      createdAt: "2025-01-01",
      readTime: 8,
    },
    {
      id: "5",
      title: "Building Investor Relations for Long-term Success",
      slug: "building-investor-relations-success",
      excerpt:
        "Discover best practices for maintaining strong relationships with your equity crowdfunding investors beyond the initial campaign.",
      image: "/investor-relations-crowdfunding.jpg",
      author: "Lisa Rodriguez",
      createdAt: "2024-12-28",
      readTime: 6,
    },
    {
      id: "6",
      title: "Legal Considerations for Equity Crowdfunding Campaigns",
      slug: "legal-considerations-equity-crowdfunding",
      excerpt:
        "Navigate the legal landscape of equity crowdfunding with this comprehensive guide to compliance, regulations, and best practices.",
      image: "/legal-crowdfunding-regulations.jpg",
      author: "James Parker",
      createdAt: "2024-12-25",
      readTime: 9,
    },
  ]

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    filterPosts()
  }, [posts, searchTerm])

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/blogs")
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts || mockPosts)
      } else {
        setPosts(mockPosts)
      }
    } catch (error) {
      console.error("Failed to fetch blog posts:", error)
      setPosts(mockPosts)
    } finally {
      setLoading(false)
    }
  }

  const filterPosts = () => {
    if (!searchTerm) {
      setFilteredPosts(posts)
    } else {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.author.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredPosts(filtered)
    }
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-12 bg-muted rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="bg-muted rounded-lg h-48"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Insights, trends, and expert advice on equity crowdfunding
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-10"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
