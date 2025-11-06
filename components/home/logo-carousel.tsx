"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LogoCarousel() {
  const logos = [
    { name: "StartEngine", logo: "/startengine.webp" },
    { name: "FundingHope", logo: "/funding-hope-logo-alt.webp" },
    { name: "Republic", logo: "/Republic.webp" },
    { name: "Crowdcube", logo: "/crowdcube.webp" },
    { name: "Wefunder", logo: "/Wefunder.webp" },
    { name: "AngelInvestmentNetwork", logo: "/angelinvestment.webp" },
  ];

  // Duplicate logos for smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="py-12 overflow-hidden">
      <div className="relative w-full">
        <motion.div
          className="flex space-x-16 items-center"
          animate={{
            x: ["0%", "-50%"], // move left
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-20 w-40"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
