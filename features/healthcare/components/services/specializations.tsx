import { ArrowRight } from "lucide-react";

import { SpecializationCard } from "@healthcare/components/services/specialization-card";
import { MotionSection } from "@healthcare/components/ui/motion-section";
import { specializations } from "@healthcare/lib/site-data";

export function Specializations() {
  return (
    <MotionSection
      id="services"
      aria-labelledby="specializations-heading"
      className="py-8"
    >
      <div className="clinic-shell">
        <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <h2
            id="specializations-heading"
            className="font-editorial text-3xl font-semibold text-clinic-navy"
          >
            Our Specializations
          </h2>

          <a
            href="#services"
            className="hidden items-center gap-2 text-sm font-bold text-clinic-primary transition-colors duration-200 hover:text-clinic-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2 sm:inline-flex"
          >
            View All Services

            <ArrowRight
              aria-hidden="true"
              size={15}
            />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {specializations.map((item) => (
            <SpecializationCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}