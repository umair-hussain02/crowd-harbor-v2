"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { motion } from "framer-motion";

function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-12">
              Last Updated: <span className="font-medium">24 / 10 / 2025</span>
            </p>

            {/* Content */}
            <div className="space-y-10 leading-relaxed text-lg">
              <p>
                Welcome to <span className="font-semibold">CrowdHarbor</span>.
                We respect your privacy and are committed to protecting the
                personal data you share with us. This Privacy Policy explains
                how we collect, use, disclose and safeguard your information
                when you visit our website{" "}
                <a href="/" className="text-accent font-medium">
                  crowdharbor.com
                </a>{" "}
                and/or use our services connecting startups and
                investors for equity-crowdfunding opportunities.
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  1. Information We Collect
                </h2>
                <p>
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    <strong>Personal Information you provide us:</strong> When
                    you fill out our contact or consultation form, sign up for
                    newsletters, apply to be a startup, register as an investor,
                    or otherwise interact with us, you may provide your name,
                    email address, phone number, company name, role
                    (founder/investor), country, and other similar information.
                  </li>
                  <li>
                    <strong>Usage and Log Data:</strong> When you visit the
                    Site, we automatically collect certain information about
                    your device and how you interact with the Site (e.g., IP
                    address, browser type, pages visited, time spent, referral
                    URLs).
                  </li>
                  <li>
                    <strong>Cookies and Tracking Technologies:</strong> We may
                    use cookies, web beacons, pixels, analytics tools and
                    similar technologies to recognise you and understand how you
                    use our Site.
                  </li>
                  <li>
                    <strong>Communications:</strong> If you send us emails or
                    fill out forms, we may retain your communication history
                    with us.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  2. How We Use Your Information
                </h2>
                <p>We use your information for purposes including:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    To provide, operate, and maintain the Site and our services.
                  </li>
                  <li>
                    To respond to your inquiries, schedule consultations, and
                    communicate with you.
                  </li>
                  <li>
                    To send newsletters or marketing materials (only if you’ve
                    opted in).
                  </li>
                  <li>
                    To analyse usage trends and improve our Site experience.
                  </li>
                  <li>
                    To comply with legal obligations or address security issues.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  3. Disclosure of Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share it in
                  limited cases, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>
                    With service providers who perform services on our behalf
                    (e.g., hosting, analytics, email delivery).
                  </li>
                  <li>
                    With business partners (e.g., crowdfunding platforms) when
                    necessary to facilitate your request and with your consent.
                  </li>
                  <li>
                    If required by law or governmental authorities.
                  </li>
                  <li>
                    In connection with a merger or acquisition of CrowdHarbor.
                  </li>
                </ul>
              </section>

              {/* Section 4–12 */}
              <Section
                title="4. Data Security"
                content="We implement appropriate technical and organisational measures to protect your personal information. However, no method of online transmission is completely secure, and we cannot guarantee absolute security."
              />
              <Section
                title="5. Retention of Data"
                content="We retain your data only as long as necessary to fulfil the purposes described in this Privacy Policy or to comply with legal obligations. When no longer needed, your data will be securely deleted or anonymised."
              />
              <Section
                title="6. Cookies and Other Tracking Technologies"
                content="Cookies help us improve the Site, remember preferences and understand user behaviour. You can disable cookies in your browser, but some parts of the Site may not function properly."
              />
              <Section
                title="7. Your Rights"
                content="Depending on your jurisdiction, you may have rights to access, rectify, erase, restrict, or object to the processing of your data, and to data portability. Contact us to exercise these rights."
              />
              <Section
                title="8. Children’s Privacy"
                content="Our services are not intended for users under 18. We do not knowingly collect data from minors. If you believe a child has provided us data, contact us to remove it."
              />
              <Section
                title="9. International Transfers"
                content="Your data may be transferred to and processed in countries such as Pakistan, USA, or EU regions. By using our services, you consent to these transfers."
              />
              <Section
                title="10. Links to Other Websites"
                content="Our Site may link to third-party websites that we do not control. Please review their privacy policies before sharing information."
              />
              <Section
                title="11. Changes to This Privacy Policy"
                content="We may update this Privacy Policy periodically. Changes will be reflected with an updated date, and continued use of the Site indicates your acceptance."
              />
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-accent">
                  12. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, contact
                  us at:
                </p>
                <ul className="mt-2">
                  <li>
                    <strong>Email:</strong> [insert email address]
                  </li>
                  <li>
                    <strong>Address:</strong> [insert physical address]
                  </li>
                  <li>
                    <strong>Phone:</strong> [insert phone number]
                  </li>
                </ul>
              </section>

              <p className="pt-6 text-center text-muted-foreground">
                Thank you for placing your trust in{" "}
                <span className="text-accent font-semibold">CrowdHarbor</span>.
                We are committed to protecting your privacy.
              </p>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default PrivacyPolicy;

/* Reusable section component */
function Section({ title, content }: { title: string; content: string }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3 text-accent">{title}</h2>
      <p>{content}</p>
    </section>
  );
}
