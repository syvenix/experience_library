"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroActionsProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export default function HeroActions({
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroActionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-col gap-4 pt-4 sm:flex-row"
    >
      {/* Primary CTA */}

      <Link
        href={primaryHref}
        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
      >
        {primaryLabel}

        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>

      {/* Secondary CTA */}

      <Link
        href={secondaryHref}
        className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 text-center font-semibold text-gray-900 transition-all duration-300 hover:border-gray-400 hover:shadow-md"
      >
        {secondaryLabel}
      </Link>
    </motion.div>
  );
}