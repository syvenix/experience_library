"use client";

import { motion } from "framer-motion";

import { roadmapTheme } from "./roadmap-theme";
import RoadmapCard from "./RoadmapCard";
import type { RoadmapSection } from "./types";

interface RoadmapColumnProps {
  section: RoadmapSection;
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export default function RoadmapColumn({
  section,
}: RoadmapColumnProps) {
  const theme = roadmapTheme[section.status];
  const Icon = theme.icon;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      {/* Heading */}

      <motion.div
        whileHover={{
          x: 4,
        }}
        className="mb-6 flex items-center gap-3"
      >
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 10,
          }}
        >
          <Icon
            size={28}
            className={theme.label}
          />
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900">
          {section.title}
        </h3>
      </motion.div>

      {/* Cards */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="space-y-3"
      >
        {section.items.map((item, index) => (
          <RoadmapCard
            key={item.name}
            item={item}
            index={index}
            total={section.items.length}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}