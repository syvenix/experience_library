"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ATTORNEYS = [
  {
    id: "arjun",
    name: "Arjun Malhotra",
    role: "Managing Partner",
    practice: "Corporate Law",
    image: "/experiences/law-firm/assets/attorney_arjun.jpg",
    linkedin: "#",
  },
  {
    id: "neha",
    name: "Neha Sharma",
    role: "Partner",
    practice: "Litigation",
    image: "/experiences/law-firm/assets/attorney_neha.jpg",
    linkedin: "#",
  },
  {
    id: "rohan",
    name: "Rohan Verma",
    role: "Partner",
    practice: "Real Estate Law",
    image: "/experiences/law-firm/assets/attorney_rohan.jpg",
    linkedin: "#",
  },
  {
    id: "priya",
    name: "Priya Menon",
    role: "Partner",
    practice: "Family Law",
    image: "/experiences/law-firm/assets/attorney_priya.jpg",
    linkedin: "#",
  },
  {
    id: "karan",
    name: "Karan Mehta",
    role: "Partner",
    practice: "Criminal Defense",
    image: "/experiences/law-firm/assets/attorney_karan.jpg",
    linkedin: "#",
  },
];

export default function Attorneys() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (scrollIndex < ATTORNEYS.length - 1) {
      setScrollIndex(scrollIndex + 1);
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="attorneys" className="py-24 bg-light-bg text-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">
              Meet Our Attorneys
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
              Experienced. Respected. Dedicated.
            </h2>
          </div>

          <div className="flex items-center gap-6 self-start sm:self-auto shrink-0">
            <Link
              href="#attorneys"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-gold-dark transition-colors group"
            >
              <span>View All Attorneys</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                &rarr;
              </span>
            </Link>
            
            {/* Carousel Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                className="w-8 h-8 rounded-full border border-neutral-300 disabled:opacity-40 disabled:hover:bg-transparent flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Previous Attorneys"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                disabled={scrollIndex >= ATTORNEYS.length - 2}
                className="w-8 h-8 rounded-full border border-neutral-300 disabled:opacity-40 disabled:hover:bg-transparent flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                aria-label="Next Attorneys"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ATTORNEYS.map((attorney, idx) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="min-w-[280px] sm:min-w-[300px] lg:flex-1 snap-start relative group rounded-lg overflow-hidden border border-light-border bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image Portrait */}
              <div className="relative h-[380px] w-full overflow-hidden">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  fill
                  sizes="(max-w-770px) 280px, 300px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Elegant dark overlay gradient on card bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80" />

                {/* Card Context Content Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div className="flex flex-col text-white">
                    <h3 className="font-serif text-lg font-bold leading-tight">
                      {attorney.name}
                    </h3>
                    <span className="text-[10px] tracking-wider uppercase text-gold-base font-semibold mt-1.5">
                      {attorney.role}
                    </span>
                    <span className="text-[10px] tracking-wide text-neutral-400 font-light mt-0.5">
                      {attorney.practice}
                    </span>
                  </div>

                  {/* LinkedIn Connect Button */}
                  <a
                    href={attorney.linkedin}
                    className="w-8 h-8 rounded bg-white/10 hover:bg-gold-base hover:text-dark-bg flex items-center justify-center text-white transition-colors duration-300"
                    aria-label={`${attorney.name} LinkedIn Profile`}
                  >
                    <Globe size={14} className="fill-current stroke-none" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
