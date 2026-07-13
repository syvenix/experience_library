import { LucideIcon } from "lucide-react";

export type ExperienceStatus = "available" | "coming-soon";

export interface Experience {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  status: ExperienceStatus;
  color: string;
  bgColor: string;
  href: string;
}