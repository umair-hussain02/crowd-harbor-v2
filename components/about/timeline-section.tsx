"use client"

import { motion } from "framer-motion"

export function TimelineSection() {
  const timeline = [
    {
      phase: "Discovery",
      title: "Startup Identification",
      description:
        "We scout high-potential startups with innovative models and clear growth signals using our network and market research.",
    },
    {
      phase: "Evaluation",
      title: "Value & Scalability Review",
      description:
        "We assess business value, market presence, scalability, team strength, and fundraising readiness — ensuring the company meets platform-specific requirements before any introduction.",
    },
    {
      phase: "Introduction",
      title: "Platform Match & Warm Hand-off",
      description:
        "We match your business to the best-suited platform (Crowdcube, StartEngine, Republic, etc.) and make a warm introduction only when the fit is right — preventing wasted time and wrong-door approaches.",
    },
    {
      phase: "Support",
      title: "Campaign Handoff & Success",
      description:
        "After the match, the partner platform leads fundraising and assigns campaign and strategy managers. We continue to provide guidance and coordination to optimize campaign performance and investor engagement.",
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
            Our proven process takes startups from initial assessment to successful equity crowdfunding campaigns.
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
