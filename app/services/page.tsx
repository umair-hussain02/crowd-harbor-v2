import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ServicesHero } from "@/components/services/services-hero"
import { StartupServices } from "@/components/services/startup-services"
import { InvestorServices } from "@/components/services/investor-services"
import { ProcessOverview } from "@/components/services/process-overview"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Services - CrowdHarbor Equity Crowdfunding Solutions",
  description:
    "Comprehensive equity crowdfunding services for startups and investors. Raise €200k-€8M through our Crowdcube partnership.",
  url: "/services",
  keywords: [
    "equity crowdfunding services",
    "startup funding consultation",
    "Crowdcube partnership",
    "investment services",
    "crowdfunding strategy",
  ],
})

export default function ServicesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <ServicesHero />
          <StartupServices />
          {/* <InvestorServices /> */}
          {/* <ProcessOverview /> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
