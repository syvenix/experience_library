"use client";

import React from "react";
import Image from "next/image";
import { UserCheck, Target, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  {
    id: "client-first",
    title: "Client First",
    description: "Your interest is our top priority, ensuring constant communication and dedicated advocacy.",
    icon: UserCheck,
  },
  {
    id: "strategic",
    title: "Strategic Approach",
    description: "Solutions tailored specifically to your unique legal needs, risk profiles, and business goals.",
    icon: Target,
  },
  {
    id: "confidentiality",
    title: "Complete Confidentiality",
    description: "Your trust is protected at all costs with our strict privacy and security protocols.",
    icon: EyeOff,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg text-white relative overflow-hidden">
      {/* Background Architectural elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gold-base/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Premium Board Room Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-5 relative h-[350px] sm:h-[450px] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl"
          >
            <Image
              src="/experiences/law-firm/assets/conference_room.jpg"
              alt="Syvenix Executive Board Room"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 filter brightness-90"
              sizes="(max-w-1024px) 100vw, 40vw"
            />
            {/* Elegant luxury framing lines overlay */}
            <div className="absolute inset-4 border border-white/5 pointer-events-none rounded" />
          </motion.div>

          {/* Center Side: Corporate details & Core Values list */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-base uppercase mb-4 block">
              About Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
              A Firm Built on Integrity,<br />Focused on Results.
            </h2>
            <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed mb-10">
              At Syvenix Law Firm, we combine deep legal expertise with strategic thinking
              to deliver outcomes that matter. Our client-focused approach ensures
              personalized solutions, unwavering confidentiality, and a commitment to excellence.
            </p>

            {/* Core Values Rows */}
            <div className="flex flex-col gap-6 w-full">
              {VALUES.map((val) => {
                const IconComponent = val.icon;
                return (
                  <div key={val.id} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gold-base shrink-0 mt-0.5">
                      <IconComponent size={16} className="stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-sm font-semibold text-white tracking-wide mb-1">
                        {val.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-neutral-500 font-light">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Panel: Years of Excellence Accent Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-2 lg:border-l lg:border-neutral-800 lg:pl-10 flex flex-col justify-center items-start lg:h-full lg:min-h-[350px] relative"
          >
            <div className="flex flex-col">
              <span className="font-serif text-5xl md:text-6xl font-bold text-gold-base leading-none mb-2">
                25+
              </span>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-neutral-400 uppercase leading-snug mb-8">
                Years of<br />Excellence
              </span>
              {/* Script Signature style using italic Serif font */}
              <span className="font-serif italic text-2xl text-gold-base/80 tracking-wide font-medium mt-4">
                Syvenix Law Firm
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
