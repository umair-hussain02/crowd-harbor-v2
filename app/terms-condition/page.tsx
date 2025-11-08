"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { motion } from "framer-motion";

function TermsAndCondition() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground flex flex-col pt-24">
        <Navbar />

        <main className="flex-grow py-20 px-6 sm:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-accent text-center">
              CrowdHarbor — Terms & Conditions
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-12">
              Effective Date: <span className="font-medium">25 October 2025</span> <br />
              Last Updated: <span className="font-medium">25 October 2025</span>
            </p>

            {/* Content */}
            <div className="space-y-10 leading-relaxed text-lg">
              <p>
                <strong>Provider / Controller:</strong> CrowdHarbor — Ahmad Ali (Founder)
                <br />
                <strong>Address:</strong> Stuttgart, Germany
                <br />
                <strong>General email / Contact:</strong>{" "}
                <a href="mailto:info@crowdharbor.com" className="text-accent">info@crowdharbor.com</a>
                <br />
                <strong>Privacy / DPO contact:</strong>{" "}
                <a href="mailto:contact@crowdharbor.com" className="text-accent">contact@crowdharbor.com</a>
                <br />
                <strong>Founder email:</strong>{" "}
                <a href="mailto:ahmad.ali@crowdharbor.com" className="text-accent">ahmad.ali@crowdharbor.com</a>
                <br />
                <strong>Phone:</strong> +49 176 6728 7601
                <br />
                <strong>Website:</strong>{" "}
                <a href="https://www.crowdharbor.com" className="text-accent" target="_blank">
                  https://www.crowdharbor.com
                </a>
              </p>

              <p>
                By accessing or using the CrowdHarbor website (crowdharbor.com) and related Services (collectively, the “Site” and “Services”), you agree to these Terms & Conditions (“Terms”). If you do not accept these Terms, do not use the Site or Services.
              </p>

              {/* All numbered sections */}
              {sections.map((sec, index) => (
                <Section key={index} title={sec.title} content={sec.content} />
              ))}

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">23. Acknowledgement</h2>
                <p>
                  By using the Site or Services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
                </p>
              </section>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default TermsAndCondition;

/* Reusable Section Component */
function Section({ title, content }: { title: string; content: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-accent">{title}</h2>
      <div className="space-y-3">{content}</div>
    </section>
  );
}

