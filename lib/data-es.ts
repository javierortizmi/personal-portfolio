import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import robot_preview from "@/public/robot_preview.jpg";
import music_player_preview from "@/public/music_player_preview.jpg";
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

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mí",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Estudiante de Ingeniería de Telecomunicaciones",
    location: "Madrid, Spain",
    description:
      "Telecommunications Engineering with a concentration in Sound and Image at Carlos III University.",
    icon: React.createElement(LuGraduationCap),
    date: "Expected in June 2025",
  },
  {
    title: "Estudiante de Ingeniería de Telecomunicaciones",
    location: "College Park, MD",
    description:
      "Exchange Year Engineering program at University of Maryland, College Park.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - May 2024",
  },
  {
    title: "Profesor particular de matemáticas",
    location: "Madrid, Spain",
    description:
      "Provided useful lessons that emphasize practicality and real-life application. I used a variety of teaching methods depending on the student's needs and learning style.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Jun 2023",
  },
  {
    title: "Socorrista",
    location: "Madrid, Spain",
    description:
      "Always guaranteed surveillance, security and prevention. I also provided first aid when needed and intervened in different situations of risk with total success.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2022 - Jun 2023 (Seasonal)",
  },
] as const;

export const projectsData = [
  {
    title: "Music Player App",
    description:
      "Spotify Clone coded in Kotlin and developed in Android Studio, fetches the songs from a Firebase database and provides the feature of adjusting the device volume with the user speed (GPS).",
    tags: ["Android Studio", "Kotlin", "GPS", "Google Ads", "Firebase"],
    imageUrl: music_player_preview,
    demoUrl:
      "https://appetize.io/app/2va72f4rcuub446rz5mn22ve6m?audio=true&device=pixel7pro&osVersion=13.0",
    codeUrl: "https://github.com/javierortizmi/MusicPlayerApp",
  },
  {
    title: "Robot with Obstacle Detection",
    description:
      "Autonomous Vehicle Project developed in C, shows the acquired knowledge in several peripherals controlled by the microcontroller NUCLEO-L152RE Board.",
    tags: ["C (Programming Language)", "STMicroelectronics", "Bluetooth"],
    imageUrl: robot_preview,
    demoUrl: null,
    codeUrl: "https://github.com/javierortizmi/AutonomousVehicle",
  },
] as const;

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
