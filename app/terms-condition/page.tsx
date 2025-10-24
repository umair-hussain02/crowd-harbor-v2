"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { motion } from "framer-motion";

function TermsAndCondition() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
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
              Terms and Conditions
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: <span className="font-medium">24 / 10 / 2025</span>
            </p>

            {/* Content */}
            <div className="space-y-10 leading-relaxed text-lg">
              <p>
                Welcome to <span className="font-semibold">CrowdHarbor</span>.
                These Terms and Conditions (“Terms”) govern your access to and
                use of our website{" "}
                <a href="/" className="text-accent font-medium">
                  crowdharbor.com
                </a>{" "}
                 and any related services (collectively, the
                “Services”) provided by CrowdHarbor (“we,” “us,” or “our”). By
                accessing or using our Site or Services, you agree to comply
                with and be bound by these Terms. If you do not agree, please do
                not use our Site.
              </p>

              <Section
                title="1. Overview of Our Services"
                content="CrowdHarbor connects startups seeking funding with crowdfunding platforms and investors. We provide consultancy and guidance on crowdfunding readiness, campaign strategy, and investor outreach. CrowdHarbor itself does not conduct or facilitate investment transactions — all investments are completed on third-party platforms governed by their own terms."
              />

              <Section
                title="2. Eligibility"
                content="To use our Services, you must be at least 18 years of age (or the legal age of majority in your jurisdiction), have the legal capacity to enter into binding contracts, and agree to comply with applicable laws and these Terms. If you access our Services on behalf of a company, you represent that you have authority to bind that entity."
              />

              <Section
                title="3. Use of the Website"
                content="You agree to use the Site and Services only for lawful purposes and in accordance with these Terms. You must not engage in fraudulent, unlawful, or unauthorized activity. We may suspend or terminate access if we determine a violation."
              />

              <Section
                title="4. Information Accuracy"
                content="While CrowdHarbor strives to provide accurate and up-to-date information, we do not guarantee that all content is complete or current. Any business or investment decisions based on our materials are made at your own risk."
              />

              <Section
                title="5. No Investment Advice"
                content="CrowdHarbor is not a registered broker-dealer or investment advisor. All information provided through our Site is for educational purposes only and does not constitute investment, financial, or legal advice."
              />

              <Section
                title="6. Third-Party Platforms and Links"
                content="Our Services may contain links to third-party websites. We are not responsible for their content, accuracy, or privacy practices. Accessing those sites is at your own risk."
              />

              <Section
                title="7. Intellectual Property"
                content="All content on this Site—including text, graphics, logos, and software—is owned by CrowdHarbor or its licensors. You may not reproduce, distribute, or use this content without our written consent."
              />

              <Section
                title="8. User-Generated Content"
                content="By submitting any content (e.g., feedback or company details), you grant CrowdHarbor a non-exclusive, royalty-free, worldwide license to use, reproduce, and display such content as necessary to provide our Services."
              />

              <Section
                title="9. Disclaimer of Warranties"
                content="The Site and Services are provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free operation."
              />

              <Section
                title="10. Limitation of Liability"
                content="To the fullest extent permitted by law, CrowdHarbor shall not be liable for any damages arising from your use of the Site or Services. Our total liability shall not exceed the amount you paid (if any) for using our Services."
              />

              <Section
                title="11. Indemnification"
                content="You agree to indemnify and hold harmless CrowdHarbor from any claims, damages, or losses resulting from your use of the Site or violation of these Terms."
              />

              <Section
                title="12. Termination"
                content="We may suspend or terminate your access at any time without notice if you violate these Terms. Upon termination, your right to use the Services ceases immediately."
              />

              <Section
                title="13. Governing Law"
                content="These Terms are governed by the laws of Pakistan. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Pakistan."
              />

              <Section
                title="14. Changes to These Terms"
                content="We may update these Terms from time to time. The updated version will be posted on our Site, and continued use constitutes acceptance of the revised Terms."
              />

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  15. Contact Us
                </h2>
                <p>
                  If you have any questions or feedback regarding these Terms,
                  please contact us at:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>
                    <strong>Email:</strong> [insert contact email]
                  </li>
                  <li>
                    <strong>Address:</strong> [insert company address]
                  </li>
                  <li>
                    <strong>Phone:</strong> [insert contact number]
                  </li>
                </ul>
              </section>

              <Section
                title="16. Entire Agreement"
                content="These Terms constitute the entire agreement between you and CrowdHarbor and supersede all prior agreements or understandings."
              />

              <p className="pt-6 text-center text-muted-foreground">
                Thank you for using{" "}
                <span className="text-accent font-semibold">CrowdHarbor</span>.
                By continuing to use our Site, you agree to these Terms and
                Conditions.
              </p>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default TermsAndCondition;

/* Reusable section component */
function Section({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-accent">{title}</h2>
      <p>{content}</p>
    </section>
  );
}
