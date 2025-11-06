"use client"

import { motion } from "framer-motion"

export default function CreativeSeparator() {
  return (
    <section className="relative w-full h-56 md:h-72 overflow-hidden bg-background mt-[-10]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FD6628]/5 to-transparent" />

      {/* Moving angled dark band */}
      <motion.div
        className="absolute top-[40%] left-0 w-[120%] h-20 bg-[#000000] dark:bg-[#111111] rotate-[-6deg] shadow-lg"
        animate={{
          x: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orange overlay band */}
      <motion.div
        className="absolute top-[50%] left-[-10%] w-[130%] h-16 bg-[#FD6628] rotate-[-6deg] opacity-90 mix-blend-multiply"
        animate={{
          x: ["5%", "-5%", "5%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Light accent bar */}
      <motion.div
        className="absolute top-[60%] left-[-5%] w-[110%] h-10 bg-[#F5F5EE] rotate-[-6deg] opacity-90 dark:opacity-30"
        animate={{
          x: ["-3%", "3%", "-3%"],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric elements */}
      <motion.div
        className="absolute left-[15%] top-[30%] w-10 h-10 bg-[#FD6628] rotate-12 rounded-sm"
        animate={{
          y: [0, -15, 0],
          rotate: [12, 20, 12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[20%] bottom-[20%] w-6 h-6 bg-[#F5F5EE] dark:bg-[#FD6628]/70 rotate-[25deg]"
        animate={{
          y: [0, 15, 0],
          rotate: [25, 40, 25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-[40%] top-[10%] w-4 h-12 bg-[#FD6628]/80 rounded-md rotate-[15deg]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle overlay to fade into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </section>
  )
}
