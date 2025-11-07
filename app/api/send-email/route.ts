import { NextRequest, NextResponse } from "next/server";
import { renderToStaticMarkup } from "react-dom/server"
import nodemailer from "nodemailer";
import { queryConfirmationTemplate } from "@/lib/email-templates/queryConfirmationTemplate";
import { companySubmissionTemplate } from "@/lib/email-templates/companySubmissionTemplate";
import { adminCompanySubmissionTemplate } from "@/lib/email-templates/adminCompanySubmissionTemplate";
import { adminQueryNotificationTemplate } from "@/lib/email-templates/adminQueryNotificationTemplate";

export async function POST(request: NextRequest) {
  

  try {
    
    const body = await request.json();
    const { formType, ...data } = body;

    if (!formType) {
      return NextResponse.json({ error: "Missing form type" }, { status: 400 });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- 🧩 HANDLE FOUNDER / STARTUP FORM ---
    if (formType === "founder") {
      const {
        companyWebsite,
        companyName,
        ownerName,
        founderEmail,
        targetRaise,
        companyDescription,
      } = data;

      // Validation
      if (
        !companyWebsite ||
        !companyName ||
        !ownerName ||
        !founderEmail ||
        !targetRaise ||
        !companyDescription
      ) {
        return NextResponse.json(
          { error: "Missing required founder fields" },
          { status: 400 }
        );
      }

      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(founderEmail)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }

      const submission = {
        type: "Founder Submission",
        companyWebsite: companyWebsite.trim(),
        companyName: companyName.trim(),
        ownerName: ownerName.trim(),
        founderEmail: founderEmail.toLowerCase().trim(),
        targetRaise: targetRaise.trim(),
        companyDescription: companyDescription.trim(),
        timestamp: new Date().toISOString(),
      };

      // 📨 Admin mail
      const adminMail = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `🚀 New Founder Submission: ${submission.companyName}`,
        html: adminCompanySubmissionTemplate(submission),
      };

      // 📨 User confirmation
      const userMail = {
        from: `"CrowdHarbor" <${process.env.RECIPIENT_EMAIL}>`,
        to: submission.founderEmail,
        subject: `Thank you for submitting your company!`,
        html:companySubmissionTemplate(submission) ,
      };

      await transporter.sendMail(adminMail);
      await transporter.sendMail(userMail);

      return NextResponse.json({
        success: true,
        message: "Founder submission received and emails sent.",
      });
    }

    // --- 🧩 HANDLE QUERY FORM ---
    if (formType === "general-query") {
      const {
        name,
        email,
        message,
      } = data;

      if (
        !name ||
        !email ||
        !message
      ) {
        return NextResponse.json(
          { error: "Missing required investor fields" },
          { status: 400 }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 }
        );
      }

      const submission = {
        type: "General Query",
        name: name.trim(),
        email: email.toLowerCase().trim(),
        message: message?.trim() ?? "N/A",
        timestamp: new Date().toISOString(),
      };

      const adminMail = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `💼 New Investor Submission: ${submission.name}`,
        html: adminQueryNotificationTemplate(submission),
      };

      const userMail = {
        from: `"CrowdHarbor" <${process.env.RECIPIENT_EMAIL}>`,
        to: submission.email,
        subject: `Welcome to CrowdHarbor – Investment Interest Received`,
        html: queryConfirmationTemplate(submission),
      };

      await transporter.sendMail(adminMail);
      await transporter.sendMail(userMail);

      return NextResponse.json({
        success: true,
        message: "Investor submission received and emails sent.",
      });
    }

    // --- If invalid form type ---
    return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
