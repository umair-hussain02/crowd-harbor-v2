"use client"

import { motion } from "framer-motion"

export function CaseStudiesHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">Success Stories</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover how innovative companies have achieved remarkable growth through equity crowdfunding with our
            Crowdcube partnership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">€110M+</div>
            <div className="text-muted-foreground">Total Capital Raised</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Successful Campaigns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
