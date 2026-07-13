import type { RoadmapSection } from "./types";

export const roadmap: RoadmapSection[] = [
  {
    title: "COMPLETED",
    status: "completed",

    items: [
      {
        name: "Healthcare (Calm Flow™)",
        status: "completed",
      },
      {
        name: "Law Firm (Authority Lines™)",
        status: "completed",
      },
      {
        name: "Interior Design (Spatial Layers™)",
        status: "completed",
      },
    ],
  },

  {
    title: "IN PROGRESS",
    status: "in-progress",

    items: [
      {
        name: "Finance (Precision Grid™)",
        status: "in-progress",
      },
      {
        name: "Restaurant (Taste Motion™)",
        status: "in-progress",
      },
      {
        name: "Education (Learning Path™)",
        status: "in-progress",
      },
    ],
  },

  {
    title: "FUTURE VISION",
    status: "future",

    items: [
      {
        name: "Real Estate",
        status: "future",
      },
      {
        name: "Automotive",
        status: "future",
      },
      {
        name: "Hospitality",
        status: "future",
      },
      {
        name: "Beauty & Wellness",
        status: "future",
      },
    ],
  },
];