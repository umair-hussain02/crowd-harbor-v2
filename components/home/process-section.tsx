"use client"

import { motion } from "framer-motion"
import { Search, Users, Rocket } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Discover High-Potential Startups",
      description:
        "We scout ambitious founders and innovative startups with strong growth potential, identifying those best suited for equity crowdfunding success.",
    },
    {
      icon: Users,
      title: "Connect with Leading Platforms",
      description:
        "Through our trusted network of top platforms — including Wefunder, StartEngine, Republic, Crowdcube, and more — we facilitate introductions and streamline the onboarding process.",
    },
    {
      icon: Rocket,
      title: "Empower Founders to Succeed",
      description:
        "From strategy to launch, we guide founders through every step of the fundraising journey, ensuring campaigns are optimized, compliant, and ready to attract investors.",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A streamlined approach to connecting innovative startups with equity crowdfunding success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-2">{index + 1}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
