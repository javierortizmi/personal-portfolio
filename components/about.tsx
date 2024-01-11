"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About", 0.85);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col justify-start w-full mb-20 leading-7 sm:mb-32 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After deciding that I wanted to pursue a career in{" "}
        <span className="underline">Telecommunications</span>, I started
        wondering how I could combine my passion for music with my technical
        expertise. I started researching the field of{" "}
        <span className="font-medium">Audio AI</span> and was fascinated by the
        possibilities.
      </p>
      <p className="mb-3">
        During my degree at{" "}
        <span className="font-medium">Carlos III University of Madrid</span>, I
        have been able to explore the field of telecommunications in depth. I
        have taken courses in{" "}
        <span className="italic">
          machine learning, image and audio processing, computer architecture,
          and computer networks.
        </span>{" "}
        During my year abroad at{" "}
        <span className="font-medium">
          University of Maryland, College Park
        </span>
        , I expanded my knowledge in{" "}
        <span className="italic">
          computer vision, artificial intelligence, and data science.
        </span>{" "}
        and joined the <span className="font-medium">Leatherbacks Club</span>.
      </p>
      <p className="mb-3">
        Currently on the lookout for an{" "}
        <span className="font-medium">internship</span> to dive deeper into the
        world of telecommunications, I&apos;m excited to blend my technical
        expertise with my knack for innovation. Let&apos;s join forces and{" "}
        <span className="underline">create</span> some tech magic!
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        producing music, playing video games, and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">history and economy</span>.
      </p>
    </motion.section>
  );
}
