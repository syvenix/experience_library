import { DoctorCard } from "@healthcare/components/doctors/doctor-card";
import { MotionSection } from "@healthcare/components/ui/motion-section";
import { doctors } from "@healthcare/lib/site-data";

export function DoctorsSection() {
  return (
    <MotionSection
      id="doctors"
      aria-labelledby="doctors-heading"
      className="py-10"
    >
      <div className="clinic-shell">
        <div className="mb-7 max-w-[620px]">
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clinic-primary">
            Expert Doctors
          </p>

          <h2
            id="doctors-heading"
            className="mt-3 text-balance text-4xl"
          >
            Experienced specialists for every stage of care.
          </h2>
        </div>

        <div
          className="grid gap-5 lg:grid-cols-2"
          role="list"
          aria-label="Doctor profiles"
        >
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.name}
              {...doctor}
            />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}