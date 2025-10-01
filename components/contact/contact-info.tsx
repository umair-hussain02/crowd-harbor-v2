"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
        <p className="text-muted-foreground mb-8">
          Ready to explore equity crowdfunding for your startup? Our team is here to help you navigate the process and
          maximize your funding success.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <p className="text-muted-foreground">contact@crowdharbor.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Phone</h3>
            <p className="text-muted-foreground">+49 17667287601</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Office</h3>
            <p className="text-muted-foreground">Weingarten, Germany</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Response Time</h3>
            <p className="text-muted-foreground">Within 24 hours</p>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-primary mr-2" />
          <h3 className="font-semibold text-foreground">Book a Free Consultation</h3>
        </div>
        <p className="text-muted-foreground mb-4">
          Schedule a 30-minute consultation to discuss your startup's funding goals and explore how we can help.
        </p>
        {/* <Button className="w-full">Schedule Consultation</Button> */}
      </div>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="font-semibold text-foreground mb-4">What to expect:</h3>
        <ul className="space-y-2">
          <li className="flex items-center text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
            {/* <h3 className="font-bold block">Initial assessment of your funding needs</h3> */}
            <div>We review your business model, target raise, use of funds, traction, and investor profile to determine crowdfunding readiness.</div>

          </li>
          <li className="flex items-center text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
            <div>We recommend the best-fit platform(s) (Reg CF vs Reg A and regional fit), outline campaign structure, messaging and promotional requirements, and identify any gaps you should close before launch.</div>
          </li>
          <li className="flex items-center text-muted-foreground">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
            <div>We agree the recommended path, required documents and compliance steps, and the intro process — then provide a clear launch checklist and milestones to move your campaign toward live status.</div>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
