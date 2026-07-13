"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PROCESS_STEPS = [
  {
    id: "step1",
    number: "01",
    title: "Understand",
    description: "We listen carefully to understand your case, concerns, and strategic goals.",
  },
  {
    id: "step2",
    number: "02",
    title: "Analyze",
    description: "Our legal team conducts a thorough analysis and comprehensive risk assessment.",
  },
  {
    id: "step3",
    number: "03",
    title: "Strategize",
    description: "We develop a customized legal strategy aligned to your specific goals.",
  },
  {
    id: "step4",
    number: "04",
    title: "Execute",
    description: "We put the plan into action, representing your interests vigorously.",
  },
  {
    id: "step5",
    number: "05",
    title: "Deliver Results",
    description: "We are committed to achieving the best possible outcome for you.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-[#080808] text-white overflow-hidden">
      {/* Background Columns Architectural Overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-[0.08] pointer-events-none">
        <Image
          src="/experiences/law-firm/assets/timeline_bg.jpg"
          alt="Classical architectural columns background"
          fill
          className="object-cover object-right"
        />
        {/* Soft edge fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-left max-w-2xl">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-base uppercase block mb-3">
            Your Legal Approach
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            A Process That Protects Your Interests
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-10 left-8 right-8 h-[1px] bg-neutral-800 hidden lg:block z-0">
            {/* Golden running glow indicator */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-gold-dark via-gold-base to-neutral-800"
            />
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className="flex flex-col items-start group"
              >
                {/* Node Number Circle */}
                <div className="relative w-20 h-20 flex items-center justify-center mb-6">
                  {/* Outer spinning borders on hover */}
                  <div className="absolute inset-0 rounded-full border border-neutral-800 group-hover:border-gold-base transition-all duration-300 scale-90 group-hover:scale-100" />
                  
                  {/* Inner Node Circle */}
                  <div className="w-14 h-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-gold-base font-serif text-lg font-bold group-hover:bg-gold-base group-hover:text-dark-bg transition-all duration-300 z-10">
                    {step.number}
                  </div>
                </div>

                {/* Node Content */}
                <div className="flex flex-col">
                  {/* Step Title */}
                  <h3 className="font-serif text-base font-bold text-white mb-3 group-hover:text-gold-base transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs leading-relaxed text-neutral-400 font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
