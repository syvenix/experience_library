"use client";

import { motion } from "framer-motion";

import type { ProcessStep } from "./types";

interface TimelineStepProps {
  step: ProcessStep;
}

export default function TimelineStep({
  step,
}: TimelineStepProps) {
  const Icon = step.icon;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative h-full"
    >
      <div className="flex items-start gap-5">
        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 6,
          }}
          transition={{ duration: 0.3 }}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-md transition-shadow duration-300 group-hover:shadow-lg"
        >
          <Icon size={28} />
        </motion.div>

        {/* Content */}

        <div className="flex-1">

          <span className="text-xs font-bold tracking-[0.25em] text-blue-600">
            {step.number}
          </span>

          <h3
            className="mt-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
          >
            {step.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {step.description}
          </p>

        </div>
      </div>
    </motion.article>
  );
}