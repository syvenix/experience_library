"use client";

import { motion } from "framer-motion";

export default function TimelineHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
        Our Process
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
        A Disciplined Process.
      </h2>

      <h3 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
        Engineered for Excellence.
      </h3>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        Every Syvenix Experience follows a proven methodology that aligns
        strategy, design, engineering, and quality into one seamless delivery
        process.
      </p>
    </motion.div>
  );
}