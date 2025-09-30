import { type NextRequest, NextResponse } from "next/server"
import { saveInquiry } from "@/lib/database"
import { sendContactFormEmails } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, inquiryType, message } = body

    // Validate required fields
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Validate inquiry type
    const validInquiryTypes = ["startup-funding", "investor-partnership", "general-inquiry", "consultation"]
    if (!validInquiryTypes.includes(inquiryType)) {
      return NextResponse.json({ error: "Invalid inquiry type" }, { status: 400 })
    }

    // Create inquiry record
    const inquiry = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      company: company?.trim() || undefined,
      inquiryType,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      status: "new" as const,
    }

    // Save to database
    try {
      const savedInquiry = await saveInquiry(inquiry)
      console.log("Inquiry saved successfully:", savedInquiry.id)
    } catch (dbError) {
      console.error("Database error:", dbError)
      // Continue with email sending even if database fails
    }

    // Send email notifications
    try {
      await sendContactFormEmails(inquiry)
      console.log("Email notifications sent successfully")
    } catch (emailError) {
      console.error("Email error:", emailError)
      // Return success even if email fails, as inquiry is saved
      return NextResponse.json({
        success: true,
        message: "Message received successfully. We'll get back to you soon.",
        warning: "Email notification may be delayed",
      })
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully. We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}
