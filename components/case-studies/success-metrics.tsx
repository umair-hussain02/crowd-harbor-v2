"use client"

import { motion } from "framer-motion"

export function SuccessMetrics() {
  const metrics = [
    { label: "Average Funding Amount", value: "€2.8M", description: "Per successful campaign" },
    { label: "Campaign Success Rate", value: "85%", description: "Above industry average" },
    { label: "Average Investor Count", value: "1,200", description: "Per campaign" },
    { label: "Time to Full Funding", value: "45 days", description: "Average campaign duration" },
    { label: "Post-Funding Growth", value: "340%", description: "Average revenue growth" },
    { label: "Follow-on Funding", value: "65%", description: "Secure additional rounds" },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Success Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven results that demonstrate the effectiveness of our approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{metric.label}</h3>
              <p className="text-muted-foreground text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
