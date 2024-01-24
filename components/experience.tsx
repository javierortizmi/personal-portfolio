"use client";

import React from "react";

import { useSectionInView } from "@/lib/hooks";
import ExperienceItem from "@/components/experience-item";
import SectionHeading from "@/components/section-heading";
import { useDictionary } from "@/context/dictionary-context";

export default function Experience() {
  const { dictionary } = useDictionary();
  const { ref } = useSectionInView(dictionary.links[3].name);

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>{dictionary.experiencesData.title}</SectionHeading>
      <div className="relative border-s border-black border-opacity-20 ml-4 dark:border-white/30">
        {dictionary.experiencesData.experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceItem experience={experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
