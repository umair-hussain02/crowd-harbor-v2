"use client"

import { motion } from "framer-motion"

export default function CreativeSeparator() {
  return (
    <section className="relative w-full h-64 md:h-80 overflow-hidden bg-[var(--background)]">
      {/* Background gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]" />

      {/* Animated gradient wave band */}
      <motion.div
        className="absolute top-1/2 left-[-10%] w-[130%] h-20 rotate-[-6deg]"
        style={{
          background: `linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%)`,
          opacity: 0.9,
          mixBlendMode: "multiply",
        }}
        animate={{ x: ["-5%", "5%", "-5%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dark wave overlay for depth */}
      <motion.div
        className="absolute top-[40%] left-[-15%] w-[140%] h-24 rotate-[-6deg]"
        style={{
          background: "var(--foreground)",
          opacity: 0.15,
          mixBlendMode: "overlay",
        }}
        animate={{ x: ["5%", "-5%", "5%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Soft reflective shimmer effect */}
      <motion.div
        className="absolute top-[55%] left-[-10%] w-[120%] h-10 rotate-[-6deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          mixBlendMode: "overlay",
        }}
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating geometric accents */}
      <motion.div
        className="absolute left-[12%] top-[30%] w-8 h-8 rounded-md"
        style={{ background: "var(--primary)" }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] top-[20%] w-4 h-12 rounded-lg"
        style={{ background: "var(--accent)" }}
        animate={{
          y: [0, 15, 0],
          rotate: [15, 30, 15],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[35%] bottom-[25%] w-6 h-6 rounded-sm"
        style={{ background: "var(--foreground)" }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 45, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glow particles floating up (subtle) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 6 + 3,
            height: Math.random() * 6 + 3,
            background: "var(--primary)",
            opacity: 0.6,
            top: `${40 + Math.random() * 20}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ["0%", "-60%"],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Fade into next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </section>
  )
}
