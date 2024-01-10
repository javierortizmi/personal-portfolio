"use client";

import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from '@/components/section-heading'

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:javierortizmi@gmail.com">
          javierortizmi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="flex flex-col mt-10 w-full">
        <input
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4"
        />
        <textarea
          name=""
          id=""
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-12 w-32 bg-gray-900 text-gray-50 rounded-full outline-none transition focus:scale-105 hover:scale-105 active:scale-100 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
