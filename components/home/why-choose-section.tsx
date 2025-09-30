"use client"

import { motion } from "framer-motion"
import { Shield, Users, TrendingUp, Award } from "lucide-react"

export function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "Direct partnership with Crowdcube, the UK's leading equity crowdfunding platform.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our team of experienced professionals guides you through every step of the fundraising process.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "We've helped startups raise over £50M through successful crowdfunding campaigns.",
    },
    {
      icon: Award,
      title: "End-to-End Support",
      description: "From initial assessment to campaign launch and beyond, we're with you every step of the way.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Why Choose CrowdHarbor?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We combine deep industry expertise with proven relationships to maximize your fundraising success.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Illustration/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 h-96 flex items-center justify-center">
              {/* Animated elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute top-8 left-8 w-4 h-4 bg-primary rounded-full animate-float" />
                <div
                  className="absolute top-16 right-12 w-3 h-3 bg-accent rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-12 left-16 w-5 h-5 bg-accent-teal rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-8 right-8 w-3 h-3 bg-primary rounded-full animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Central illustration placeholder */}
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-12 h-12 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">Success Guaranteed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
