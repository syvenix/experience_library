"use client";

import { motion } from "framer-motion";

export default function RoadmapStats() {
  return (
    <div className="mb-12 hidden lg:block">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-between"
      >
        <div className="h-1 flex-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500" />

        <div className="mx-8 flex gap-8 text-center">
          <div>
            <div className="mb-1 text-2xl font-bold text-green-600">3</div>

            <p className="text-xs font-semibold text-gray-600">
              Completed
            </p>
          </div>

          <div>
            <div className="mb-1 text-2xl font-bold text-blue-600">3</div>

            <p className="text-xs font-semibold text-gray-600">
              In Progress
            </p>
          </div>

          <div>
            <div className="mb-1 text-2xl font-bold text-purple-600">
              4+
            </div>

            <p className="text-xs font-semibold text-gray-600">
              Planned
            </p>
          </div>
        </div>

        <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-purple-300" />
      </motion.div>
    </div>
  );
}