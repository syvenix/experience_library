"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { Signature } from "./types";

interface SignatureCardProps {
  signature: Signature;
  onSelect: (signature: Signature) => void;
}

export default function SignatureCard({
  signature,
  onSelect,
}: SignatureCardProps) {
  const Icon = signature.icon;

  const handleSelect = () => {
    onSelect(signature);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect();
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-label={`Explore ${signature.name}`}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3 }}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
      className="group h-full cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4"
    >
      <div
        className={`relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br ${signature.bgGradient} p-8 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl`}
      >
        {/* Background Glow */}

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/40 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{ duration: 0.3 }}
          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ${signature.color}`}
        >
          <Icon size={32} />
        </motion.div>

        {/* Content */}

        <div className="mt-8 flex-1">
          <h3 className={`text-2xl font-bold ${signature.textColor}`}>
            {signature.name}
          </h3>

          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-gray-500">
            {signature.industry}
          </p>

          <p className="mt-5 leading-7 text-gray-700">
            {signature.description}
          </p>
        </div>

        {/* CTA */}

        <div className="mt-10">
          <span className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
            Explore Signature

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </motion.article>
  );
}