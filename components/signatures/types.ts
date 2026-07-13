import type { LucideIcon } from "lucide-react";

export interface Signature {
  id: number;

  name: string;

  slug: string;

  industry: string;

  icon: LucideIcon;

  description: string;

  overview: string;

  principles: string[];

  applications: string[];

  color: string;

  textColor: string;

  bgGradient: string;

  signatureUrl: string;

  available: boolean;
}