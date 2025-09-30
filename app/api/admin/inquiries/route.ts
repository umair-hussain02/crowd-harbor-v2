import { type NextRequest, NextResponse } from "next/server"
import { getInquiries, updateInquiryStatus } from "@/lib/database"
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
    const inquiries = await getInquiries()

    return NextResponse.json({
      success: true,
      inquiries,
      total: inquiries.length,
    })
  } catch (error) {
    console.error("Error fetching inquiries:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch inquiries" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { id, status } = body

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    if (!["new", "contacted", "closed"].includes(status)) {
      return NextResponse.json({ success: false, error: "Invalid status" }, { status: 400 })
    }

    await updateInquiryStatus(id, status)

    return NextResponse.json({
      success: true,
      message: "Inquiry status updated successfully",
    })
  } catch (error) {
    console.error("Error updating inquiry status:", error)
    return NextResponse.json({ success: false, error: "Failed to update inquiry status" }, { status: 500 })
  }
}
