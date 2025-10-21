import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import EmailTemplate from "@/lib/models/emailTemplate";

// 🧩 GET — Fetch all templates
export async function GET() {
  try {
    await connectDB();

    const templates = await EmailTemplate.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, templates });
  } catch (error) {
    console.error("Error fetching templates:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}

// 🧩 POST — Add new template
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, content, description } = body;

    // Validate inputs
    if (!name || !content) {
      return NextResponse.json(
        { success: false, error: "Name and content are required" },
        { status: 400 }
      );
    }

    // Create new template
    const newTemplate = await EmailTemplate.create({
      name,
      content,
      description: description || "",
    });

    return NextResponse.json({ success: true, template: newTemplate });
  } catch (error) {
    console.error("Error creating template:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create template" },
      { status: 500 }
    );
  }
}
