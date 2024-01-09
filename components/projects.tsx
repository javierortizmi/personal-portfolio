"use client";

import React from 'react'

import { motion } from 'framer-motion'

import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

import Project from '@/components/project'
import SectionHeading from '@/components/section-heading'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <motion.section
      className="mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      id='projects'
      ref={ref}
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}