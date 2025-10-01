"use client"

import { motion } from "framer-motion"
import { Target, Users, Handshake } from "lucide-react"

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">About CrowdHarbor</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            CrowdHarbor connects startups with Crowdcube, StartEngine, Republic and more — think big, raise smart: we scout the best crowdfunding fit so founders don’t waste time knocking on the wrong doors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description:
                "To democratize startup funding by connecting promising entrepreneurs with top equity crowdfunding platforms.",
            },
            {
              icon: Users,
              title: "Our Approach",
              description:
                "We provide personalized consultation and hands-on support throughout the crowdfunding journey.",
            },
            {
              icon: Handshake,
              title: "Our Partnership",
              description: "Trusted partnerships with Crowdcube, StartEngine, and Republic to maximize funding success for startups.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
