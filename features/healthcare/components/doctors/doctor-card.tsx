import Image from "next/image";
import { Star } from "lucide-react";

import { LinkButton } from "@healthcare/components/ui/button";

type DoctorCardProps = {
  name: string;
  specialty: string;
  education: string;
  experience: string;
  rating: string;
  reviews: string;
  image: string;
};

const MAX_RATING = 5;

export function DoctorCard({
  name,
  specialty,
  education,
  experience,
  rating,
  reviews,
  image,
}: DoctorCardProps) {
  const ratingValue = Number.parseFloat(rating);
  const filledStars = Math.round(ratingValue);

  return (
    <article className="clinic-card grid h-full gap-5 rounded-lg p-5 sm:grid-cols-[132px_1fr]">
      <Image
        src={image}
        alt={name}
        width={208}
        height={260}
        sizes="(max-width: 640px) 100vw, 132px"
        className="aspect-[4/5] w-full rounded-md object-cover sm:w-[132px]"
      />

      <div className="flex flex-col">
        <h3 className="font-sans text-xl font-bold text-clinic-navy">
          {name}
        </h3>

        <p className="mt-1 font-semibold text-clinic-body">
          {specialty}
        </p>

        <p className="mt-3 text-sm leading-6 text-clinic-muted">
          {education}
        </p>

        <p className="text-sm leading-6 text-clinic-muted">
          {experience}
        </p>

        <div
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-clinic-navy"
          aria-label={`${rating} out of 5 stars based on ${reviews}`}
        >
          <span className="flex text-clinic-warning">
            {Array.from({ length: MAX_RATING }).map((_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                size={14}
                className={
                  index < filledStars
                    ? "fill-current"
                    : "fill-transparent"
                }
              />
            ))}
          </span>

          <span>
            {rating} ({reviews})
          </span>
        </div>

        <LinkButton
          href="#contact"
          className="mt-5 w-full"
        >
          Book Appointment
        </LinkButton>
      </div>
    </article>
  );
}