"use client";

import TimelineHeader from "./TimelineHeader";
import TimelineGrid from "./TimelineGrid";
import { processSteps } from "./data";

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="border-b border-gray-200 bg-gradient-to-b from-white to-gray-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <TimelineHeader />

        {/* Timeline */}

        <TimelineGrid
          steps={processSteps}
        />
      </div>
    </section>
  );
}