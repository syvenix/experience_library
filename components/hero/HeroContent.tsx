"use client";

import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroActions from "./HeroActions";
import { HERO_SECTION } from "./data/hero-data";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        {/* Eyebrow */}

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="block text-sm font-semibold tracking-[0.25em] text-blue-600"
        >
          {HERO_SECTION.eyebrow}
        </motion.span>

        {/* Badge */}

        <HeroBadge text={HERO_SECTION.badge} />

        {/* Heading */}

        <h1 className="leading-tight text-gray-900">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="block text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            {HERO_SECTION.title[0]}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="block text-4xl font-bold sm:text-5xl lg:text-6xl"
          >
            {HERO_SECTION.title[1]}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="block text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl"
          >
            {HERO_SECTION.title[2]}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="block text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl"
          >
            {HERO_SECTION.title[3]}
          </motion.span>
        </h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.6,
          }}
          className="max-w-xl text-lg leading-relaxed text-gray-600"
        >
          {HERO_SECTION.description}
        </motion.p>
      </div>

      {/* CTA */}

      <HeroActions
        primaryHref={HERO_SECTION.primaryCTA.href}
        primaryLabel={HERO_SECTION.primaryCTA.label}
        secondaryHref={HERO_SECTION.secondaryCTA.href}
        secondaryLabel={HERO_SECTION.secondaryCTA.label}
      />
    </motion.div>
  );
}