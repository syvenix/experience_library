"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RoadmapSummary() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.2,
      }}
      viewport={{
        once: true,
      }}
      className="mt-16 text-center"
    >
      <div className="inline-flex flex-col items-center">

        <div className="mb-4 text-4xl font-bold text-gray-900">
          10+
        </div>

        <p className="max-w-md text-gray-600 leading-7">
          Industry-specific experience systems are currently planned as part of
          the growing Syvenix Experience Library.
        </p>

        <Link href="/roadmap"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 hover:gap-3"
        >
          View Full Roadmap

          <ArrowRight size={18} />
        </Link>

      </div>
    </motion.div>
  );
}