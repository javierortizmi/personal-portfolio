"use client";

import React from 'react'

import { motion } from 'framer-motion'

import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

import SectionHeading from '@/components/section-heading'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 sm:mb-40 scroll-mt-28"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul
        className="flex flex-wrap justify-start gap-2 text-lg text-gray-800"
      >
        {skillsData.map((skill, index) => (
          <motion.li 
            key={index}
            className="bg-white border border-black border-opacity-20 rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
