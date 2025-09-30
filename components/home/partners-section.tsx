"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LogoCarousel } from "./logo-carousel";

export function PartnersSection() {
  const successStories = [
    {
      name: "Monzo",
      description: "Digital banking revolution",
      raised: "€20M+",
      category: "FinTech",
    },
    {
      name: "Monogram Orthopaedics",
      description: "Innovative orthopedic solutions",
      raised: "€22M+",
      category: "Medical",
    },
    {
      name: "Mr & Mrs Smith",
      description: "Boutique hotel platform",
      raised: "€15M+",
      category: "Travel",
    },
  ];

  return (
    <section className="py-10 bg-muted/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our collaborations with top crowdfunding platforms have helped innovative companies across industries secure the funding they need to grow.
          </p>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl mb-16"
          >
            <div className="text-4xl font-bold text-primary">Crowdcube</div>
            <div className="mx-8 w-px h-12 bg-primary/30" />
            <div className="text-4xl font-bold text-foreground">CrowdHarbor</div>
          </motion.div> */}
        </motion.div>

        <LogoCarousel />
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/30 group-hover:-translate-y-1">
                <div className="relative h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="relative text-2xl font-bold text-primary">
                    {story.name}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-foreground">
                      {story.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20"
                    >
                      {story.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground">{story.description}</p>

                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary">
                      {story.raised}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Successfully raised
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">2+ Years</div>
              <div className="text-muted-foreground">
                Crowdfunding Platform Allies
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-teal">€67M+</div>
              <div className="text-muted-foreground">
                Raised by Featured Companies
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.37%</div>
              <div className="text-muted-foreground">
                Success Rate for Qualified Startups
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
