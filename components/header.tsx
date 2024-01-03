"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { links } from '@/lib/data';

export default function Header() {
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
              className="flex items-center justify-center"
            >
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center p-1 hover:text-gray-950 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
