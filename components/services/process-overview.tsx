"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ProcessOverview() {
  const steps = [
    "Initial consultation and startup assessment",
    "Due diligence and funding readiness evaluation",
    "Campaign strategy development and planning",
    "Introduction to Crowdcube platform and network",
    "Campaign launch and ongoing optimization support",
    "Post-funding guidance and investor relations",
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground mb-8">
              A systematic approach to equity crowdfunding success, refined through years of experience and successful
              campaigns.
            </p>

            <div className="space-y-4 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{step}</span>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="group">
              <Link href="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Success Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">€110M+</div>
                <div className="text-sm text-muted-foreground">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Investors Connected</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
