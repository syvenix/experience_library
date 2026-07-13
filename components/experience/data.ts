import {
  Heart,
  Scale,
  Sofa,
  UtensilsCrossed,
  BookOpen,
  TrendingUp,
} from "lucide-react";

import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 1,
    slug: "healthcare",
    title: "Healthcare",
    subtitle: "Calm Flow™",
    description:
      "Premium digital experience for modern healthcare organizations.",
    icon: Heart,
    status: "available",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/experiences/healthcare",
  },

  {
    id: 2,
    slug: "law-firm",
    title: "Law Firm",
    subtitle: "Authority Lines™",
    description:
      "Experience system built for trust, credibility and authority.",
    icon: Scale,
    status: "available",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    href: "/experiences/law-firm",
  },

  {
    id: 3,
    slug: "interior-design",
    title: "Interior Design",
    subtitle: "Spatial Layers™",
    description:
      "Elegant experience system crafted for premium interior studios.",
    icon: Sofa,
    status: "available",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    href: "/experiences/interior-design",
  },

  {
    id: 4,
    slug: "restaurant",
    title: "Restaurant",
    subtitle: "Taste Motion™",
    description:
      "Coming Soon",
    icon: UtensilsCrossed,
    status: "coming-soon",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    href: "/experiences/restaurant",
  },

  {
    id: 5,
    slug: "education",
    title: "Education",
    subtitle: "Learning Path™",
    description:
      "Coming Soon",
    icon: BookOpen,
    status: "coming-soon",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    href: "/experiences/education",
  },

  {
    id: 6,
    slug: "finance",
    title: "Finance",
    subtitle: "Precision Grid™",
    description:
      "Coming Soon",
    icon: TrendingUp,
    status: "coming-soon",
    color: "text-green-600",
    bgColor: "bg-green-50",
    href: "/experiences/finance",
  },
];