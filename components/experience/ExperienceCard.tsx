"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { Experience } from "./types";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const Icon = experience.icon;

  const isAvailable = experience.status === "available";

  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group h-full"
    >
      <div
        className={`relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 ${experience.bgColor} p-8 transition-all duration-500 hover:border-blue-200 hover:shadow-2xl`}
      >
        {/* Background Glow */}

        <div
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/40 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        />

        {/* Status */}

        <div className="flex items-center justify-between">

          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${experience.color}`}
          >
            <Icon size={30} />
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${ isAvailable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500" }`}
          >
            {isAvailable ? "Available" : "Coming Soon"}
          </span>
        </div>

        {/* Content */}

        <div className="mt-8">

          <h3 className="text-2xl font-bold text-gray-900">
            {experience.title}
          </h3>

          <p className="mt-2 font-semibold text-blue-600">
            {experience.subtitle}
          </p>

          <p className="mt-5 leading-7 text-gray-600">
            {experience.description}
          </p>

        </div>

        {/* Footer */}

        <div className="mt-10">

          {isAvailable ? (
            <Link
              href={experience.href}
              className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
            >
              View Full Experience

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <span className="font-semibold text-gray-400">
              Coming Soon
            </span>
          )}

        </div>

      </div>
    </motion.article>
  );
}