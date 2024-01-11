import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'framer-motion';

import { experiencesData } from '@/lib/data';

type ExperienceItemProps = (typeof experiencesData)[number];

export default function ExperienceItem({
  title,
  location,
  description,
  icon,
  date,
}: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const positionProgress = useTransform(scrollYProgress, [0, 1], [100.0, 0]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.0]);

  return (
    <article
      className="mb-10 last:mb-0 ms-7"
    >
      <div className="absolute w-8 h-8 rounded-full -start-4 border border-gray-900 bg-gray-700 flex items-center justify-center">
        <div className="text-gray-50">{icon}</div>
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
          {date}
        </time>
        <h3 className="text-lg font-semibold text-gray-950 mt-2 dark:text-white/90">{title}</h3>
        <p className="mb-4 text-gray-700 text-pretty dark:text-white/60">{description}</p>
      </motion.div>
    </article>
  );
}
