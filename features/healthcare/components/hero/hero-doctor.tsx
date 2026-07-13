import Image from "next/image";

export function HeroDoctor() {
  return (
    <Image
      src="/experiences/healthcare/images/clinic/hero-doctor.png"
      alt="Professional doctor from Syvenix Clinic"
      priority
      width={760}
      height={980}
      sizes="(max-width: 1024px) 80vw, 620px"
      className="
        h-[720px]
        w-auto
        object-contain
        select-none
        pointer-events-none
        drop-shadow-[0_25px_45px_rgba(15,23,42,0.18)]
        xl:h-[780px]
      "
    />
  );
}