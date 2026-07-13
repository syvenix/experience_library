"use client";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceGrid from "./ExperienceGrid";
import { experiences } from "./data";

export default function AllExperiences() {
  return (
    <>
      <ExperienceHeader />
      <ExperienceGrid experiences={experiences} />
    </>
  );
}
