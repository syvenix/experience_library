"use client";

import React from "react";
import Link from "next/link";
import { Building2, Scale, Users, Home, Lock, Gavel, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PRACTICE_AREAS = [
  {
    id: "corp",
    title: "Corporate Law",
    description: "Mergers, acquisitions, joint ventures and advisory services for businesses.",
    icon: Building2,
  },
  {
    id: "lit",
    title: "Litigation & Dispute Resolution",
    description: "Strategic representation in civil, commercial & commercial matters.",
    icon: Scale,
  },
  {
    id: "fam",
    title: "Family Law",
    description: "Divorce, child custody, maintenance and family settlements.",
    icon: Users,
  },
  {
    id: "real",
    title: "Real Estate Law",
    description: "Property transactions, title due diligence and documentation.",
    icon: Home,
  },
  {
    id: "ip",
    title: "Intellectual Property",
    description: "Trademarks, copyrights, patents and IP protection.",
    icon: Lock,
  },
  {
    id: "crim",
    title: "Criminal Defense",
    description: "Defending your rights with experience and dedication.",
    icon: Gavel,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-24 bg-light-bg text-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">
            Practice Areas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Comprehensive Legal Solutions
          </h2>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="bg-white border border-light-border rounded-lg p-8 shadow-sm flex flex-col items-start justify-between group hover:border-gold-base hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-base/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="flex flex-col items-start w-full relative z-10">
                  {/* Icon Block */}
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 mb-6 group-hover:border-gold-base group-hover:text-gold-base transition-colors duration-300">
                    <IconComponent size={20} className="stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-3 group-hover:text-gold-dark transition-colors duration-300">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-neutral-500 font-light mb-8">
                    {area.description}
                  </p>
                </div>

                {/* Arrow Icon Link Button */}
                <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-gold-base group-hover:bg-gold-base group-hover:text-dark-bg flex items-center justify-center text-neutral-400 transition-all duration-300 cursor-pointer self-start relative z-10">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Links */}
        <div className="text-center mt-14">
          <Link
            href="#practice"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-gold-dark transition-colors group"
          >
            <span>View All Practice Areas</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              &rarr;
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
