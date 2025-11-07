// src/emails/queryConfirmationTemplate.ts

export const queryConfirmationTemplate = (submission: {
  name: string;
  email: string;
  message: string;
}) => `
  <div style="font-family:'Segoe UI',sans-serif;background-color:#f9fafb;padding:30px 15px;color:#111827;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <img src="https://crowdharbor.com/template-image.png" alt="CrowdHarbor" style="width:100%;height:auto;display:block;" />
      <div style="padding:30px;">
        <h2 style="color:#FD6628;font-size:22px;font-weight:600;">Hi ${submission.name.split(" ")[0]},</h2>
        <p style="font-size:16px;line-height:1.6;margin:15px 0;">
          Thanks for reaching out to <strong>CrowdHarbor</strong>! 🎉  
          We’ve successfully received your query and our team will get back to you shortly.
        </p>
        <div style="background:#f3f4f6;padding:15px 20px;border-radius:8px;margin:20px 0;">
          <p style="margin:0;font-size:15px;"><strong>Your Message:</strong></p>
          <p style="margin-top:8px;color:#374151;">"${submission.message}"</p>
        </div>
       <p style="font-size:15px;line-height:1.6;">
          If you’d like to provide any additional details or documents, please reach out to our team directly.
        </p>

        <a href="mailto:contact@crowdharbor.com"
           style="background:#FD6628;color:#ffffff;padding:12px 24px;border-radius:6px;
                  text-decoration:none;font-weight:500;display:inline-block;margin-top:15px;">
          Contact Our Team
        </a>
        
        <p style="margin-top:25px;font-size:14px;color:#6b7280;">— The CrowdHarbor Team</p>
      </div>
    </div>
    <p style="text-align:center;font-size:12px;color:#9ca3af;margin-top:20px;">
      This email was sent to ${submission.email}. If you didn’t make this request, please ignore it.
    </p>
  </div>
`;
