import { NextRequest, NextResponse } from "next/server";
import { renderToStaticMarkup } from "react-dom/server"
import { GeneralQueryConfirmationEmail } from "@/lib/email-templates/general-query-confirmation";
import nodemailer from "nodemailer";

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
        html: `
          <div style="font-family:'Segoe UI',sans-serif;">
            <h2>New Founder Submission</h2>
            <p><strong>Company Name:</strong> ${submission.companyName}</p>
            <p><strong>Website:</strong> ${submission.companyWebsite}</p>
            <p><strong>Owner Name:</strong> ${submission.ownerName}</p>
            <p><strong>Email:</strong> ${submission.founderEmail}</p>
            <p><strong>Target Raise:</strong> ${submission.targetRaise}</p>
            <p><strong>Description:</strong> ${submission.companyDescription}</p>
            <p><strong>Submitted At:</strong> ${new Date(
              submission.timestamp
            ).toLocaleString()}</p>
          </div>
        `,
      };

      // 📨 User confirmation
      const userMail = {
        from: `"CrowdHarbor" <${process.env.RECIPIENT_EMAIL}>`,
        to: submission.founderEmail,
        subject: `Thank you for submitting your company!`,
        html: `
          <div style="font-family:'Segoe UI',sans-serif;">
            <h2>Hi ${submission.ownerName.split(" ")[0]},</h2>
            <p>Thanks for submitting <strong>${submission.companyName}</strong> to CrowdHarbor!</p>
            <p>We’ll review your details and contact you soon.</p>
            <a href="https://crowdharbor.com/login" style="background:#004aad;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">Go to Dashboard</a>
            <p>— The CrowdHarbor Team</p>
          </div>
        `,
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
        html: `Sent`,
      };

      const userMail = {
        from: `"CrowdHarbor" <${process.env.RECIPIENT_EMAIL}>`,
        to: submission.email,
        subject: `Welcome to CrowdHarbor – Investment Interest Received`,
        html: `
          <div style="font-family:'Segoe UI',sans-serif;">
            <h2>Hi ${submission.name.split(" ")[0]},</h2>
            <p>We’ve received your interest in investing through CrowdHarbor.</p>
            <p>Our team will reach out with potential opportunities soon!</p>
            <a href="https://crowdharbor.com/login" style="background:#004aad;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;">Go to Dashboard</a>
            <p>— The CrowdHarbor Team</p>
          </div>
        `,
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
