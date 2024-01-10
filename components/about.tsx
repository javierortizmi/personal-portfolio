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
          signal processing, machine learning, image and audio processing,
          computer vision, digital communications, software engineering,
          computer architecture, and computer networks.
        </span>{" "}
        I am currently working on a{" "}
        <span className="font-medium">research project</span> that involves
        using machine learning to{" "}
        <span className="font-medium">generate music</span>.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. Currently on the lookout for an internship to
        dive deeper into the world of telecommunications, I'm excited to blend
        my technical expertise with my knack for innovation. Let's join forces
        and create some tech magic!
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and producing music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and economy</span>.
      </p>
    </motion.section>
  );
}
