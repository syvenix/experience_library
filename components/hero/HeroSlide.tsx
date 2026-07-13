"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroCard } from "./data/hero-data";

interface HeroSlideProps {
  card: HeroCard;
}

export default function HeroSlide({ card }: HeroSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className={`flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br ${card.color} p-8 text-white`}
    >
      {/* Experience Number */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <span className="text-6xl font-bold opacity-20">
          {card.number}
        </span>
      </motion.div>

      {/* Experience Details */}

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <p className="text-sm font-bold tracking-[0.25em]">
          {card.title}
        </p>

        <h2 className="text-3xl font-bold">
          {card.subtitle}
        </h2>

        <p className="max-w-md text-sm leading-7 text-blue-50/90">
          {card.description}
        </p>

        {/* CTA */}

        <Link
          href={card.href}
          className="group inline-flex items-center gap-2 pt-2 text-sm font-semibold text-blue-100 transition-all duration-300 hover:text-white"
        >
          View Full Experience

          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{
              duration: 0.2,
            }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}