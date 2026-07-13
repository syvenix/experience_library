"use client";

import { motion } from "framer-motion";

import { roadmap } from "./data";
import RoadmapColumn from "./RoadmapColumn";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

export default function RoadmapGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className="grid grid-cols-1 gap-10 lg:grid-cols-3"
    >
      {roadmap.map((section) => (
        <RoadmapColumn
          key={section.title}
          section={section}
        />
      ))}
    </motion.div>
  );
}