"use client";

import RoadmapHeader from "./RoadmapHeader";
import RoadmapStats from "./RoadmapStats";
import RoadmapGrid from "./RoadmapGrid";
import RoadmapSummary from "./RoadmapSummary";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <RoadmapHeader />

        {/* Progress Statistics */}

        <RoadmapStats />

        {/* Three Columns */}

        <RoadmapGrid />

        {/* Bottom CTA */}

        <RoadmapSummary />

      </div>
    </section>
  );
}