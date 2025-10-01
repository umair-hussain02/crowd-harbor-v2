"use client";

import { motion } from "framer-motion";

export function LogoCarousel() {
  const logos = [
    { name: "StartEngine", logo: "StartEngine" },
    { name: "FundingHope", logo: "FundingHope" },
    { name: "Republic", logo: "Republic" },
    { name: "Crowdcube", logo: "CROWDCUBE" },
    { name: "Wefunder", logo: "WEFUNDER" },
    { name: "AngelInvestmentNetwork", logo: "ANGELINVESTMENTNETWORK" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex space-x-16"
          animate={{
            x: [0, -50 * logos.length + "%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-16 px-8"
            >
              <div className="text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {company.logo}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
