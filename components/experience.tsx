"use client";

import React from 'react';

import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import ExperienceItem from '@/components/experience-item';
import SectionHeading from '@/components/section-heading';

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section 
      id="experience" 
      ref={ref} 
      className="mb-28 scroll-mt-28"
    >
      <SectionHeading>My experience</SectionHeading>
      <div
        className="relative border-s border-black border-opacity-20 ml-4 dark:border-white/30"
      >
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceItem {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
