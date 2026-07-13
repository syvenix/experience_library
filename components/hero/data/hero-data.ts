export interface HeroCard {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  href: string;
}

export const heroCards: HeroCard[] = [
  {
    id: 1,
    number: "01",
    title: "HEALTHCARE",
    subtitle: "Calm Flow™",
    description:
      "Digital experiences that build trust, communicate care, and improve patient engagement.",
    color: "from-blue-500 to-blue-600",
    href: "/experiences/healthcare",
  },
  {
    id: 2,
    number: "02",
    title: "LAW FIRM",
    subtitle: "Authority Lines™",
    description:
      "Digital experiences that project authority, tradition, and unwavering trust.",
    color: "from-slate-800 to-slate-900",
    href: "/experiences/law-firm",
  },
  {
    id: 3,
    number: "03",
    title: "INTERIOR DESIGN",
    subtitle: "Spatial Layers™",
    description:
      "Digital experiences that showcase craftsmanship and timeless aesthetics.",
    color: "from-amber-600 to-amber-700",
    href: "/experiences/interior-design",
  },
];

export const HERO_AUTOPLAY_DELAY = 6000;

export const HERO_SECTION = {
  eyebrow: "EXPERIENCE LIBRARY",

  badge: "Technology With Purpose.",

  title: [
    "Premium Digital",
    "Experiences.",
    "Engineered for",
    "Every Industry.",
  ],

  description:
    "Explore a growing collection of industry-specific digital experience systems designed by Syvenix to build trust, drive conversions, and elevate modern businesses.",

  primaryCTA: {
    label: "Explore Experiences",
    href: "#experience-systems",
  },

  secondaryCTA: {
    label: "View Roadmap",
    href: "/roadmap",
  },
};