/* All 22 numbered sections */
const sections = [
  {
    title: "1. Introduction and scope",
    content: (
      <>
        <p>
          1.1 CrowdHarbor provides matchmaking services that scout, evaluate, and introduce startups and founders (“Founders”) to equity crowdfunding platforms and campaign managers (“Platforms” or “Campaign Managers”) for the purpose of fundraising introductions (“Matchmaking Services”).
        </p>
        <p>
          1.2 CrowdHarbor currently operates from Germany and intends to register as a German company. These Terms are governed by and construed in accordance with the laws of the Federal Republic of Germany (see Section 17).
        </p>
        <p>
          1.3 CrowdHarbor does not: run crowdfunding campaigns; accept investments or hold investor funds; act as escrow; provide investment, legal, tax, or financial advice; or act as a party to any investment transaction. Platforms are independent third parties and operate under their own terms.
        </p>
      </>
    ),
  },
  {
    title: "2. Eligibility; authority to submit data",
    content: (
      <>
        <p>2.1 You must be at least 18 years old and legally competent to enter into binding contracts to use the Services.</p>
        <p>2.2 If you submit data on behalf of a company, you represent and warrant that you have the authority to act on that company’s behalf and to provide the data and consents required by these Terms and our Privacy Policy.</p>
        <p>2.3 You warrant that all information you provide is true, accurate, and complete and that you will promptly update any information that becomes inaccurate.</p>
      </>
    ),
  },
  {
    title: "3. Description of CrowdHarbor services and limits",
    content: (
      <>
        <p>
          3.1 CrowdHarbor will perform a readiness assessment, shortlist suitable Platforms, and make introductions using the minimum necessary data.
        </p>
        <p>
          3.2 CrowdHarbor does not guarantee platform acceptance, fundraising success, or any particular outcome.
        </p>
        <p>
          3.3 Referrals are objective and transparent; CrowdHarbor does not show favoritism or bias.
        </p>
      </>
    ),
  },
  {
    title: "4. Founder responsibilities and warranties",
    content: (
      <>
        <p>
          Founders must ensure that all data submitted is accurate, comply with applicable laws, and perform their own due diligence.
        </p>
        <p>
          CrowdHarbor shall have no liability for losses arising from inaccurate or misleading information provided by Founders.
        </p>
      </>
    ),
  },
  {
    title: "5. Data use and explicit consent for submissions",
    content: (
      <>
        <p>
          By submitting data to CrowdHarbor, you consent to our use and sharing of it for matchmaking and introductions. See the Privacy Policy for details.
        </p>
        <p>
          You may withdraw consent by contacting <a href="mailto:contact@crowdharbor.com" className="text-accent">contact@crowdharbor.com</a>. Withdrawal will not affect completed introductions.
        </p>
      </>
    ),
  },
  {
    title: "6. Platform & Campaign Manager acknowledgement & obligations",
    content: (
      <>
        <p>
          Platforms acknowledge that Founder data is unverified unless agreed otherwise. Platforms must perform their own due diligence and will not hold CrowdHarbor liable for inaccurate data.
        </p>
      </>
    ),
  },
  {
    title: "7. Fees; relationship with Platforms",
    content: (
      <>
        <p>
          CrowdHarbor’s matchmaking services are free for founders. Any fees from Platforms are outside our control. CrowdHarbor does not handle investor funds.
        </p>
      </>
    ),
  },
  {
    title: "8. Use of Site and prohibited conduct",
    content: (
      <>
        <p>
          You must use the Site lawfully. Fraudulent, misleading, or unlawful activity may lead to suspension or termination.
        </p>
      </>
    ),
  },
  {
    title: "9. Intellectual Property",
    content: (
      <>
        <p>
          All Site content belongs to CrowdHarbor or licensors. You may not copy or distribute it without written consent.
        </p>
      </>
    ),
  },
  {
    title: "10. No investment/legal/tax advice; no guarantees",
    content: (
      <>
        <p>
          Nothing provided by CrowdHarbor constitutes investment, legal, or tax advice. We do not guarantee success or platform acceptance.
        </p>
      </>
    ),
  },
  {
    title: "11. Warranties disclaimed",
    content: (
      <>
        <p>
          The Site and Services are provided “as is.” CrowdHarbor disclaims all implied warranties, including merchantability or fitness for a purpose.
        </p>
      </>
    ),
  },
  {
    title: "12. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless CrowdHarbor and its affiliates from any claims or damages resulting from your breach or misuse of the Services.
        </p>
      </>
    ),
  },
  {
    title: "13. Limitation of liability",
    content: (
      <>
        <p>
          CrowdHarbor’s liability is limited to €5,000. We are not liable for indirect or consequential damages.
        </p>
      </>
    ),
  },
  {
    title: "14. Termination; suspension; survival",
    content: (
      <>
        <p>
          CrowdHarbor may suspend or terminate Services for violations. Certain sections (IP, Liability, Indemnification) survive termination.
        </p>
      </>
    ),
  },
  {
    title: "15. Records, consent, and compliance",
    content: (
      <>
        <p>
          CrowdHarbor maintains records of consents and submissions as required by law to ensure compliance.
        </p>
      </>
    ),
  },
  {
    title: "16. Transparency and no favoritism",
    content: (
      <>
        <p>
          CrowdHarbor commits to transparent referrals with no preferential treatment or undisclosed benefits.
        </p>
      </>
    ),
  },
  {
    title: "17. Governing law; dispute resolution; jurisdiction",
    content: (
      <>
        <p>
          These Terms are governed by the laws of Germany. Disputes will be resolved in Stuttgart courts unless consumer protection laws state otherwise.
        </p>
      </>
    ),
  },
  {
    title: "18. Force majeure",
    content: (
      <>
        <p>
          CrowdHarbor is not liable for delays caused by events beyond our control (e.g., pandemics, strikes, outages).
        </p>
      </>
    ),
  },
  {
    title: "19. Severability; waiver; assignment",
    content: (
      <>
        <p>
          If any part of these Terms is invalid, the rest remains in effect. You cannot assign your rights without CrowdHarbor’s consent.
        </p>
      </>
    ),
  },
  {
    title: "20. Changes to the Terms",
    content: (
      <>
        <p>
          We may update these Terms occasionally. Continued use of the Site means you accept the latest version.
        </p>
      </>
    ),
  },
  {
    title: "21. Entire agreement",
    content: (
      <>
        <p>
          These Terms, along with our Privacy Policy, represent the full agreement between you and CrowdHarbor.
        </p>
      </>
    ),
  },
  {
    title: "22. Contact information",
    content: (
      <>
        <p>
          CrowdHarbor — Ahmad Ali (Founder)
          <br />
          Email: <a href="mailto:contact@crowdharbor.com" className="text-accent">contact@crowdharbor.com</a>
          <br />
          Founder email:{" "}
          <a href="mailto:ahmad.ali@crowdharbor.com" className="text-accent">ahmad.ali@crowdharbor.com</a>
          <br />
          Phone: +49 176 6728 7601
          <br />
          Address: Stuttgart, Germany
        </p>
      </>
    ),
  },
];
