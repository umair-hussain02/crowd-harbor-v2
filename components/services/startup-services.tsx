"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, FileText, Target, Lightbulb, BarChart } from "lucide-react"

export function StartupServices() {
  const services = [
    {
      icon: TrendingUp,
      title: "Capital Raising",
      description: "Raise €200k-€8M through equity crowdfunding with our proven strategies and Crowdcube partnership.",
      features: ["Funding strategy development", "Valuation guidance", "Campaign optimization"],
    },
    {
      icon: Users,
      title: "Consultation & Support",
      description: "Expert guidance throughout your entire crowdfunding journey from preparation to post-funding.",
      features: ["One-on-one consultation", "Campaign planning", "Investor relations support"],
    },
    {
      icon: FileText,
      title: "Referral Process",
      description: "Streamlined introduction to Crowdcube with enhanced visibility and platform benefits.",
      features: ["Application assistance", "Platform onboarding", "Enhanced campaign visibility"],
    },
    {
      icon: Target,
      title: "Market Positioning",
      description: "Strategic positioning to maximize investor appeal and campaign success rates.",
      features: ["Competitive analysis", "Value proposition refinement", "Market opportunity assessment"],
    },
    {
      icon: Lightbulb,
      title: "Campaign Strategy",
      description: "Comprehensive campaign planning and execution strategies for maximum funding success.",
      features: ["Marketing strategy", "Investor targeting", "Timeline optimization"],
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: "Data-driven insights and campaign performance monitoring for continuous optimization.",
      features: ["Real-time analytics", "Performance reporting", "Success metrics tracking"],
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">For Startups</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive services to help your startup successfully raise equity capital through crowdfunding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
