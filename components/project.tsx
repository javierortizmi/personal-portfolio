"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { projectsData } from "@/lib/data";

import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
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
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="relative h-auto sm:h-96 flex bg-gray-100 hover:bg-gray-200 border border-black border-opacity-10 rounded-lg shadow overflow-hidden transition">
        <div
          className="w-full sm:w-1/2 h-full flex flex-col p-6
          group-even:w-full 
          group-even:sm:ml-[50%]"
        >
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap justify-center mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-80 md:-right-64 w-[34rem] rounded-lg shadow-xl transition 
          group-hover:scale-[1.04] 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2

          group-even:right-[initial]
          group-even:-left-80 
          group-even:md:-left-64"
        />
      </article>
    </motion.div>
  );
}