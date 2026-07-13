"use client";

import { motion } from "framer-motion";

interface HeroBadgeProps {
  text: string;
}

export default function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-slate-700"
    >
      <span className="h-2 w-2 rounded-full bg-[#00CFFF] animate-pulse" />

      {text}
    </motion.div>
  );
}
