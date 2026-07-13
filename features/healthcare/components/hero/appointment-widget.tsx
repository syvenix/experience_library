import Image from "next/image";
import { CalendarDays, CheckCircle2, Clock3 } from "lucide-react";

import { LinkButton } from "@healthcare/components/ui/button";

export function AppointmentWidget() {
  return (
    <aside
      aria-label="Next appointment"
      className="clinic-glass w-full max-w-[304px] rounded-xl p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-clinic-navy">
          Next Appointment
        </p>

        <span className="inline-flex items-center gap-1 rounded-pill bg-clinic-success px-3 py-1 text-[11px] font-bold text-clinic-successText">
          <CheckCircle2
            aria-hidden="true"
            size={12}
          />
          Confirmed
        </span>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Image
          src="/experiences/healthcare/images/clinic/doctor-sarah.png"
          alt="Dr. Sarah Johnson"
          width={56}
          height={56}
          loading="eager"
          sizes="56px"
          className="size-14 rounded-pill object-cover"
        />

        <div>
          <p className="font-bold text-clinic-navy">
            Dr. Sarah Johnson
          </p>

          <p className="mt-1 text-sm text-clinic-muted">
            Cardiologist
          </p>
        </div>
      </div>

      <dl className="mt-5 grid gap-3 border-t border-clinic-border pt-5 text-sm text-clinic-navy">
        <div className="flex items-center gap-2">
          <CalendarDays
            aria-hidden="true"
            className="text-clinic-primary"
            size={16}
          />

          <dt className="sr-only">Date</dt>
          <dd>Today, 10 May 2025</dd>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <Clock3
            aria-hidden="true"
            className="text-clinic-primary"
            size={16}
          />

          <dt className="sr-only">Time</dt>
          <dd>10:30 AM</dd>
        </div>
      </dl>

      <LinkButton
        href="#contact"
        className="mt-5 w-full"
      >
        View Appointment
      </LinkButton>
    </aside>
  );
}