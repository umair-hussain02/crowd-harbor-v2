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
                CrowdHarbor was founded with a simple, powerful vision: to bridge the gap between innovative startups and the capital they need to scale. We saw that many promising entrepreneurs struggle to access traditional funding channels, while leading equity crowdfunding platforms open new routes to growth.

              </p>
              <p>
                Our team blends deep expertise in startup ecosystems, investment strategy, and crowdfunding dynamics. We don’t just make introductions — we deliver comprehensive support, strategic guidance, and ongoing consultation to maximize each campaign’s chance of success. Think big, raise smart — we scout the best crowdfunding fit so founders don’t waste time knocking on the wrong doors.

              </p>
              <p>
                Through trusted partnerships with platforms like Crowdcube, StartEngine, and Republic, we’ve helped startups raise millions in equity funding, enabling them to expand teams, scale operations, and bring bold ideas to market.
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
            <h3 className="text-2xl font-bold text-foreground mb-6">Platform Partnerships & Benefits</h3>
            <p className="pb-4 text-gray-800">Through our partnerships with Crowdcube, StartEngine, and Republic, CrowdHarbor gives startups one gateway to multiple investor pools and platform tools:</p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Wide investor access: tap UK/EU, U.S., and global investor networks to maximize reach.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Streamlined onboarding: fast, guided application and compliance support tailored to each platform.
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Stronger campaign visibility: platform marketing, curated promotion, and community-growth tools to boost investor interest.</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">Post-funding support: investor relations, nominee/administration help, and guidance for next-stage fundraising.</p>
              </div>
              <p className="text-gray-800">We match your company to the platform that fits your stage and goals, then coordinate introductions and hands-on support so you can focus on growth.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
