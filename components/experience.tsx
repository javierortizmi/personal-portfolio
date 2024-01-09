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
      <ol
        className="relative border-s border-black border-opacity-20 ml-4"
      >
        {experiencesData.map((experience, index) => (
          <li
            className="mb-10 last:mb-0 ms-7"
            key={index}
          >
            <ExperienceItem {...experience} />
          </li>
        ))}
      </ol>
    </section>
  );
}
