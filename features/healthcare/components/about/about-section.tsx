import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";

import { MotionSection } from "@healthcare/components/ui/motion-section";
import { features } from "@healthcare/lib/site-data";

const impact = [
  { id: "experience", value: "10+", label: "Years of Excellence" },
  { id: "lives", value: "50K+", label: "Lives Impacted" },
  { id: "specialties", value: "15+", label: "Specialties Available" },
  { id: "satisfaction", value: "98%", label: "Patient Satisfaction" },
] as const;

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      aria-labelledby="about-heading"
      className="py-8"
    >
      <div className="clinic-shell">
        <div className="clinic-card grid overflow-hidden rounded-xl bg-gradient-to-br from-white to-clinic-lightBlue/70 lg:grid-cols-[0.78fr_1.22fr]">
          {/* Content */}
          <div className="p-7 sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clinic-primary">
              About Syvenix Clinic
            </p>

            <h2
              id="about-heading"
              className="mt-4 max-w-[420px] text-balance text-4xl"
            >
              Where Expertise Meets Compassion.
            </h2>

            <p className="mt-5 max-w-[430px] text-sm leading-7 text-clinic-body">
              We combine advanced technology with a human, patient-first
              approach to deliver exceptional healthcare experiences.
            </p>

            <ul className="mt-6 grid gap-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm font-medium text-clinic-navy"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="text-clinic-primary"
                    size={16}
                  />

                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-7 inline-flex text-sm font-bold text-clinic-primary transition-colors duration-200 hover:text-clinic-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-offset-2"
            >
              Learn More About Us
            </a>
          </div>

          {/* Image */}
          <div className="relative min-h-[430px] p-5">
            <Image
              src="/experiences/healthcare/images/clinic/clinic-interior.png"
              alt="Premium modern clinic reception"
              width={900}
              height={640}
              sizes="(max-width: 1024px) 100vw, 900px"
              className="h-full min-h-[390px] rounded-lg object-cover"
            />

            {/* Impact Stats */}
            <div className="clinic-glass absolute bottom-7 left-10 right-10 grid grid-cols-2 rounded-lg p-5 sm:grid-cols-4">
              {impact.map((item) => (
                <div
                  key={item.id}
                  className="px-3"
                >
                  <p className="text-3xl font-bold text-clinic-primary">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs font-medium text-clinic-navy">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="clinic-glass absolute right-8 top-16 hidden max-w-[270px] rounded-lg p-6 xl:block">
              <Quote
                aria-hidden="true"
                className="mb-4 fill-clinic-primary text-clinic-primary"
                size={28}
              />

              <p className="text-sm leading-6 text-clinic-body">
                Our mission is to improve lives through exceptional care,
                innovation, and genuine compassion.
              </p>

              <footer className="mt-4 text-sm font-bold text-clinic-navy">
                Dr. James Wilson

                <span className="block text-xs font-medium text-clinic-muted">
                  Medical Director
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}