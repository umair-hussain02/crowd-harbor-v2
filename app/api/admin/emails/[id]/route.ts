import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Email from "@/lib/models/email";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const deleted = await Email.findByIdAndDelete(params.id);

    if (!deleted) {
      return NextResponse.json({ success: false, error: "Email not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting email:", error);
    return NextResponse.json({ success: false, error: "Failed to delete email" }, { status: 500 });
  }
}
