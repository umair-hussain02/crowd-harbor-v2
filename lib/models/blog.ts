import mongoose, { type Document, Schema } from "mongoose"

export interface IBlog extends Document {
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  published: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "CrowdHarbor Team",
    },
    published: {
      type: Boolean,
      default: false,
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  },
)

// Create index for search functionality
BlogSchema.index({ title: "text", excerpt: "text", content: "text" })

export default mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema)
