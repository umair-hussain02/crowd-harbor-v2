import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Blog from "@/lib/models/blog"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await connectDB()

    const post = await Blog.findOne({
      slug: params.slug,
      published: true,
    }).lean()

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
