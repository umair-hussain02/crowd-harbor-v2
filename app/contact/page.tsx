import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { generateSEO } from "@/lib/seo"

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
})

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <ContactHero />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <ContactForm />
            <ContactInfo />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
