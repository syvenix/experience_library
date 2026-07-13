"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export function MotionSection({
  children,
  className = "",
  id,
  delay = 0,
  ...props
}: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={
        prefersReducedMotion
          ? false
          : {
              opacity: 0,
              y: 16,
            }
      }
      whileInView={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      transition={{
        duration: 0.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}