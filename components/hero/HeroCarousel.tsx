"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import HeroControls from "./HeroControls";
import HeroSlide from "./HeroSlide";
import {
  heroCards,
  HERO_AUTOPLAY_DELAY,
} from "./data/hero-data";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },

  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    zIndex: 0,
  }),
};

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setDirection(1);

      setCurrent((prev) => (prev + 1) % heroCards.length);
    }, HERO_AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setDirection(1);

    setCurrent((prev) => (prev + 1) % heroCards.length);

    setAutoplay(false);
  };

  const previous = () => {
    setDirection(-1);

    setCurrent(
      (prev) =>
        (prev - 1 + heroCards.length) %
        heroCards.length
    );

    setAutoplay(false);
  };

  const goToSlide = (index: number) => {
    if (index === current) return;

    setDirection(index > current ? 1 : -1);

    setCurrent(index);

    setAutoplay(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="relative"
    >
      <div className="relative h-96 overflow-hidden rounded-2xl bg-slate-900 shadow-2xl sm:h-[500px]">

        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },

              opacity: {
                duration: 0.35,
              },
            }}
            className="absolute inset-0"
          >
            <HeroSlide
              card={heroCards[current]}
            />
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar */}

        {autoplay && (
          <motion.div
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration:
                HERO_AUTOPLAY_DELAY / 1000,
              ease: "linear",
            }}
            className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-white"
          />
        )}
      </div>

      <HeroControls
        total={heroCards.length}
        current={current}
        onPrevious={previous}
        onNext={next}
        onSelect={goToSlide}
      />
    </motion.div>
  );
}