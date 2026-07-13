"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Briefcase, Award } from "lucide-react";
import { motion } from "framer-motion";
import ConsultationWidget from "./ConsultationWidget";

const STATS = [
  {
    id: "exp",
    value: "25+",
    label: "Years Experience",
    icon: Shield,
  },
  {
    id: "cases",
    value: "2,000+",
    label: "Cases Handled",
    icon: Briefcase,
  },
  {
    id: "satisfaction",
    value: "98%",
    label: "Client Satisfaction",
    icon: Award,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-dark-bg overflow-hidden flex items-center pt-24 md:pt-28"
    >
      {/* Background Architectural Gold Grid Lines */}
      <div className="absolute inset-0 z-0 flex justify-between px-6 md:px-12 max-w-7xl mx-auto pointer-events-none">
        <div className="w-[1px] h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/10 to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/10 to-transparent hidden md:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/10 to-transparent hidden lg:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-neutral-800/40 via-neutral-900/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Content Details */}
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-[10px] tracking-[0.3em] font-semibold text-gold-base uppercase mb-4"
          >
            Strategic Legal Representation
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Justice.<br />
            Delivered With<br />
            Precision<span className="text-gold-base">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed max-w-lg mb-10"
          >
            We are a results-driven firm committed to providing strategic, effective,
            and comprehensive legal solutions for individuals and businesses.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex flex-wrap items-center gap-5 sm:gap-6 mb-16"
          >
            <Link
              href="#contact"
              className="px-6 sm:px-8 py-3.5 bg-gold-base hover:bg-gold-hover text-dark-bg text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 flex items-center gap-2 group shadow-lg"
            >
              <span>Schedule Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </Link>
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors py-2 border-b border-transparent hover:border-white"
            >
              <Phone size={14} className="text-gold-base" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Key Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-neutral-900 w-full max-w-lg"
          >
            {STATS.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.id} className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-2 text-gold-base">
                    <IconComponent size={16} className="stroke-[1.5]" />
                    <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs tracking-wide text-neutral-500 font-light leading-snug">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side: Attorney Portrait + Consultation Widget Overlay */}
        <div className="w-full lg:w-[48%] flex flex-col sm:flex-row lg:flex-row items-center justify-center relative lg:h-[620px] mt-8 lg:mt-0">
          
          {/* Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[380px] sm:h-[430px] lg:h-[500px] overflow-hidden rounded-lg border border-neutral-800 lg:absolute lg:left-0 lg:bottom-12 z-0"
          >
            <Image
              src="/experiences/law-firm/assets/hero_attorney.jpg"
              alt="Senior Managing Attorney"
              fill
              priority
              sizes="(max-w-770px) 280px, 360px"
              className="object-cover object-top filter brightness-90 hover:scale-105 transition-transform duration-700"
            />
            {/* Elegant dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Consultation Form Widget - Overlay */}
          <div className="w-full max-w-md sm:w-auto mt-[-40px] sm:mt-0 lg:absolute lg:right-0 lg:top-8 z-10">
            <ConsultationWidget />
          </div>

        </div>

      </div>
    </section>
  );
}
