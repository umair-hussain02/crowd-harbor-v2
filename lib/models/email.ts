import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema(
  {
    recipients: { type: [String], required: true },
    subject: { type: String, required: true },
    content: { type: String, required: true },
    templateId: { type: mongoose.Schema.Types.ObjectId, ref: "EmailTemplate", default: null },
    sentAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Email || mongoose.model("Email", EmailSchema);
