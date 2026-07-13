"use client";

import { motion } from "framer-motion";

export default function SignatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
        Our Design Signatures
      </span>

      <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
        Proprietary Design Languages
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        Our proprietary design signatures solve industry-specific challenges
        through distinctive visual systems and interaction principles.
      </p>
    </motion.div>
  );
}