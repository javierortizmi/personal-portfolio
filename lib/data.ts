import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import robot_preview from "@/public/robot_preview.jpg";
import music_player_preview from "@/public/music_player_preview.jpg";
import { SiCss3, SiExpress, SiFramer, SiGit, SiGraphql, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Telecommunications Engineering student",
    location: "Madrid, ES",
    description:
      "Telecommunications Engineering with a concentration in Sound and Image at Carlos III University.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Mathematics Private Tutor",
    location: "Madrid, ES",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Lifeguard",
    location: "Madrid, ES",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023 (Seasonal)",
  },
] as const;

export const projectsData = [
  {
    title: "Music Player App",
    description:
      "Coded in Kotlin and developed in Android Studio, fetches the songs from a Firebase database and provides the feature of adjusting the device volume with the user speed (GPS).",
    tags: ["Android Studio", "Kotlin", "GPS", "Google Ads", "Firebase"],
    imageUrl: music_player_preview,
    demoUrl:
      "https://appetize.io/app/2va72f4rcuub446rz5mn22ve6m?audio=true&device=pixel7pro&osVersion=13.0",
    codeUrl: "https://github.com/javierortizmi/MusicPlayerApp",
  },
  {
    title: "Gamehub",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    demoUrl: "https://corpcomment.com",
    codeUrl: "https://google.com",
  },
  {
    title: "Robot with Obstacle Detection",
    description:
      "Autonomous Vehicle Project developed in C, shows the acquired knowledge in several peripherals controlled by the microcontroller NUCLEO-L152RE Board.",
    tags: [
      "C (Programming Language)",
      "STMicroelectronics",
      "Bluetooth",
      "STM32CubeIDE",
    ],
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
    name: "Git",
    icon: React.createElement(SiGit),
    color: "#F05032",
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
    name: "GraphQL",
    icon: React.createElement(SiGraphql),
    color: "#E10098",
  },
  {
    name: "Express",
    icon: React.createElement(SiExpress),
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
    color: "#336791",
  },
  {
    name: "Python",
    icon: React.createElement(SiPython),
    color: "#3776AB",
  },
] as const;