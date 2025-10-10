"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on contact page, navigate there
      window.location.href = "/contact#contact-form";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Trusted Partner for Equity Crowdfunding
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Connecting Startups to{" "}
              <span className="text-accent">Equity Crowdfunding Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-foreground leading-relaxed"
            >
              Partnering with Crowdcube to fast-track your fundraising journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-4"
            >
              {/* Primary CTA */}
              <Button
                onClick={scrollToContact}
                size="lg"
                className="text-lg px-8 py-6 group bg-accent hover:bg-accent/90 text-white border-0 w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-6 py-6 bg-background/10 backdrop-blur-sm border-foreground/30 text-foreground hover:bg-foreground/20 hover:text-chart-3"
                >
                  <Link href="/services">For Startups</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-6 py-6 bg-background/10 backdrop-blur-sm border-foreground/30 text-foreground hover:bg-foreground/20 hover:text-chart-3"
                >
                  <Link href="/services">For Investors</Link>
                </Button>
              </div>
            </motion.div>

            {/* Trust indicators */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="pt-8"
            >
              <p className="text-sm text-white/70 mb-4">Trusted by Leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-80">
                <div className="text-xl font-bold text-white">Monzo</div>
                <div className="text-xl font-bold text-white">BrewDog</div>
                <div className="text-xl font-bold text-white">
                  Mr & Mrs Smith
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
             <Image
              src="1.png"
              alt="Equity crowdfunding growth illustration"
              width={1200}
              height={800}
              priority
              className="w-full h-auto"
            />
          </motion.div>

          
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}