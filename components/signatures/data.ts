import {
  Wind,
  Shield,
  Layers,
  Zap,
  Compass,
  Grid3x3,
} from "lucide-react";

import type { Signature } from "./types";

export const signatures: Signature[] = [
  {
    id: 1,
    name: "Calm Flow™",
    slug: "calm-flow",
    industry: "Healthcare",
    icon: Wind,
    description: "Soothe through rhythm and control.",
    overview:
      "Calm Flow™ is a design language created for healthcare experiences where clarity, reassurance, and controlled interaction are essential to building patient trust.",
    principles: [
      "Calm visual hierarchy",
      "Controlled interaction rhythm",
      "Reassuring interface patterns",
      "Accessible information architecture",
    ],
    applications: [
      "Hospitals",
      "Clinics",
      "Healthcare Platforms",
      "Patient Portals",
    ],
    color: "text-blue-600",
    textColor: "text-blue-700",
    bgGradient: "from-blue-50 to-cyan-50",
    signatureUrl: "/signatures/calm-flow",
    available: true,
  },
  {
    id: 2,
    name: "Authority Lines™",
    slug: "authority-lines",
    industry: "Law Firm",
    icon: Shield,
    description: "Establish authority through structure.",
    overview:
      "Authority Lines™ is a structured design language created for legal experiences where credibility, precision, hierarchy, and institutional trust define the digital experience.",
    principles: [
      "Strong information hierarchy",
      "Structured visual composition",
      "Credibility-driven typography",
      "Deliberate interaction patterns",
    ],
    applications: [
      "Law Firms",
      "Legal Practices",
      "Corporate Legal Teams",
      "Professional Services",
    ],
    color: "text-amber-600",
    textColor: "text-amber-700",
    bgGradient: "from-amber-50 to-orange-50",
    signatureUrl: "/signatures/authority-lines",
    available: true,
  },
  {
    id: 3,
    name: "Spatial Layers™",
    slug: "spatial-layers",
    industry: "Interior Design",
    icon: Layers,
    description: "Build depth through composition.",
    overview:
      "Spatial Layers™ is an editorial design language created for architecture and interior design experiences where composition, material, depth, and visual storytelling define the brand.",
    principles: [
      "Layered visual composition",
      "Editorial typography",
      "Material-driven storytelling",
      "Immersive spatial rhythm",
    ],
    applications: [
      "Interior Design Studios",
      "Architecture Firms",
      "Luxury Residences",
      "Design Portfolios",
    ],
    color: "text-orange-600",
    textColor: "text-orange-700",
    bgGradient: "from-orange-50 to-red-50",
    signatureUrl: "/signatures/spatial-layers",
    available: true,
  },
  {
    id: 4,
    name: "Taste Motion™",
    slug: "taste-motion",
    industry: "Restaurant",
    icon: Zap,
    description: "Capture appetite through dynamic energy.",
    overview:
      "Taste Motion™ is a dynamic design language created for food and hospitality experiences where appetite, atmosphere, movement, and immediate engagement drive customer decisions.",
    principles: [
      "Appetite-driven visual storytelling",
      "Dynamic interaction patterns",
      "High-impact content hierarchy",
      "Conversion-focused user journeys",
    ],
    applications: [
      "Restaurants",
      "Cafés",
      "Hospitality Brands",
      "Food Platforms",
    ],
    color: "text-pink-600",
    textColor: "text-pink-700",
    bgGradient: "from-pink-50 to-rose-50",
    signatureUrl: "/signatures/taste-motion",
    available: false,
  },
  {
    id: 5,
    name: "Learning Path™",
    slug: "learning-path",
    industry: "Education",
    icon: Compass,
    description: "Guide progress through progression.",
    overview:
      "Learning Path™ is a progression-focused design language created for educational experiences where clarity, discovery, achievement, and continuous advancement shape the user journey.",
    principles: [
      "Progressive information disclosure",
      "Clear learning journeys",
      "Achievement-oriented interaction",
      "Accessible knowledge architecture",
    ],
    applications: [
      "Schools",
      "Universities",
      "Learning Platforms",
      "Coaching Institutes",
    ],
    color: "text-purple-600",
    textColor: "text-purple-700",
    bgGradient: "from-purple-50 to-indigo-50",
    signatureUrl: "/signatures/learning-path",
    available: false,
  },
  {
    id: 6,
    name: "Precision Grid™",
    slug: "precision-grid",
    industry: "Finance",
    icon: Grid3x3,
    description: "Design confidence through order.",
    overview:
      "Precision Grid™ is a data-oriented design language created for financial experiences where accuracy, order, transparency, and controlled information density establish confidence.",
    principles: [
      "Structured data presentation",
      "Precision-driven layouts",
      "Trust-oriented visual hierarchy",
      "Controlled information density",
    ],
    applications: [
      "Banks",
      "Fintech Platforms",
      "Investment Firms",
      "Financial Services",
    ],
    color: "text-green-600",
    textColor: "text-green-700",
    bgGradient: "from-green-50 to-emerald-50",
    signatureUrl: "/signatures/precision-grid",
    available: false,
  },
];

export function getSignatureBySlug(slug: string) {
  return signatures.find((signature) => signature.slug === slug);
}