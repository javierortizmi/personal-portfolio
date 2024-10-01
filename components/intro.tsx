"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';

import { motion } from 'framer-motion';

import photo from "@/public/photo.jpg";
import { useSectionInView } from '@/lib/hooks';
import { useDictionary } from '@/context/dictionary-context';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const {dictionary} = useDictionary();
  const { ref } = useSectionInView(dictionary.links[0].name, 0.6);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section className="mb-20 sm:mb-0 scroll-mt-96" id="home" ref={ref}>
      <div className="flex items-center justify-start mb-10">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={photo}
              alt="Javier portrait"
              quality={100}
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-2 border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-xl font-medium !leading-normal "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="text-4xl mb-6">
          {dictionary.introData.introParagraph1}
          <span className="font-semibold">Javier Ortiz Millan</span>
        </p>
        <p className="text-2xl">
          {dictionary.introData.introParagraph2}
          <span className="underline">
            {dictionary.introData.introParagraph3}
          </span>
          {dictionary.introData.introParagraph4}
          <span className="italic">{dictionary.introData.introParagraph5}</span>
          <span className="text-[#676394] dark:text-[#8a8fb8]">
            {dictionary.introData.introParagraph6}
          </span>
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col w-full md:flex-row items-center justify-center gap-2 md:gap-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group h-12 w-56 md:w-auto bg-gray-900 text-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
          onClick={() => {
            setActiveSection(dictionary.links[5].name);
            setTimeOfLastClick(Date.now());
          }}
        >
          {dictionary.introData.ContactBtn}
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV_Javier_Ortiz_Millan.pdf"
          target='_blank'
          className="group h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          {dictionary.introData.CVBtn}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <Link
          href="https://www.linkedin.com/in/javierortizmi"
          target="_blank"
          className="h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-100 transition borderBlack dark:bg-white/10 dark:hover:text-gray-50"
        >
          <BsLinkedin className="w-4 h-4 text-[#0A66C2]" />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/javierortizmi"
          target="_blank"
          className="h-12 w-56 md:w-auto bg-white px-5 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-100 transition borderBlack dark:bg-white/10 dark:hover:text-gray-50"
        >
          <FaGithubSquare className="w-5 h-5 text-[#181717] dark:text-white/60" />
          GitHub
        </Link>
      </motion.div>
    </section>
  );
}
