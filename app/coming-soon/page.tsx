import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram, Compass, FileCheck2, Route } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { PilotForm } from "@/components/coming-soon/pilot-form"
import { generateSEO } from "@/lib/seo"

export const metadata = generateSEO({
  title: "CrowdHarbor - The new CrowdHarbor is coming soon",
  description:
    "A funding readiness check and a prioritized funding pathway across grants, accelerators and equity. Join the pilot.",
  url: "/coming-soon",
})

const routes = [
  { name: "Grants", text: "Public and innovation funding you may qualify for." },
  { name: "Accelerators", text: "Programs and competitions that fit your stage." },
  { name: "Equity", text: "Angel, crowdfunding and seed routes, once you are ready." },
]

const steps = [
  {
    icon: Compass,
    title: "Tell us about your company",
    text: "A short intake covering your stage, location, R&D activity, funding need and timeline.",
  },
  {
    icon: FileCheck2,
    title: "We review it against curated routes",
    text: "An analyst checks eligibility, strategic fit and how ready you are to apply today.",
  },
  {
    icon: Route,
    title: "You get a clear pathway",
    text: "A readiness report showing what to pursue, what to fix first and in what order.",
  },
]

export default function ComingSoonPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Image src="/logov4.jpg" alt="CrowdHarbor" width={48} height={48} priority className="rounded-md" />
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Launching soon
          </span>
        </header>

        <main>
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">The new CrowdHarbor</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-balance">
                Know which funding to pursue, and when you&apos;re ready to apply.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We&apos;re rebuilding CrowdHarbor around one question every founder asks: where should we look for
                funding first? Get a funding readiness report and a prioritized pathway across grants, accelerators and
                equity, reviewed by a real analyst.
              </p>

              <ul className="grid gap-3 sm:grid-cols-3 pt-2">
                {routes.map((route) => (
                  <li key={route.name} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold">{route.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{route.text}</p>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground">
                Starting with companies in Germany. More regions will follow.
              </p>
            </div>

            <PilotForm />
          </section>

          <section className="border-t border-border bg-card/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl sm:text-3xl font-bold">How it will work</h2>
              <ol className="mt-8 grid gap-6 md:grid-cols-3">
                {steps.map((step, index) => (
                  <li key={step.title} className="rounded-2xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <step.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">Step {index + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </main>

        <footer className="border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} CrowdHarbor. All rights reserved.</p>
            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-condition" className="hover:text-foreground transition-colors">
                Terms and Conditions
              </Link>
              <a href="mailto:contact@crowdharbor.com" aria-label="Email" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/crowdharbor" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/crowdharbor" aria-label="Twitter" className="hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/crowdharbor/" aria-label="Instagram" className="hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
