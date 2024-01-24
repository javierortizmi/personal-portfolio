"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { useDictionary } from "@/context/dictionary-context";

export default function About() {
  const { dictionary } = useDictionary();
  const { ref } = useSectionInView(dictionary.links[4].name, 0.85);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col justify-start w-full mb-20 sm:mb-24 scroll-mt-28"
    >
      <SectionHeading>{dictionary.aboutData.title}</SectionHeading>
      <div className="[&>p]:mb-3">
        <p>
          {dictionary.aboutData.paragraphs1}
          <span className="underline">{dictionary.aboutData.paragraphs2}</span>
          {dictionary.aboutData.paragraphs3}
          <span className="font-semibold">
            {dictionary.aboutData.paragraphs4}
          </span>
          {dictionary.aboutData.paragraphs5}
        </p>
        <p>
          {dictionary.aboutData.paragraphs6}
          <span className="font-semibold">
            {dictionary.aboutData.paragraphs7}
          </span>
          {dictionary.aboutData.paragraphs8}
          <span className="italic">{dictionary.aboutData.paragraphs9}</span>
        </p>
        <p>
          {dictionary.aboutData.paragraphs10}
          <span className="font-semibold">
            {dictionary.aboutData.paragraphs11}
          </span>
          {dictionary.aboutData.paragraphs12}
          <span className="italic">{dictionary.aboutData.paragraphs13}</span>
        </p>
        <p>
          {dictionary.aboutData.paragraphs14}
          <span className="font-semibold">
            {dictionary.aboutData.paragraphs15}
          </span>
          {dictionary.aboutData.paragraphs16}
        </p>
        <p>
          {dictionary.aboutData.paragraphs17}
          <span className="underline">{dictionary.aboutData.paragraphs18}</span>
          {dictionary.aboutData.paragraphs19}
        </p>
      </div>
    </motion.section>
  );
}
