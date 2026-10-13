const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const adminPilotTemplate = (submission: { email: string; timestamp: string }) => `
  <div style="font-family:'Segoe UI',sans-serif;background-color:#f9fafb;padding:30px 15px;color:#111827;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color:#FD6628;padding:20px;color:#ffffff;">
        <h2 style="margin:0;font-size:20px;">New Pilot Signup</h2>
        <p style="margin:4px 0 0;">From the CrowdHarbor coming-soon page</p>
      </div>
      <div style="padding:25px;">
        <div style="background:#fef3ec;padding:15px 20px;border-left:4px solid #FD6628;border-radius:8px;margin:0 0 20px;font-size:15px;line-height:1.6;color:#374151;">
          <strong>Email:</strong> ${escapeHtml(submission.email)}<br>
          <strong>Submitted:</strong> ${escapeHtml(new Date(submission.timestamp).toUTCString())}
        </div>
        <a href="mailto:${escapeHtml(submission.email)}"
           style="background:#FD6628;color:#ffffff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:500;display:inline-block;">
          Reply
        </a>
      </div>
    </div>
  </div>
`;

export const pilotConfirmationTemplate = () => `
  <div style="font-family:'Segoe UI',sans-serif;background-color:#f9fafb;padding:30px 15px;color:#111827;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color:#FD6628;padding:20px;color:#ffffff;">
        <h2 style="margin:0;font-size:20px;">You're on the pilot list</h2>
      </div>
      <div style="padding:25px;font-size:15px;line-height:1.6;color:#374151;">
        <p>Thank you for your interest in the new CrowdHarbor.</p>
        <p>
          We're opening the funding readiness check to a small group of pilot companies first.
          We'll email you as soon as a place is available.
        </p>
        <p>Best regards,<br>The CrowdHarbor Team</p>
        <p style="font-size:13px;color:#6b7280;border-top:1px solid #e5e7eb;padding-top:15px;margin-top:25px;">
          You received this email because you asked to join the pilot on crowdharbor.com.
          To be removed from the list, reply to this email.
        </p>
      </div>
    </div>
  </div>
`;
