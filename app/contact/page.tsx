import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ContactHero } from "@/components/contact/contact-hero";
import { CompanyContactForm } from "@/components/contact/company-contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { generateSEO } from "@/lib/seo";
import SubmissionOptions from "@/components/contact/submittion-option";
import { InquiryForm } from "@/components/contact/individual-contact-form";

export const metadata = generateSEO({
  title: "Contact CrowdHarbor - Start Your Equity Crowdfunding Journey",
  description:
    "Get in touch with CrowdHarbor to discuss your startup's equity crowdfunding opportunities. Book a free consultation today.",
  url: "/contact",
  keywords: [
    "contact CrowdHarbor",
    "startup funding consultation",
    "equity crowdfunding inquiry",
    "free consultation",
    "crowdfunding advice",
  ],
});

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-1">
          <ContactHero />

          <div className="flex flex-col lg:flex-row justify-between items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 gap-16">
            {/* Left Section - Apply Options */}
            <div className="flex-1 flex justify-start items-start">
              <SubmissionOptions RaiseForm={<CompanyContactForm />} InquiryForm={<InquiryForm />} />
            </div>

            {/* Right Section - Contact Info */}
            <div className="flex-1">
              <ContactInfo />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
