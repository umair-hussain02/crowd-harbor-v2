"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqSection() {
  const categories = {
      "founder": "Founders",
      "investor": "Investors",
  };

 const faqData = {
  investor: [
    {
      question: "What types of startups can I invest in via CrowdHarbor?",
      answer:
        "CrowdHarbor partners with innovative, growth-oriented startups that are preparing for equity crowdfunding rounds on major platforms (e.g., Reg CF, Reg A). We evaluate their traction, business model, and crowdfunding readiness before presenting them to investors.",
    },
    {
      question: "How does CrowdHarbor select the crowdfunding platforms?",
      answer:
        "We leverage our trusted network of global equity-crowdfunding platforms (such as Crowdcube, StartEngine, Republic) and help match the startup with the platform that best fits its region, regulatory regime, and investor base.",
    },
    {
      question: "What is the minimum investment I need to make?",
      answer:
        "Minimum investment amounts depend on the individual campaign and platform. CrowdHarbor will inform you of the terms for each opportunity. Ensure you review the details when the offering opens.",
    },
    {
      question: "What kind of due diligence does CrowdHarbor conduct?",
      answer:
        "We perform initial screening of startups for traction, business model, regulatory compliance readiness, campaign strategy, and investor fit. This helps raise the quality and readiness of the campaigns presented to you.",
    },
    {
      question: "How and when will I get updates on my investment?",
      answer:
        "Once you invest in a startup through a crowdfunding campaign, that platform typically provides communications and reporting. CrowdHarbor assists the startup’s preparation and launch, but follow-ups and ongoing investor updates are managed by the startup via the platform.",
    },
  ],

  founder: [
    {
      question: "How does CrowdHarbor help me prepare for crowdfunding?",
      answer:
        "We guide you through the entire process — from assessing your business model and determining readiness, choosing the right platform, crafting your campaign strategy, setting up compliance and onboarding, through to launch.",
    },
    {
      question: "Which crowdfunding platforms do you work with?",
      answer:
        "We have relationships with major global equity-crowdfunding platforms such as Crowdcube, StartEngine, Republic, and others. We help you choose the best-fit platform and region for your campaign.",
    },
    {
      question: "What is the typical fundraising range you support?",
      answer:
        "Although ranges vary by platform and region, CrowdHarbor supports campaigns that raise from hundreds of thousands to several millions of euros/dollars, depending on readiness and fit.",
    },
    {
      question: "What happens after we submit our company details?",
      answer:
        "After you submit your details, our team reviews your business model, target raise, use of funds, traction, investor profile, and regulatory fit. Then we recommend a path forward, required documentation, and launch timeline.",
    },
    {
      question: "What are my obligations after launching the campaign?",
      answer:
        "Once live, you need to execute your campaign (marketing, investor outreach, updates), adhere to platform and regulatory requirements, and post-fundraise deliver on your business plan. CrowdHarbor remains available to guide you and ensure compliance.",
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
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>

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
