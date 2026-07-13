import { LucideIcon } from "lucide-react";

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}