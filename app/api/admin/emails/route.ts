import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Email from "@/lib/models/email";
import EmailTemplate from "@/lib/models/emailTemplate";
import nodemailer from "nodemailer";

interface IEmailTemplate {
  _id: string;
  name: string;
  content: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// GET — Fetch all emails
export async function GET() {
  try {
    await connectDB();

    const emails = await Email.find().sort({ createdAt: -1 }).lean();

    return NextResponse.json({ success: true, emails });
  } catch (error) {
    console.error("Error fetching emails:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}

// POST — Send and Save Email
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const { recipients, subject, content, templateId } = body;
    console.log(recipients);

    if (!recipients?.length || !subject || !content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Merge template if selected
    let finalContent = content;
    if (templateId) {
      const template = await EmailTemplate.findById(
        templateId
      ).lean<IEmailTemplate | null>();

      if (template) {
        finalContent = template.content.replace("{{content}}", content);
      }
    }

    // Create email record in DB
    const newEmail = await Email.create({
      recipients,
      subject,
      content: finalContent,
      templateId: templateId || null,
    });

    // Setup transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter before sending
    await transporter.verify();

    // Prepare HTML content (you can enhance this later)
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        ${finalContent}
        <br/>
        <hr/>
        <small>This email was sent via CrowdHarbor Admin Panel</small>
      </div>
    `;

    // Send email to each recipient
    for (const to of recipients) {
      console.log("Sending email to:", to);

      if (!to || typeof to !== "string" || !to.includes("@")) {
        console.error("❌ Invalid recipient:", to);
        continue;
      }
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        html: htmlBody,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent to: ${to}`);
      } catch (sendErr) {
        console.error(`❌ Failed to send email to ${to}:`, sendErr);
      }
    }

    // (Optional) Send a copy to admin for records
    if (process.env.ADMIN_EMAIL) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `📩 Copy: ${subject}`,
        html: htmlBody,
      });
    }

    return NextResponse.json({ success: true, email: newEmail });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
