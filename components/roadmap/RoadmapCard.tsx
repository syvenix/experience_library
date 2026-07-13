"use client";

import { motion } from "framer-motion";
import { roadmapTheme } from "./roadmap-theme";
import type { RoadmapItem } from "./types";

interface RoadmapCardProps {
  item: RoadmapItem;
  index: number;
  total: number;
}

export default function RoadmapCard({
  item,
  index,
  total,
}: RoadmapCardProps) {
  const theme = roadmapTheme[item.status];

  const progress =
    item.status === "completed"
      ? ((index + 1) / total) * 100
      : item.status === "in-progress"
      ? 50 + index * 15
      : 0;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -20,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
      whileHover={{
        x: 8,
        y: -2,
      }}
      className={`relative overflow-hidden rounded-lg border ${theme.border} ${theme.bg} p-4 transition-all duration-300 cursor-pointer group ${theme.shadow}`}
    >
      {/* Shine Effect (Future Only) */}

      {item.status === "future" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
          animate={{
            x: [-800, 800],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
      )}

      <div className="relative z-10 flex items-start gap-3">

        {/* Status Dot */}

        {item.status === "in-progress" ? (
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className={`mt-2 h-2 w-2 rounded-full ${theme.dot} shrink-0`}
          />
        ) : (
          <div
            className={`mt-2 h-2 w-2 rounded-full ${theme.dot} shrink-0`}
          />
        )}

        <div className="flex-1">

          <p
            className={`text-sm font-semibold ${theme.text}`}
          >
            {item.name}
          </p>

          {/* Progress Bar */}

          {item.status !== "future" && (
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${progress}%`,
              }}
              transition={{
                delay: 0.3 + index * 0.1,
              }}
              className={`mt-2 h-1 rounded-full ${theme.progress}`}
            />
          )}

        </div>

      </div>
    </motion.div>
  );
}