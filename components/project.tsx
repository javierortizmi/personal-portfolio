"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { FaCode } from "react-icons/fa6";
import { IoTelescope } from "react-icons/io5";

import { motion, useScroll, useTransform } from "framer-motion";
import { Dictionary } from "@/lib/types";

export default function Project({
  project,
}: {
  project: Dictionary["projectsData"][number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1.0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group/project mb-3 sm:mb-8 last:mb-0"
    >
      <article className="relative h-auto flex bg-gray-100 group-hover/project:bg-gray-200 borderBlack rounded-lg shadow overflow-hidden transition dark:text-white dark:bg-white/10 dark:group-hover/project:bg-white/20">
        <div
          className="w-full sm:w-1/2 h-full flex flex-col p-6
          group-even/project:w-full 
          group-even/project:sm:ml-[50%]"
        >
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="leading-relaxed text-gray-700 mb-6 dark:text-white/70">
            {project.description}
          </p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mb-6 sm:justify-start sm:gap-3">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                className="group/demo w-48 md:w-fit flex justify-center items-center gap-x-2 p-2 bg-blue-600 text-gray-50 rounded-lg outline-none focus:scale-105 hover:scale-105 active:scale-100 hover:bg-blue-700 transition capitalize dark:text-gray-200"
              >
                explore demo
                <IoTelescope className="group-hover/demo:-rotate-[20deg] transition" />
              </Link>
            )}
            {project.codeUrl && (
              <Link
                href={project.codeUrl}
                target="_blank"
                className="group/code w-48 md:w-fit flex justify-center items-center gap-x-2 p-2 bg-gray-50 text-gray-950 rounded-lg borderBlack outline-none focus:scale-105 hover:scale-105 active:scale-100 transition capitalize dark:bg-gray-200"
              >
                view code
                <FaCode className="group-hover/code:rotate-180 transition" />
              </Link>
            )}
          </div>
          <ul className="flex flex-wrap justify-center sm:justify-start gap-2">
            {project.tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={project.imageUrl}
          alt={project.title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-80 md:-right-64 w-[34rem] rounded-lg shadow-xl transition 
          group-hover/project:scale-[1.04] 
          group-hover/project:-translate-x-3 
          group-hover/project:translate-y-3 
          group-hover/project:-rotate-2

          group-even/project:group-hover/project:translate-x-3 
          group-even/project:group-hover/project:translate-y-3 
          group-even/project:group-hover/project:rotate-2

          group-even/project:right-[initial]
          group-even/project:-left-80 
          group-even/project:md:-left-64"
          width={600}
          height={0}
        />
      </article>
    </motion.div>
  );
}
