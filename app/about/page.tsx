import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AboutHero } from "@/components/about/about-hero"
import { MissionSection } from "@/components/about/mission-section"
import { TimelineSection } from "@/components/about/timeline-section"
import { TeamSection } from "@/components/about/team-section"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "About CrowdHarbor - Our Mission & Partnership with Crowdcube",
  description:
    "Learn about CrowdHarbor's mission to connect innovative startups with equity crowdfunding success through our trusted Crowdcube partnership.",
  url: "/about",
  keywords: [
    "CrowdHarbor mission",
    "equity crowdfunding partnership",
    "Crowdcube collaboration",
    "startup funding experts",
    "crowdfunding consultants",
  ],
})

export default function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <AboutHero />
          <MissionSection />
          <TimelineSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
