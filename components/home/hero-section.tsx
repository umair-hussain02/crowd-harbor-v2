"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact#contact-form";
    }
  };

  return (
    <section className="relative bg-card/50 min-h-screen flex items-center justify-center overflow-hidden  pt-30 md:pt-28 border-b border-border/50  ">
      {/* <div className=" bg-card  mt-18 rounded-4xl "> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Use flex-col-reverse on mobile, and flex-row on large screens */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-5 w-full lg:w-1/2 text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight pt-4"
            >
              <motion.h1 className="text-accent/90 text-xl sm:text-2xl lg:text-3xl font-bold leading-tight pl-1">
                CrowdHarbor
              </motion.h1>
              Connecting Startups to{" "}
              <span className="">Equity Crowdfunding Success</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-foreground leading-relaxed"
            >
              Empowering startups through strategic crowdfunding partnerships worldwide
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="space-y-4"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="text-lg px-8 py-6 group bg-accent hover:bg-accent/90 text-white border-0 w-full md:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex flex-row gap-3 justify-evenly md:justify-start w-full md:w-auto">
                <Button
                  asChild
                  variant="outline"
                  className="text-lg px-6 py-6 bg-background/10 backdrop-blur-sm border-foreground/30 text-foreground hover:bg-foreground/20 hover:text-chart-3 w-1/2 md:w-auto"
                >
                  <Link href="/services">For Startups</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-lg px-6 py-6 bg-background/10 backdrop-blur-sm border-foreground/30 text-foreground hover:bg-foreground/20 hover:text-chart-3 w-1/2 md:w-auto"
                >
                  <Link href="/services">For Investors</Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-1/2 flex justify-center"
          >
            <Image
              src="hero2.png"
              alt="Equity crowdfunding growth illustration"
              width={800}
              height={500}
              priority
              className="w-full h-auto rounded-2xl"
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
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

     

  
    </section>
  );
}
