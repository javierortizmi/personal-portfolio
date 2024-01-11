"use client";

import React from 'react';

import { toast } from 'sonner';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

import SubmitBtn from '@/components/submit-btn';
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
      <p className="text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:javierortizmi@gmail.com">
          javierortizmi@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent!");
        }}
        className="flex flex-col mt-10 w-full dark:text-black"
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
