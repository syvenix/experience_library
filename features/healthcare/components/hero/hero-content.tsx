import { Phone, ShieldCheck } from "lucide-react";

import { LinkButton } from "@healthcare/components/ui/button";

export function HeroContent() {
  return (
    <div className="relative z-20 max-w-[620px]">
      {/* Badge */}
      <span className="inline-flex items-center gap-2 rounded-full border border-clinic-border bg-white px-4 py-2 text-sm font-semibold text-clinic-primary shadow-sm">
        <ShieldCheck
          size={15}
          aria-hidden="true"
        />
        Trusted by 12,000+ Patients
      </span>

      {/* Heading */}
      <h1 className="mt-8 max-w-[560px] text-balance">
        Exceptional Care.
        <span className="block text-clinic-primary">
          Thoughtfully
        </span>
        Delivered.
      </h1>

      {/* Description */}
      <p className="mt-7 max-w-[470px] text-lg leading-8 text-clinic-body">
        Advanced medical expertise with a human touch.
        <br />
        We're here for you and your family.
      </p>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-4">
        <LinkButton
          href="#contact"
          showArrow
        >
          Book Appointment
        </LinkButton>

        <LinkButton
          href="tel:+919876543210"
          variant="secondary"
        >
          <Phone
            size={16}
            aria-hidden="true"
          />
          Emergency Call
        </LinkButton>
      </div>
    </div>
  );
}