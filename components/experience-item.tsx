import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { Dictionary } from "@/lib/types";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

const ICONS: { [key: string]: React.ComponentType } = {
  work: CgWorkAlt,
  education: LuGraduationCap,
};

export default function ExperienceItem({
  experience,
}: {
  experience: Dictionary["experiencesData"][number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const positionProgress = useTransform(scrollYProgress, [0, 1], [100.0, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.0]);

  return (
    <article className="mb-10 last:mb-0 ms-7 w-full overflow-hidden">
      <div className="absolute w-8 h-8 rounded-full -start-4 border border-gray-900 bg-gray-700 flex items-center justify-center">
        <div className="text-gray-50">{React.createElement(ICONS[experience.icon])}</div>
      </div>
      <motion.div
        className="pt-[0.2rem]"
        ref={ref}
        style={{
          x: positionProgress,
          opacity: opacityProgress,
        }}
      >
        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-white/40">
          {experience.date}
        </time>
        <h3 className="text-lg font-semibold text-gray-950 mt-2 dark:text-white/90">
          {experience.title}
        </h3>
        <p className="mb-4 text-gray-700 text-pretty dark:text-white/60">
          {experience.description}
        </p>
        <p className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-white/40">
          {experience.location}
        </p>
      </motion.div>
    </article>
  );
}
