"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceGrid from "./ExperienceGrid";
import { experiences } from "./data";

export default function ExperienceSystems() {
  return (
    <section
      id="experience-systems"
      className="border-b border-gray-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}

        <ExperienceHeader />

        {/* Experience Grid */}

        <ExperienceGrid
          experiences={experiences}
        />

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/experiences"
            className="group inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg"
          >
            View All Experiences

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}