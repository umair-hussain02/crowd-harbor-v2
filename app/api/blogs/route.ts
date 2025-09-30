import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Blog from "@/lib/models/blog"

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit")
    const search = searchParams.get("search")
    const page = searchParams.get("page") || "1"
    const pageSize = 6

    let query = { published: true }

    // Add search functionality
    if (search) {
      query = {
        ...query,
        $text: { $search: search },
      }
    }

    const skip = (Number.parseInt(page) - 1) * pageSize
    const limitNum = limit ? Number.parseInt(limit) : pageSize

    const posts = await Blog.find(query).sort({ createdAt: -1 }).skip(skip).limit(limitNum).lean()

    const total = await Blog.countDocuments(query)

    return NextResponse.json({
      success: true,
      posts,
      total,
      page: Number.parseInt(page),
      totalPages: Math.ceil(total / pageSize),
    })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
