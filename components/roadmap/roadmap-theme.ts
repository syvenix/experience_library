import {
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

import type { RoadmapStatus } from "./types";

export const roadmapTheme = {
  completed: {
    icon: CheckCircle,

    bg: "bg-green-50",

    border: "border-green-200",

    text: "text-green-900",

    dot: "bg-green-500",

    label: "text-green-700",

    shadow:
      "hover:shadow-green-100",

    progress:
      "bg-green-300",
  },

  "in-progress": {
    icon: Clock,

    bg: "bg-blue-50",

    border: "border-blue-200",

    text: "text-blue-900",

    dot: "bg-blue-500",

    label: "text-blue-700",

    shadow:
      "hover:shadow-blue-100",

    progress:
      "bg-blue-300",
  },

  future: {
    icon: Sparkles,

    bg: "bg-purple-50",

    border: "border-purple-200",

    text: "text-purple-900",

    dot: "bg-purple-500",

    label: "text-purple-700",

    shadow:
      "hover:shadow-purple-100",

    progress:
      "bg-purple-300",
  },
} satisfies Record<
  RoadmapStatus,
  any
>;