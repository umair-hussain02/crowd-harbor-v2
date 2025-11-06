import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { HeroSection } from "@/components/home/hero-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { PartnersSection } from "@/components/home/partners-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { SuccessStoriesSection } from "@/components/home/success-stories-section"
import { BlogSection } from "@/components/home/blog-section"
import { CTASection } from "@/components/home/cta-section"
import Hero from "@/components/home/hero"
import FaqSection from "@/components/home/faq"
import CreativeSeparator from "@/components/home/seprator"

export default function HomePage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          {/* <CreativeSeparator /> */}
          <HowItWorksSection />
          <FaqSection />
          <PartnersSection />
          <WhyChooseSection />
          {/* <SuccessStoriesSection /> */}
          <BlogSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
