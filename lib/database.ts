import connectDB from "@/lib/mongodb"
import { Inquiry as InquiryModel } from "@/lib/models/inquiry"

export interface Inquiry {
  id?: string
  name: string
  email: string
  company?: string
  inquiryType: string
  message: string
  timestamp: string
  status: "new" | "contacted" | "closed"
}

export async function saveInquiry(inquiry: Omit<Inquiry, "id">): Promise<Inquiry> {
  try {
    await connectDB()

    const newInquiry = new InquiryModel({
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      inquiryType: inquiry.inquiryType,
      message: inquiry.message,
      status: inquiry.status,
    })

    const savedInquiry = await newInquiry.save()

    return {
      id: savedInquiry._id.toString(),
      name: savedInquiry.name,
      email: savedInquiry.email,
      company: savedInquiry.company,
      inquiryType: savedInquiry.inquiryType,
      message: savedInquiry.message,
      timestamp: savedInquiry.createdAt?.toISOString() || new Date().toISOString(),
      status: savedInquiry.status,
    }
  } catch (error) {
    console.error("Error saving inquiry:", error)
    throw new Error("Failed to save inquiry")
  }
}

export async function getInquiries(): Promise<Inquiry[]> {
  try {
    await connectDB()

    const inquiries = await InquiryModel.find({}).sort({ createdAt: -1 }).lean()

    return inquiries.map((inquiry) => ({
      id: inquiry._id.toString(),
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      inquiryType: inquiry.inquiryType,
      message: inquiry.message,
      timestamp: inquiry.createdAt?.toISOString() || new Date().toISOString(),
      status: inquiry.status,
    }))
  } catch (error) {
    console.error("Error fetching inquiries:", error)
    throw new Error("Failed to fetch inquiries")
  }
}

export async function updateInquiryStatus(id: string, status: Inquiry["status"]): Promise<void> {
  try {
    await connectDB()

    await InquiryModel.findByIdAndUpdate(id, { status }, { new: true })
  } catch (error) {
    console.error("Error updating inquiry status:", error)
    throw new Error("Failed to update inquiry status")
  }
}

export async function connectToDatabase() {
  return await connectDB()
}

// Keep the schema export for reference
export const inquirySchema = {
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, required: false },
  inquiryType: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
}
