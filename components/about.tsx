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
      className="flex flex-col justify-start w-full mb-20 leading-7 sm:mb-28 scroll-mt-28"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After deciding that I wanted to pursue a career in{" "}
        <span className="underline">Telecommunications</span>, I started
        wondering how I could combine my passion for the intricate world of audio with my technical
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
          object-oriented programming, signal processing, systems architecture,
          electric components and circuit design, microprocessors, and computer
          networks.
        </span>{" "}
        During my year abroad at{" "}
        <span className="font-medium">
          University of Maryland, College Park
        </span>
        , I expanded my knowledge in{" "}
        <span className="italic">
          computer vision, artificial intelligence, web and app development, and
          cybersecurity.
        </span>
      </p>
      <p className="mb-3">
        Currently on the lookout for an{" "}
        <span className="font-medium">internship</span> to dive deeper into the
        world of telecommunications, I&apos;m excited to blend my technical
        expertise with my knack for innovation.
      </p>
      <p className="mb-3">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        producing music, playing video games, and{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
      <p>
        Let&apos;s join forces and <span className="underline">create</span>{" "}
        some tech magic!
      </p>
    </motion.section>
  );
}
