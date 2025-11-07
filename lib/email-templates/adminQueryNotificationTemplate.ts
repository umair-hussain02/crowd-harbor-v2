// src/emails/adminQueryNotificationTemplate.ts

export const adminQueryNotificationTemplate = (submission: {
  name: string;
  email: string;
  message: string;
}) => `
  <div style="font-family:'Segoe UI',sans-serif;background-color:#f9fafb;padding:30px 15px;color:#111827;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color:#FD6628;padding:20px;color:#ffffff;">
        <h2 style="margin:0;font-size:20px;">New Query Received</h2>
        <p style="margin:4px 0 0;">From CrowdHarbor contact form</p>
      </div>
      <div style="padding:25px;">
        <p style="font-size:15px;line-height:1.6;">
          A new message has been submitted on <strong>CrowdHarbor</strong>.
        </p>

        <div style="background:#fef3ec;padding:15px 20px;border-left:4px solid #FD6628;border-radius:8px;margin:20px 0;">
          <ul style="list-style:none;padding:0;margin:0;font-size:15px;line-height:1.6;color:#374151;">
            <li><strong>Name:</strong> ${submission.name}</li>
            <li><strong>Email:</strong> ${submission.email}</li>
            <li style="margin-top:10px;"><strong>Message:</strong><br>${submission.message}</li>
          </ul>
        </div>

        <p style="font-size:14px;color:#6b7280;">
          Please review and follow up with the user if necessary.
        </p>
        <a href="mailto:${submission.email}"
           style="background:#FD6628;color:#ffffff;padding:10px 20px;border-radius:6px;
                  text-decoration:none;font-weight:500;display:inline-block;margin-top:10px;">
          Reply to ${submission.name.split(" ")[0]}
        </a>
      </div>
    </div>
  </div>
`;
