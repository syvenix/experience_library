"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible: IntersectionObserverEntry | null = null;

        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            (!mostVisible ||
              entry.intersectionRatio > mostVisible.intersectionRatio)
          ) {
            mostVisible = entry;
          }
        });

        if (mostVisible) {
          const target = (mostVisible as IntersectionObserverEntry).target as HTMLElement;
          setActiveSection(`#${target.id}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}