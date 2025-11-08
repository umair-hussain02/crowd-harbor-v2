"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { motion } from "framer-motion";
import React from "react";

export default function PrivacyPolicyPage() {
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
              CrowdHarbor Privacy Policy
            </h1>
            <p className="text-center text-muted-foreground mb-10 text-sm">
              <strong>Effective date:</strong> 25 October 2025 <br />
              <strong>Last updated:</strong> 25 October 2025
            </p>

            {/* Controller Info */}
            <div className="text-sm sm:text-base mb-10 leading-relaxed space-y-1">
              <p>
                <strong>Controller:</strong> CrowdHarbor — Ahmad Ali (Founder)
              </p>
              <p>
                <strong>Address:</strong> Stuttgart, Germany
              </p>
              <p>
                <strong>General email:</strong> ahmad.ali@crowdharbor.com
              </p>
              <p>
                <strong>Privacy / DPO contact:</strong> contact@crowdharbor.com
              </p>
              <p>
                <strong>Phone:</strong> +49 176 6728 7601
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.crowdharbor.com"
                  className="text-accent hover:underline"
                >
                  https://www.crowdharbor.com
                </a>
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-10 leading-relaxed text-base sm:text-lg">
              <Section title="1. Introduction">
                CrowdHarbor respects your privacy and is committed to protecting
                the personal data you provide to us. This Privacy Policy explains
                how we collect, use, disclose, and safeguard personal data when
                you visit our website (crowdharbor.com), contact us, submit an
                intake, or use our matchmaking services that introduce startups
                to crowdfunding platforms and campaign managers.
              </Section>

              <Section title="2. Scope and Purpose">
                CrowdHarbor provides matchmaking services that identify,
                evaluate, and introduce startups to equity crowdfunding platforms
                and their campaign managers. We do not run crowdfunding campaigns,
                accept investments, hold investor funds, or provide legal or
                financial advice.
              </Section>

              <Section title="3. Personal Data We Collect">
                We collect personal, technical, and third-party data including
                contact info, company details, fundraising data, cookies,
                analytics, and referral data necessary to operate our services.
              </Section>

              <Section title="4. Legal Bases for Processing (GDPR)">
                We rely on Consent, Contractual Necessity, Legitimate Interests,
                and Legal Obligations for processing data under the EU GDPR.
              </Section>

              <Section title="5. How We Use Your Personal Data">
                To operate our services, evaluate startups, introduce them to
                crowdfunding platforms, send newsletters, improve analytics, and
                comply with legal obligations.
              </Section>

              <Section title="6. Disclosure, Recipients & Platform Sharing">
                We do not sell personal data. We may share data with service
                providers, crowdfunding platforms (with consent), professional
                advisors, or authorities when legally required.
              </Section>

              <Section title="6.1 Consent & Agreement for Matchmaking Submissions">
                By submitting an intake, you consent to CrowdHarbor using and
                sharing your details for scouting, matchmaking, and introduction
                purposes. You can withdraw consent anytime by contacting{" "}
                <a
                  href="mailto:privacy@crowdharbor.com"
                  className="text-accent hover:underline"
                >
                  privacy@crowdharbor.com
                </a>
                .
              </Section>

              <Section title="7. Cookies and Tracking Technologies">
                We use strictly necessary, functional, analytics, and marketing
                cookies to improve the site. You can manage or disable them via
                your browser.
              </Section>

              <Section title="8. International Transfers">
                We may transfer data outside the EEA with appropriate safeguards
                like Standard Contractual Clauses or adequacy decisions.
              </Section>

              <Section title="9. Data Retention">
                Personal data is retained only as long as necessary to provide our
                services or meet legal obligations. After that, it’s deleted or
                anonymized.
              </Section>

              <Section title="10. Security">
                We use encryption, secure hosting, and access controls to protect
                your data. However, no system is 100% secure.
              </Section>

              <Section title="11. Your Rights (EU/GDPR)">
                You may access, rectify, delete, restrict, or object to data
                processing, and file complaints with data protection authorities.
              </Section>

              <Section title="12. Automated Decision-Making & Profiling">
                CrowdHarbor does not use automated decision-making that has legal
                or significant effects on individuals.
              </Section>

              <Section title="13. Children">
                Our services are not intended for persons under 18, and we do not
                knowingly collect their data.
              </Section>

              <Section title="14. Disclaimer & Limitation of Liability">
                CrowdHarbor’s role is limited to matchmaking and introductions.
                We do not guarantee fundraising outcomes or control third-party
                actions. Liability is limited to proven direct damages as
                permitted by law.
              </Section>

              <Section title="15. Changes to this Privacy Policy">
                We may update this Policy occasionally. Continued use of the site
                indicates acceptance of the updated version.
              </Section>

              <Section title="16. Contact Us">
                For privacy queries or to exercise your rights, contact: <br />
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@crowdharbor.com"
                  className="text-accent hover:underline"
                >
                  privacy@crowdharbor.com
                </a>{" "}
                <br />
                <strong>General Email:</strong> ahmad.ali@crowdharbor.com <br />
                <strong>Phone:</strong> +49 176 6728 7601 <br />
                <strong>Address:</strong> Stuttgart, Germany
              </Section>
            </div>

            <p className="text-center text-muted-foreground mt-12">
              Thank you for trusting{" "}
              <span className="text-accent font-semibold">CrowdHarbor</span>. We
              are committed to safeguarding your privacy.
            </p>
          </motion.div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

/* Reusable section component */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-accent">{title}</h2>
      <p className="text-muted-foreground">{children}</p>
    </section>
  );
}
