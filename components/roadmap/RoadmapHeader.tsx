"use client";

import { motion } from "framer-motion";

export default function RoadmapHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-12 sm:mb-16"
    >
      <h2 className="mb-3 text-sm font-bold tracking-widest text-gray-600">
        FUTURE ROADMAP
      </h2>

      <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Building the Future of
      </h3>

      <h4 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
        Digital Experiences
      </h4>

      <p className="mt-4 max-w-2xl text-gray-600">
        Our library is continuously expanding to serve more industries and
        provide more solutions.
      </p>
    </motion.div>
  );
}