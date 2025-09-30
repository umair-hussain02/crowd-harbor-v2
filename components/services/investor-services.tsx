"use client"

import { motion } from "framer-motion"
import { Network, Search, Shield, Handshake } from "lucide-react"

export function InvestorServices() {
  const services = [
    {
      icon: Network,
      title: "Network Building",
      description:
        "Connect with a curated network of innovative startups and fellow investors in the equity crowdfunding space.",
      benefits: ["Access to pre-vetted startups", "Investor community access", "Exclusive networking events"],
    },
    {
      icon: Search,
      title: "Deal Sourcing",
      description:
        "Early access to promising investment opportunities through our startup identification and evaluation process.",
      benefits: ["Priority deal access", "Comprehensive due diligence", "Investment opportunity alerts"],
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description:
        "Professional evaluation and risk analysis of potential investment opportunities to inform decision-making.",
      benefits: ["Detailed risk reports", "Market analysis", "Financial projections review"],
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description:
        "Collaborate with CrowdHarbor on strategic initiatives and expand your involvement in the startup ecosystem.",
      benefits: ["Strategic partnerships", "Co-investment opportunities", "Advisory roles"],
    },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">For Investors & Partners</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build your network of innovative businesses and discover promising investment opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
