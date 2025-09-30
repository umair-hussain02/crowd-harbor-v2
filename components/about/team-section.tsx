"use client"

import { motion } from "framer-motion"

export function TeamSection() {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced team combines deep startup ecosystem knowledge with proven crowdfunding expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Founder & CEO",
              expertise: "Former VC partner with 15+ years in startup investments and crowdfunding strategy.",
            },
            {
              name: "Marcus Rodriguez",
              role: "Head of Partnerships",
              expertise: "Ex-Crowdcube executive specializing in platform relationships and investor networks.",
            },
            {
              name: "Dr. Emily Watson",
              role: "Investment Director",
              expertise: "PhD in Finance with expertise in startup valuation and equity crowdfunding analytics.",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl font-bold text-muted-foreground">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
              <div className="text-primary font-medium mb-3">{member.role}</div>
              <p className="text-muted-foreground text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
