"use client";

import React from "react";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { useDictionary } from "@/context/dictionary-context";

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
  const { dictionary } = useDictionary();
  const { ref } = useSectionInView(dictionary.links[2].name);

  return (
    <section className="mb-28 sm:mb-40 scroll-mt-28" id="skills" ref={ref}>
      <SectionHeading>{dictionary.skillsData.title}</SectionHeading>
      <ul className="flex flex-wrap justify-center sm:justify-start gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center bg-white borderBlack rounded-xl px-5 py-3 gap-x-2 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div style={{ color: skill.color }}>{skill.icon}</div>
            <div className="hidden sm:block">{skill.name}</div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
