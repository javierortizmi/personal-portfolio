"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { Dictionary } from "@/lib/types";

export default function About({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  const { ref } = useSectionInView(dictionary.links[1].name, 0.85);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col justify-start w-full mb-20 leading-7 sm:mb-28 scroll-mt-28"
    >
      <SectionHeading>{dictionary.aboutData.title}</SectionHeading>
      {dictionary.aboutData.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="mb-3 last:mb-0"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </motion.section>
  );
}
