import nodemailer from "nodemailer"

export interface EmailInquiry {
  name: string
  email: string
  company?: string
  inquiryType: string
  message: string
  timestamp: string
}

export async function sendContactFormEmails(inquiry: EmailInquiry) {
  // Configure email transporter
  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Email to CrowdHarbor team
  const adminEmailOptions = {
    from: process.env.SMTP_FROM || "noreply@crowdharbor.com",
    to: process.env.ADMIN_EMAIL || "hello@crowdharbor.com",
    subject: `New Contact Form Submission - ${inquiry.inquiryType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">New Contact Form Submission</h2>
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${inquiry.name}</p>
          <p><strong>Email:</strong> ${inquiry.email}</p>
          <p><strong>Company:</strong> ${inquiry.company || "Not provided"}</p>
          <p><strong>Inquiry Type:</strong> ${inquiry.inquiryType}</p>
          <p><strong>Submitted:</strong> ${new Date(inquiry.timestamp).toLocaleString()}</p>
        </div>
        <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #2d3748; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #4a5568;">${inquiry.message}</p>
        </div>
        <p style="color: #718096; font-size: 14px; margin-top: 20px;">
          This email was sent from the CrowdHarbor contact form.
        </p>
      </div>
    `,
  }

  // Auto-reply email to user
  const userEmailOptions = {
    from: process.env.SMTP_FROM || "noreply@crowdharbor.com",
    to: inquiry.email,
    subject: "Thank you for contacting CrowdHarbor",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a365d;">Thank you for reaching out!</h2>
        <p>Dear ${inquiry.name},</p>
        <p>Thank you for your interest in CrowdHarbor. We've received your message and will get back to you within 24 hours.</p>
        
        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2d3748; margin-top: 0;">Your submission details:</h3>
          <p><strong>Inquiry Type:</strong> ${inquiry.inquiryType}</p>
          <p><strong>Company:</strong> ${inquiry.company || "Not provided"}</p>
          <p><strong>Submitted:</strong> ${new Date(inquiry.timestamp).toLocaleString()}</p>
        </div>

        <p>In the meantime, feel free to explore our <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://crowdharbor.com"}/case-studies" style="color: #3182ce;">success stories</a> and learn more about our <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://crowdharbor.com"}/services" style="color: #3182ce;">services</a>.</p>
        
        <p>Best regards,<br>The CrowdHarbor Team</p>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px; color: #718096; font-size: 14px;">
          <p>CrowdHarbor - Connecting startups to equity crowdfunding success</p>
          <p>Email: hello@crowdharbor.com | Phone: +44 20 7946 0958</p>
        </div>
      </div>
    `,
  }

  // Send both emails
  await Promise.all([transporter.sendMail(adminEmailOptions), transporter.sendMail(userEmailOptions)])
}
