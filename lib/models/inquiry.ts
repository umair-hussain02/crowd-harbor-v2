import mongoose from "mongoose"

export interface IInquiry {
  _id?: string
  name: string
  email: string
  company?: string
  inquiryType: "startup-funding" | "investor-partnership" | "general-inquiry" | "consultation"
  message: string
  status: "new" | "contacted" | "closed"
  createdAt?: Date
  updatedAt?: Date
}

const inquirySchema = new mongoose.Schema<IInquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    inquiryType: {
      type: String,
      required: [true, "Inquiry type is required"],
      enum: {
        values: ["startup-funding", "investor-partnership", "general-inquiry", "consultation"],
        message: "Invalid inquiry type",
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  },
)

// Create indexes for better query performance
inquirySchema.index({ email: 1 })
inquirySchema.index({ status: 1 })
inquirySchema.index({ createdAt: -1 })

const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", inquirySchema)

export { Inquiry }

export default Inquiry
