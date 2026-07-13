"use client";
import ExperienceCard from "./ExperienceCard";
import type { Experience } from "./types";

interface ExperienceGridProps {
  experiences: Experience[];
}

export default function ExperienceGrid({
  experiences,
}: ExperienceGridProps) {
  if (!experiences.length) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-lg text-slate-500">
          No experiences available.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}