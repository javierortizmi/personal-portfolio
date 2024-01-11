"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
      className="h-16 hidden sm:flex sm:items-center sm:justify-center sm:my-20 md:my-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <div className="bg-gray-200 h-full w-1 rounded-full dark:bg-opacity-20" />
    </motion.div>
  );
}
