"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Our Services</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive equity crowdfunding solutions tailored for startups seeking capital and investors looking for
            innovative opportunities.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6 group">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">For Startups</h3>
            <p className="text-muted-foreground">
              Raise €200k-€8M through equity crowdfunding with expert guidance and Crowdcube partnership
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">For Investors & Partners</h3>
            <p className="text-muted-foreground">
              Access curated investment opportunities and build networks with innovative businesses
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
