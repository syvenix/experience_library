"use client";

import { motion } from "framer-motion";

import TimelineStep from "./TimelineStep";
import type { ProcessStep } from "./types";

interface TimelineGridProps {
  steps: ProcessStep[];
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function TimelineGrid({
  steps,
}: TimelineGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3"
    >
      {steps.map((step) => (
        <TimelineStep
          key={step.id}
          step={step}
        />
      ))}
    </motion.div>
  );
}