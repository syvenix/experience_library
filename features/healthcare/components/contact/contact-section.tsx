import { Clock3, PhoneCall } from "lucide-react";

import { LinkButton } from "@healthcare/components/ui/button";
import { MotionSection } from "@healthcare/components/ui/motion-section";
import { contactItems } from "@healthcare/lib/site-data";

const primaryContactItems = contactItems.slice(0, 4);

export function ContactSection() {
  return (
    <MotionSection
      id="contact"
      aria-labelledby="contact-heading"
      className="py-10"
    >
      <div className="clinic-shell grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Contact Information */}
        <div className="clinic-card rounded-xl p-7 sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clinic-primary">
            Contact
          </p>

          <h2
            id="contact-heading"
            className="mt-3 max-w-[620px] text-balance text-4xl"
          >
            Book care that feels personal, precise, and easy.
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {primaryContactItems.map((item) => (
              <article
                key={item.label}
                className="rounded-md border border-clinic-border bg-white p-5"
              >
                <item.icon
                  aria-hidden="true"
                  className="text-clinic-primary"
                  size={22}
                />

                <p className="mt-4 text-sm font-bold text-clinic-muted">
                  {item.label}
                </p>

                <p className="mt-1 font-bold text-clinic-navy">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Emergency Card */}
        <aside className="grid gap-5">
          <div className="rounded-xl bg-clinic-primary p-8 text-white shadow-glow">
            <div className="flex items-center gap-4">
              <span className="grid size-16 place-items-center rounded-pill bg-white/16">
                <PhoneCall
                  aria-hidden="true"
                  size={28}
                />
              </span>

              <div>
                <h3 className="font-sans text-2xl font-bold text-white">
                  24/7 Emergency Care
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-50">
                  We&apos;re always here when you need us most.
                </p>
              </div>
            </div>

            <LinkButton
              href="tel:+919876543210"
              className="mt-7 bg-white text-clinic-primary hover:bg-blue-50"
            >
              Call +91 98765 43210
            </LinkButton>
          </div>

          {/* Opening Hours */}
          <div className="clinic-card rounded-xl p-8">
            <Clock3
              aria-hidden="true"
              className="text-clinic-primary"
              size={28}
            />

            <h3 className="mt-4 font-sans text-2xl font-bold text-clinic-navy">
              Open Today
            </h3>

            <p className="mt-2 text-clinic-body">
              08:00 AM – 08:00 PM
            </p>
          </div>
        </aside>
      </div>
    </MotionSection>
  );
}