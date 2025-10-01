"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign } from "lucide-react"

export function SuccessStoriesSection() {
  const stories = [
    {
      company: "Monogram Orthopeadics",
      industry: "HealthTech",
      raised: "$22.5M",
      investors: "1,2000+",
      description:
        "Innovative medical device company that raised $22.5M to revolutionize orthopedic care with custom implants.",
      metrics: [
        { label: "Target", value: "$1.5M" },
        { label: "Min", value: "$250" },
        { label: "Overfunding", value: "167%" },
      ],
    },
    {
      company: "Boxabl",
      industry: "Mass Production",
      raised: "$24M",
      investors: "10,000+",
      description:
        "Pioneering mass-produced housing solutions, Boxabl raised $24M to scale affordable, sustainable homes globally.",
      metrics: [
        { label: "Target", value: "$2M" },
        { label: "Min", value: "$1K" },
        { label: "Overfunding", value: "210%" },
      ],
    },
    {
      company: "Control Plus",
      industry: "IT Services",
      raised: "$1.2M",
      investors: "240+",
      description: "Control+ is dedicated to protecting online consumers against cyber threats through advanced artificial intelligence. ", // dedicated to protectect online consumer
      metrics: [
        { label: "Target", value: "$1.5M" },
        { label: "Min", value: "$100" },
        { label: "Overfunding", value: "12%" },
      ],
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real startups, real results. See how we've helped companies achieve their fundraising goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {story.industry}
                        </Badge>
                        <div className="flex items-center text-accent font-bold">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {story.raised}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{story.company}</h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {story.investors} investors
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{story.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-lg font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Overall stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">£50M+</div>
              <div className="text-muted-foreground">Total Raised</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">150+</div>
              <div className="text-muted-foreground">Successful Campaigns</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-teal">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
