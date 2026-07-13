"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroControlsProps {
  total: number;
  current: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function HeroControls({
  total,
  current,
  onPrevious,
  onNext,
  onSelect,
}: HeroControlsProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      {/* Previous */}

      <motion.button
        type="button"
        onClick={onPrevious}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full p-2 transition-colors hover:bg-gray-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft
          size={24}
          className="text-gray-600"
        />
      </motion.button>

      {/* Indicators */}

      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <motion.button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "h-2 w-8 bg-blue-600"
                : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Next */}

      <motion.button
        type="button"
        onClick={onNext}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full p-2 transition-colors hover:bg-gray-100"
        aria-label="Next Slide"
      >
        <ChevronRight
          size={24}
          className="text-gray-600"
        />
      </motion.button>
    </div>
  );
}