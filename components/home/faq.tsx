"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqSection() {
  const categories = {
      "founder": "Founder",
  };

 const faqData = {

  founder: [
  {
    question: "Do you charge founders / take equity?",
    answer:
      "No — CrowdHarbor’s matchmaking is completely free for founders (100%). Any platform fees or success terms are set and agreed directly between you and the crowdfunding platform.",
  },
  {
    question: "How much can I raise, and who do you work with?",
    answer:
      "We commonly position campaigns for €200K–€8M+. We work with early-growth / pre-scale startups that have product market fit or strong pilots — especially SaaS, fintech, AI, marketplaces, hardware, and impact ventures in other categories.",
  },
  {
    question: "How does the process work and how fast?",
    answer:
      "Reply with four lines (• Founder Full name & Email • Company description & website • Target raise • One-line traction). We do a quick readiness check, shortlist best-fit platforms, then deliver a warm intro to platform contacts. Most founders hear back within a few business days.",
  },
  {
    question: "Who runs the campaign and handles legal/controls?",
    answer:
      "The crowdfunding platform assigns an expert campaign manager who builds and runs the raise. Legal terms, investor agreements, and campaign decisions are managed between you and the platform — CrowdHarbor only facilitates the warm intro and coordination.",
  },
  {
    question: "What outcomes can I expect?",
    answer:
      "You get targeted platform matches, a platform-provided campaign manager, and a faster path to launch — increasing your odds compared to blind applications. Exact results depend on traction and preparation, but our founder-first approach removes upfront cost and reduces wasted time.",
  },
],

};

  const [selectedCategory, setSelectedCategory] = useState("founder");

  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest">
          Frequently Asked Questions
        </span>
        <h2 className="text-4xl font-bold sm:text-5xl mb-12">
          Got Questions? <span className="text-primary">We’ve Got Answers.</span>
        </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our platform, process, and services.
          </p> */}
        </motion.div>

        {/* Tabs */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={cn(
                "relative rounded-full border border-border px-5 py-2 text-sm font-medium transition-all",
                selectedCategory === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {label}
            </button>
          ))}
        </div> */}

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {Object.entries(faqData).map(([category, questions]) =>
              selectedCategory === category ? (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {questions.map((faq, i) => (
                    <FAQItem key={i} {...faq} />
                  ))}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-2xl border border-border transition-colors bg-card hover:border-primary/40"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-primary" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-6"
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};
