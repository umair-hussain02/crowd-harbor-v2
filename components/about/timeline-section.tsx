"use client"

import { motion } from "framer-motion"

export function TimelineSection() {
  const timeline = [
    {
      phase: "Discovery",
      title: "Startup Identification",
      description:
        "We identify promising startups with innovative business models and strong growth potential through our extensive network and market research.",
    },
    {
      phase: "Evaluation",
      title: "Due Diligence",
      description:
        "Comprehensive assessment of business viability, market opportunity, team strength, and funding readiness to ensure optimal success rates.",
    },
    {
      phase: "Introduction",
      title: "Crowdcube Partnership",
      description:
        "Facilitated introduction to Crowdcube's platform with enhanced visibility and access to their extensive investor network.",
    },
    {
      phase: "Support",
      title: "Campaign Success",
      description:
        "Ongoing consultation, strategic guidance, and campaign optimization to maximize funding outcomes and investor engagement.",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">From Startup to Success</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process takes startups from initial assessment to successful equity crowdfunding campaigns
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className={`w-full max-w-md ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="text-sm font-medium text-primary mb-2">{item.phase}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
