import {
  Search,
  Lightbulb,
  Pencil,
  Hammer,
  CheckCircle,
  Rocket,
} from "lucide-react";

import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Research",
    description:
      "We understand the industry, audience, and unique challenges.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "Strategy",
    description:
      "We define the right positioning, messaging, and business objectives.",
    icon: Lightbulb,
  },
  {
    id: 3,
    number: "03",
    title: "Experience Design",
    description:
      "We initiate journeys and moments. We build trust.",
    icon: Pencil,
  },
  {
    id: 4,
    number: "04",
    title: "Engineering",
    description:
      "We build scalable, performant, and robust solutions.",
    icon: Hammer,
  },
  {
    id: 5,
    number: "05",
    title: "Quality Assurance",
    description:
      "We ensure every detail delivers on our promises.",
    icon: CheckCircle,
  },
  {
    id: 6,
    number: "06",
    title: "Production",
    description:
      "We deploy reliable, production-ready solutions.",
    icon: Rocket,
  },
];