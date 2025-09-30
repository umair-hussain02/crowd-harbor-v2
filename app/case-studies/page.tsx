import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero"
import { FeaturedCases } from "@/components/case-studies/featured-cases"
import { SuccessMetrics } from "@/components/case-studies/success-metrics"
import { FutureStories } from "@/components/case-studies/future-stories"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "Case Studies - CrowdHarbor Success Stories",
  description:
    "Discover how CrowdHarbor has helped startups like Monzo, BrewDog, and Mr & Mrs Smith achieve equity crowdfunding success through Crowdcube.",
  url: "/case-studies",
  keywords: [
    "crowdfunding success stories",
    "Monzo funding",
    "BrewDog crowdfunding",
    "startup success cases",
    "equity crowdfunding results",
  ],
})

export default function CaseStudiesPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <CaseStudiesHero />
          <FeaturedCases />
          <SuccessMetrics />
          <FutureStories />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
