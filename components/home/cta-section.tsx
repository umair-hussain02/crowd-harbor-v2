"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

export function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // If no contact form on current page, navigate to contact page
      window.location.href = "/contact"
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-purple-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div
          className="absolute top-16 right-12 w-3 h-3 bg-accent/60 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-12 left-16 w-4 h-4 bg-accent-teal/60 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-8 right-8 w-2 h-2 bg-white/30 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Startup?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Ready to raise capital?
              <br />
              <span className="text-accent">Let's connect.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
            >
              Join the innovative companies that have successfully raised over £50M through our Crowdcube partnership.
              Your fundraising journey starts with a free consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-10 py-6 group bg-accent hover:bg-accent/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
              className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">£50M+</div>
                <div className="text-white/70 text-sm">Successfully Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-white/70 text-sm">Funded Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-teal mb-2">95%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
