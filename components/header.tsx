"use client";

import React from 'react';
import Link from 'next/link';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-50 relative flex justify-center">
      <motion.nav
        className="fixed flex justify-center items-center w-full top-0 h-20 rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur sm:top-6 sm:h-14 sm:w-[36rem] sm:rounded-full"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ul className="flex w-72 items-center justify-center flex-wrap gap-x-3 text-base font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              key={link.hash}
              className="flex items-center justify-center relative"
            >
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                className={clsx(
                  "flex w-full items-center justify-center py-[0.35rem] px-2 hover:text-gray-950 transition",
                  {
                    "text-gray-950": activeSection === link.name,
                    "text-gray-500": activeSection !== link.name,
                  }
                )}
              >
                {link.name}

                {activeSection === link.name && (
                  <motion.span 
                    className="rounded-full bg-gray-200 absolute inset-0 -z-10" 
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30, 
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
