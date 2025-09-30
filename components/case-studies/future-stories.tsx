"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"

export function FutureStories() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Your Success Story Awaits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Join the growing list of successful companies that have achieved their funding goals through our proven
            approach and Crowdcube partnership.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Your Company Here</h3>
              <p className="text-muted-foreground">Ready to become our next success story?</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Future Success</h3>
              <p className="text-muted-foreground">Join our portfolio of funded startups</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Next Innovation</h3>
              <p className="text-muted-foreground">Transform your startup vision into reality</p>
            </motion.div>
          </div>

          <Button asChild size="lg" className="text-lg px-8 py-6 group">
            <Link href="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
