"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Rocket } from "lucide-react";

interface ApplyOptionsProps {
  RaiseForm: React.ReactNode;
  InquiryForm: React.ReactNode;
}

const SubmissionOptions: React.FC<ApplyOptionsProps> = ({
  RaiseForm,
  InquiryForm,
}) => {
  const [selected, setSelected] = useState<"inquiry" | "fundraise" | null>(
    null
  );

  const cards = [
    {
      id: "inquiry",
      title: "General Inquiry",
      subtitle: "Have questions?",
      icon: <MessageSquare className="w-13 h-13 text-primary" />,
    },
    {
      id: "fundraise",
      title: "Fundraise Capital",
      subtitle: "Apply to Fundraise",
      icon: <Rocket className="w-13 h-13 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(card.id as "inquiry" | "fundraise")}
            className={`group cursor-pointer bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center border border-border transition-all ${
              selected === card.id ? "ring-2 ring-primary/50" : ""
            }`}
          >
            <div className="relative w-30 h-30 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/50 via-blue-400/40 to-purple-500/40 p-[2px]">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center shadow-inner">
                  {card.icon}
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground">
              {card.title}
            </h3>

            {/* Subtitle + Arrow */}
            <div className="flex justify-between items-center gap-4 mt-2 w-full">
              <p className="text-muted-foreground text-sm">{card.subtitle}</p>
              <ArrowRight
                className="text-muted-foreground transition-transform duration-300 ease-out group-hover:translate-x-2"
                size={20}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Form Section */}
      <div className="mt-12 w-full max-w-xl">
        {selected === "inquiry" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {InquiryForm}
          </motion.div>
        )}
        {selected === "fundraise" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {RaiseForm}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SubmissionOptions;
