import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Blog from "@/lib/models/blog"
import { getTokenFromRequest, verifyToken } from "@/lib/jwt"

function isAuthenticated(request: NextRequest): boolean {
  const token = getTokenFromRequest(request)
  if (!token) return false

  const payload = verifyToken(token)
  return payload !== null
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    await connectDB()

    const posts = await Blog.find({}).sort({ createdAt: -1 }).lean()

    return NextResponse.json({
      success: true,
      posts,
      total: posts.length,
    })
  } catch (error) {
    console.error("Error fetching admin blog posts:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog posts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    await connectDB()

    const body = await request.json()
    const { title, excerpt, content, image, author, published = false, tags = [] } = body

    if (!title || !excerpt || !content || !author) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim()

    const post = new Blog({
      title,
      slug,
      excerpt,
      content,
      image: image || "/placeholder.svg",
      author,
      published,
      tags,
    })

    await post.save()

    return NextResponse.json({
      success: true,
      post,
    })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to create blog post" }, { status: 500 })
  }
}
