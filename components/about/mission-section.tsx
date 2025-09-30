"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story & Mission</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                CrowdHarbor was founded with a simple yet powerful vision: to bridge the gap between innovative startups
                and the capital they need to scale. We recognized that many promising entrepreneurs struggle to access
                traditional funding channels, while equity crowdfunding platforms like Crowdcube offer unprecedented
                opportunities.
              </p>
              <p>
                Our team combines deep expertise in startup ecosystems, investment strategies, and crowdfunding
                dynamics. We don't just facilitate introductions – we provide comprehensive support, strategic guidance,
                and ongoing consultation to maximize the success of every funding campaign.
              </p>
              <p>
                Through our trusted partnership with Crowdcube, we've helped startups raise millions in equity funding,
                enabling them to scale their operations, expand their teams, and bring innovative products to market.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Partnership with Crowdcube</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Exclusive access to Crowdcube's investor network and platform features
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Streamlined application and onboarding process for qualified startups
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Enhanced campaign visibility and marketing support</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Post-funding support and investor relations guidance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
