"use client";

import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: "t1",
    text: "Syvenix Law Firm transformed our corporate legal framework. Their attention to detail and proactive advice have been invaluable to our growth.",
    author: "Marcus Aurelius",
    position: "CEO, Nexus Enterprises",
    rating: 5,
  },
  {
    id: "t2",
    text: "The litigation team is second to none. They defended our IP rights with fierce determination and secured a decisive victory.",
    author: "Sarah Jenkins",
    position: "General Counsel, VeloTech",
    rating: 5,
  },
  {
    id: "t3",
    text: "During a highly complex real estate merger, Rohan Verma and his team demonstrated exceptional skill and dedication. Highly recommended.",
    author: "David Thorne",
    position: "Partner, Apex Holdings",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 bg-dark-bg text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-base uppercase block mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-8 flex flex-col justify-between group hover:border-gold-base transition-colors duration-300 shadow-md relative"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-gold-base/15 absolute right-6 top-6" />

              <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-base text-gold-base" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-xs leading-relaxed text-neutral-400 font-light italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col">
                <span className="text-sm font-serif font-bold text-white">
                  {t.author}
                </span>
                <span className="text-[10px] tracking-wide text-neutral-500 uppercase mt-0.5">
                  {t.position}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
