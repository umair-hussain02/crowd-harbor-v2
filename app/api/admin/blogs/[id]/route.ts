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

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    await connectDB()

    const post = await Blog.findById(params.id).lean()

    if (!post) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      post,
    })
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog post" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    await connectDB()

    const body = await request.json()
    const { title, excerpt, content, image, author, published, tags } = body

    // Generate new slug if title changed
    const updateData: any = { excerpt, content, image, author, published, tags }
    if (title) {
      updateData.title = title
      updateData.slug = title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
    }

    const post = await Blog.findByIdAndUpdate(params.id, updateData, { new: true, runValidators: true }).lean()

    if (!post) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      post,
    })
  } catch (error) {
    console.error("Error updating blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to update blog post" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    await connectDB()

    const post = await Blog.findByIdAndDelete(params.id)

    if (!post) {
      return NextResponse.json({ success: false, error: "Blog post not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Blog post deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json({ success: false, error: "Failed to delete blog post" }, { status: 500 })
  }
}
