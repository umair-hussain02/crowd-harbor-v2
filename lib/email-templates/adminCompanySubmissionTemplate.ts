// src/emails/adminCompanySubmissionTemplate.ts

export const adminCompanySubmissionTemplate = (submission: {
  companyWebsite: string;
  companyName: string;
  ownerName: string;
  founderEmail: string;
  targetRaise: string;
  companyDescription: string;
}) => `
  <div style="font-family:'Segoe UI',sans-serif;background-color:#f9fafb;padding:30px 15px;color:#111827;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.05);">
      <div style="background-color:#FD6628;padding:20px;color:#ffffff;">
        <h2 style="margin:0;font-size:20px;">New Company Submission</h2>
        <p style="margin:4px 0 0;">A new company has applied for listing on CrowdHarbor</p>
      </div>
      <div style="padding:25px;">
        <p style="font-size:15px;line-height:1.6;">
          The following company details were submitted through the form:
        </p>

        <div style="background:#fef3ec;padding:15px 20px;border-left:4px solid #FD6628;border-radius:8px;margin:20px 0;">
          <ul style="list-style:none;padding:0;margin:0;font-size:15px;line-height:1.6;color:#374151;">
            <li><strong>Company Name:</strong> ${submission.companyName}</li>
            <li><strong>Owner Name:</strong> ${submission.ownerName}</li>
            <li><strong>Founder Email:</strong> ${submission.founderEmail}</li>
            <li><strong>Website:</strong> <a href="${submission.companyWebsite}" style="color:#FD6628;text-decoration:none;">${submission.companyWebsite}</a></li>
            <li><strong>Target Raise:</strong> ${submission.targetRaise}</li>
            <li style="margin-top:10px;"><strong>Description:</strong><br>${submission.companyDescription}</li>
          </ul>
        </div>

        <p style="font-size:14px;color:#6b7280;">
          Please review the company submission and contact the founder if additional details are required.
        </p>

        <a href="mailto:${submission.founderEmail}"
           style="background:#FD6628;color:#ffffff;padding:10px 20px;border-radius:6px;
                  text-decoration:none;font-weight:500;display:inline-block;margin-top:10px;">
          Contact Founder
        </a>
      </div>
    </div>
  </div>
`;
