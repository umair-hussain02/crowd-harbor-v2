import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongodb"
import Admin from "@/lib/models/admin"
import { signAccessToken } from "@/lib/jwt"

export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find admin by email
    const admin = await Admin.findOne({ email })
    if (!admin) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Check password
    const isValidPassword = await admin.comparePassword(password)
    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Generate JWT token
    const token = signAccessToken({
      adminId: admin._id.toString(),
      email: admin.email,
      role: admin.role,
    })

    return NextResponse.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
