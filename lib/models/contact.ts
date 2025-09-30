import mongoose, { type Document, Schema } from "mongoose"

export interface IContact extends Document {
  name: string
  email: string
  company?: string
  message: string
  createdAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema)
