"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"

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

  // Mock data for development
  const mockPosts: Record<string, BlogPost> = {
    "future-equity-crowdfunding-2025": {
      id: "1",
      title: "The Future of Equity Crowdfunding: Trends to Watch in 2025",
      slug: "future-equity-crowdfunding-2025",
      content: `
        <h2>The Evolution of Equity Crowdfunding</h2>
        <p>Equity crowdfunding has transformed the way startups raise capital, democratizing access to investment opportunities and enabling entrepreneurs to connect directly with their communities. As we move through 2025, several key trends are shaping the future of this dynamic industry.</p>
        
        <h3>1. Increased Regulatory Support</h3>
        <p>Governments worldwide are recognizing the value of equity crowdfunding in fostering innovation and economic growth. New regulations are making it easier for both startups and investors to participate in crowdfunding campaigns while maintaining appropriate investor protections.</p>
        
        <h3>2. Technology Integration</h3>
        <p>Advanced technologies like AI and blockchain are being integrated into crowdfunding platforms to improve due diligence, enhance transparency, and streamline the investment process. These innovations are making equity crowdfunding more accessible and secure for all participants.</p>
        
        <h3>3. Sector Diversification</h3>
        <p>While technology startups have traditionally dominated equity crowdfunding, we're seeing increased participation from sectors like healthcare, renewable energy, and consumer goods. This diversification is creating new opportunities for investors and entrepreneurs alike.</p>
        
        <h3>4. Enhanced Investor Education</h3>
        <p>Platforms are investing heavily in investor education programs, helping retail investors make more informed decisions and understand the risks and rewards of startup investing.</p>
        
        <h2>What This Means for Startups</h2>
        <p>For startups looking to leverage equity crowdfunding in 2025, these trends present both opportunities and challenges. Success will depend on understanding these evolving dynamics and adapting strategies accordingly.</p>
        
        <p>At CrowdHarbor, we help startups navigate these trends and position themselves for crowdfunding success. Our partnership with Crowdcube ensures that our clients have access to the latest tools and strategies in the equity crowdfunding space.</p>
      `,
      image: "/equity-crowdfunding-trends-2025.jpg",
      author: "Sarah Johnson",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
      readTime: 5,
    },
    "prepare-startup-crowdcube-success": {
      id: "2",
      title: "How to Prepare Your Startup for Crowdcube Success",
      slug: "prepare-startup-crowdcube-success",
      content: `
        <h2>Getting Ready for Your Crowdcube Campaign</h2>
        <p>Launching a successful equity crowdfunding campaign on Crowdcube requires careful preparation and strategic planning. Here's your comprehensive guide to getting ready for success.</p>
        
        <h3>1. Perfect Your Pitch Deck</h3>
        <p>Your pitch deck is the cornerstone of your campaign. It should clearly communicate your business model, market opportunity, competitive advantage, and growth strategy. Keep it concise but compelling, focusing on the key metrics that matter to investors.</p>
        
        <h3>2. Build Your Community</h3>
        <p>Start building your investor community well before launching your campaign. Engage with potential investors through social media, email newsletters, and industry events. A strong pre-launch community can make the difference between a successful and failed campaign.</p>
        
        <h3>3. Prepare Your Financials</h3>
        <p>Ensure your financial statements are accurate, up-to-date, and professionally prepared. Investors will scrutinize your numbers, so transparency and accuracy are crucial. Consider having your financials reviewed by a qualified accountant.</p>
        
        <h3>4. Develop Your Marketing Strategy</h3>
        <p>A successful crowdfunding campaign requires ongoing marketing efforts. Develop a comprehensive marketing strategy that includes social media, content marketing, PR, and direct outreach to potential investors.</p>
        
        <h3>5. Legal and Compliance Preparation</h3>
        <p>Ensure all legal documentation is in order, including your articles of incorporation, shareholder agreements, and any intellectual property registrations. Compliance with regulations is essential for a successful campaign.</p>
        
        <h2>Working with CrowdHarbor</h2>
        <p>At CrowdHarbor, we guide startups through every step of the Crowdcube preparation process. Our expertise and partnership with Crowdcube ensure that your campaign is positioned for maximum success.</p>
      `,
      image: "/startup-preparation-crowdcube-success.jpg",
      author: "Michael Chen",
      createdAt: "2025-01-10",
      updatedAt: "2025-01-10",
      readTime: 7,
    },
    "brewdog-equity-crowdfunding-case-study": {
      id: "3",
      title: "Case Study: How BrewDog Revolutionized Equity Crowdfunding",
      slug: "brewdog-equity-crowdfunding-case-study",
      content: `
        <h2>The BrewDog Revolution</h2>
        <p>BrewDog's approach to equity crowdfunding has become legendary in the startup world. Their innovative "Equity for Punks" campaigns not only raised significant capital but also built a passionate community of brand advocates and investors.</p>
        
        <h3>The Strategy</h3>
        <p>BrewDog's success wasn't just about raising money—it was about building a movement. They positioned their investors as "Equity Punks," creating a sense of belonging and rebellion against traditional brewing establishments.</p>
        
        <h3>Key Success Factors</h3>
        <ul>
          <li><strong>Brand Storytelling:</strong> BrewDog crafted a compelling narrative around their mission to revolutionize the beer industry.</li>
          <li><strong>Community Building:</strong> They created exclusive experiences and benefits for their investor community.</li>
          <li><strong>Transparency:</strong> Regular updates and honest communication built trust with their investor base.</li>
          <li><strong>Product Quality:</strong> Their exceptional products backed up their bold claims and marketing.</li>
        </ul>
        
        <h3>The Results</h3>
        <p>Through multiple crowdfunding rounds, BrewDog raised over £75 million from more than 200,000 investors, creating one of the most successful equity crowdfunding stories in history.</p>
        
        <h3>Lessons for Other Startups</h3>
        <p>While not every startup can replicate BrewDog's exact approach, there are valuable lessons to be learned about community building, brand storytelling, and investor engagement.</p>
        
        <h2>Applying These Lessons</h2>
        <p>At CrowdHarbor, we help startups identify and implement the strategies that made BrewDog successful, adapted to their unique circumstances and market opportunities.</p>
      `,
      image: "/brewdog-crowdfunding-case-study-success.jpg",
      author: "Emma Thompson",
      createdAt: "2025-01-05",
      updatedAt: "2025-01-05",
      readTime: 6,
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
        // Use mock data if API not available
        const mockPost = mockPosts[slug]
        if (mockPost) {
          setPost(mockPost)
        }
      }
    } catch (error) {
      console.error("Failed to fetch blog post:", error)
      // Use mock data as fallback
      const mockPost = mockPosts[slug]
      if (mockPost) {
        setPost(mockPost)
      }
    } finally {
      setLoading(false)
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = post ? `Check out this article: ${post.title}` : ""

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-64 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-6 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blogs">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blogs">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8"
            />

            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <User className="w-4 h-4 mr-1" />
              <span className="mr-4">{post.author}</span>
              <Calendar className="w-4 h-4 mr-1" />
              <span className="mr-4">{new Date(post.createdAt).toLocaleDateString()}</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm text-muted-foreground">Share:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
                  window.open(url, "_blank")
                }}
              >
                <Twitter className="w-4 h-4 mr-1" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
                  window.open(url, "_blank")
                }}
              >
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Last updated: {new Date(post.updatedAt).toLocaleDateString()}
              </div>
              <Button asChild>
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  )
}
