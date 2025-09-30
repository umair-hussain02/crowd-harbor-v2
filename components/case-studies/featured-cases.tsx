"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, Award } from "lucide-react"

export function FeaturedCases() {
  const cases = [
    {
      company: "Monzo",
      industry: "Digital Banking",
      raised: "€20M+",
      investors: "9,000+",
      description:
        "Revolutionary digital banking platform that transformed mobile banking with innovative features and transparent fee structure.",
      highlights: [
        "Fastest growing digital bank in the UK",
        "Over 5 million customers acquired",
        "Multiple successful funding rounds",
      ],
      icon: TrendingUp,
    },
    {
      company: "BrewDog",
      industry: "Craft Beer",
      raised: "€75M+",
      investors: "130,000+",
      description:
        "Craft beer pioneer that disrupted the traditional brewing industry with bold flavors and community-driven approach.",
      highlights: [
        "Global expansion to 100+ countries",
        "Revolutionary 'Equity for Punks' campaigns",
        "Built passionate community of brand advocates",
      ],
      icon: Users,
    },
    {
      company: "Mr & Mrs Smith",
      industry: "Travel & Hospitality",
      raised: "€15M+",
      investors: "2,500+",
      description:
        "Boutique hotel booking platform offering curated luxury travel experiences with personalized service.",
      highlights: [
        "Partnership with 1,500+ boutique hotels",
        "Award-winning travel platform",
        "Expansion into luxury travel experiences",
      ],
      icon: Award,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Featured Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Companies that have achieved remarkable growth through equity crowdfunding
          </p>
        </motion.div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <caseStudy.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{caseStudy.company}</h3>
                      <div className="text-primary font-medium">{caseStudy.industry}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-2xl font-bold text-primary">{caseStudy.raised}</div>
                      <div className="text-sm text-muted-foreground">Raised</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-xl">
                      <div className="text-2xl font-bold text-primary">{caseStudy.investors}</div>
                      <div className="text-sm text-muted-foreground">Investors</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{caseStudy.description}</p>

                  <div className="space-y-3">
                    {caseStudy.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="h-80 bg-muted/30 rounded-2xl flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground">{caseStudy.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
