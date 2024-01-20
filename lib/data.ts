import React from "react";
import {
  SiAndroidstudio,
  SiC,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiNextdotjs,
  SiNgrok,
  SiNodedotjs,
  SiPrisma,
  SiPython,
  SiReact,
  SiStmicroelectronics,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(SiHtml5),
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: React.createElement(SiCss3),
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: React.createElement(SiJavascript),
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#3178C6",
  },
  {
    name: "React",
    icon: React.createElement(SiReact),
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: React.createElement(SiNextdotjs),
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: React.createElement(SiNodedotjs),
    color: "#339933",
  },
  {
    name: "Express",
    icon: React.createElement(SiExpress),
    color: "#000000",
  },
  {
    name: "Git",
    icon: React.createElement(SiGit),
    color: "#F05032",
  },
  {
    name: "Github",
    icon: React.createElement(SiGithub),
    color: "#181717",
  },
  {
    name: "Tailwind",
    icon: React.createElement(SiTailwindcss),
    color: "#38B2AC",
  },
  {
    name: "Prisma",
    icon: React.createElement(SiPrisma),
    color: "#2D3748",
  },
  {
    name: "MongoDB",
    icon: React.createElement(SiMongodb),
    color: "#47A248",
  },
  {
    name: "Framer Motion",
    icon: React.createElement(SiFramer),
    color: "#0055FF",
  },
  {
    name: "Ngrok",
    icon: React.createElement(SiNgrok),
    color: "#1F1E1E",
  },
  {
    name: "Programming Language",
    icon: React.createElement(SiC),
    color: "#A8B9CC",
  },
  {
    name: "Java",
    icon: React.createElement(FaJava),
    color: "#007396",
  },
  {
    name: "Kotlin",
    icon: React.createElement(SiKotlin),
    color: "#0095D5",
  },
  {
    name: "Android Studio",
    icon: React.createElement(SiAndroidstudio),
    color: "#3DDC84",
  },
  {
    name: "Firebase",
    icon: React.createElement(SiFirebase),
    color: "#FFCA28",
  },
  {
    name: "Python",
    icon: React.createElement(SiPython),
    color: "#3776AB",
  },
  {
    name: "STMicroelectronics",
    icon: React.createElement(SiStmicroelectronics),
    color: "#03234B",
  },
] as const;
