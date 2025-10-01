"use client"

import { motion } from "framer-motion"
import { Search, Handshake, Rocket } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Discover High-Potential Startups",
      description:
        "We scout ambitious founders and innovative startups with strong growth potential, identifying those best suited for equity crowdfunding success.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Handshake,
      title: "Connect with Leading Platforms",
      description:
        "Through our trusted network of top platforms — including Wefunder, StartEngine, Republic, Crowdcube, and more — we facilitate introductions and streamline the onboarding process.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Rocket,
      title: "Empower Founders to Succeed",
      description:
        "From strategy to launch, we guide founders through every step of the fundraising journey, ensuring campaigns are optimized, compliant, and ready to attract investors.",
      color: "text-accent-teal",
      bgColor: "bg-accent-teal/10",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process connects innovative startups with equity crowdfunding opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
