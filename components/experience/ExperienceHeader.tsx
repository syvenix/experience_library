"use client";
import { motion } from "framer-motion";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mb-14 text-center lg:mb-16"
    >
      {/* Section Label */}

      <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
        Our Experience Systems
      </span>

      {/* Heading */}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Explore Industry-Specific
      </h2>

      <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Digital Experience Systems
      </h3>

      {/* Description */}

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        Every Syvenix Experience System is strategically researched,
        thoughtfully designed, and professionally engineered to solve
        real business problems through industry-specific digital
        experiences.
      </p>
    </motion.div>
  );
}