"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/theme-context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-12 h-12 bg-opacity-80 backdrop-blur borderBlack shadow-2xl rounded-full flex items-center justify-center hover:scale-110 active:scale-105 transition-all dark:bg-gray-950 dark:border dark:border-white dark:border-opacity-40"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
