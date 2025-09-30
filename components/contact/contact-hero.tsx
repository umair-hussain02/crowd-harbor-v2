"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Get In Touch</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to explore equity crowdfunding for your startup? Let's discuss how CrowdHarbor can help you achieve
            your funding goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
