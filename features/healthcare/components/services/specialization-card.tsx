import type { LucideIcon } from "lucide-react";

export type Tone = "red" | "blue" | "cyan" | "violet" | "emerald";

const toneClasses: Record<Tone, string> = {
  red: "bg-red-50 text-red-500",
  blue: "bg-blue-50 text-clinic-primary",
  cyan: "bg-cyan-50 text-cyan-500",
  violet: "bg-violet-50 text-violet-600",
  emerald: "bg-emerald-50 text-clinic-emerald",
};

type SpecializationCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: Tone;
};

export function SpecializationCard({
  title,
  description,
  icon: Icon,
  tone,
}: SpecializationCardProps) {
  return (
    <article className="clinic-card h-full rounded-lg p-6 transition-transform duration-200 will-change-transform hover:-translate-y-1 hover:shadow-lg">
      <span
        className={`grid size-14 place-items-center rounded-pill ${toneClasses[tone]}`}
      >
        <Icon
          aria-hidden="true"
          size={28}
          strokeWidth={1.8}
        />
      </span>

      <h3 className="mt-6 font-sans text-lg font-bold text-clinic-navy">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-clinic-body">
        {description}
      </p>
    </article>
  );
}