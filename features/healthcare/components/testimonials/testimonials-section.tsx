import { Quote, Star } from "lucide-react";

import { MotionSection } from "@healthcare/components/ui/motion-section";
import { testimonials } from "@healthcare/lib/site-data";

const MAX_RATING = 5;

export function TestimonialsSection() {
  return (
    <MotionSection
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-10"
    >
      <div className="clinic-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Section Header */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clinic-primary">
            Testimonials
          </p>

          <h2
            id="testimonials-heading"
            className="mt-3 text-balance text-4xl"
          >
            Trusted by families across the city.
          </h2>
        </div>

        {/* Testimonials */}
        <div
          className="grid gap-5 md:grid-cols-2"
          role="list"
          aria-label="Patient testimonials"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              role="listitem"
              className="clinic-card rounded-lg p-7"
            >
              <Quote
                aria-hidden="true"
                className="mb-5 fill-blue-100 text-clinic-primary"
                size={34}
              />

              <blockquote className="text-base leading-7 text-clinic-body">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-6 flex items-center justify-between gap-4">
                <footer>
                  <p className="font-bold text-clinic-navy">
                    {testimonial.name}
                  </p>

                  <p className="mt-1 text-sm text-clinic-muted">
                    {testimonial.role}
                  </p>
                </footer>

                <div
                  className="flex text-clinic-warning"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: MAX_RATING }).map((_, index) => (
                    <Star
                      key={index}
                      aria-hidden="true"
                      size={14}
                      className="fill-current"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}