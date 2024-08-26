"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import LiteNetImage from "../assets/projects/litenet.gif";
import SensaiImage from "../assets/projects/sensai.png";
import UptoneImage from "../assets/projects/uptone.png";
import CredibilityImage from "../assets/projects/credibility.png";
import BYRYouthImage from "../assets/projects/byryouth.png";
import SACHSAppWebsiteImage from "../assets/projects/sachs-app-website.png";
import SACHSWebsiteImage from "../assets/projects/sachs-website.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import EnigmaImage from "../assets/projects/enigma.png";
import COVID19TrackerImage from "../assets/projects/covid19-tracker.png";

import { useState } from "react";
import MagnifyingGlass from "../components/icon/MagnifyingGlass";

export default function Home() {
  const projects = [
    {
      title: "LiteNet",
      href: "https://github.com/martin226/litenet",
      description:
        "a C++ neural network framework built from scratch with 0 external dependencies.",
      image: LiteNetImage,
      imageAlt: "LiteNet terminal interface",
      technologies: ["C++"],
      github: "https://github.com/martin226/litenet",
    },
    {
      title: "Credibility",
      href: "https://github.com/martin226/credibility",
      description:
        "a research tool that uses LLMs and key metrics to assess the credibility of websites.",
      image: CredibilityImage,
      imageAlt: "Credibility website",
      technologies: [
        "Python",
        "JavaScript",
        "React",
        "Next.js",
        "TailwindCSS",
        "Flask",
        "GPT-4o",
      ],
      github: "https://github.com/martin226/credibility",
      demo: "https://devpost.com/software/credibility",
    },
    {
      title: "Sensai",
      href: "https://github.com/martin226/sensai",
      description:
        "a workout platform that uses computer vision to provide you with real-time suggestions and analytics.",
      image: SensaiImage,
      imageAlt: "Sensai website",
      technologies: [
        "Python",
        "JavaScript",
        "Vue.js",
        "Nuxt",
        "Flask",
        "OpenCV",
        "MediaPipe",
        "SocketIO",
        "JWT",
      ],
      github: "https://github.com/martin226/sensai",
      demo: "https://devpost.com/software/sensai-nvh940",
    },
    {
      title: "Uptone",
      href: "https://github.com/martin226/uptone",
      description:
        "a browser extension that protects users from hate speech on Twitter/X via a CNN built for sentiment analysis.",
      image: UptoneImage,
      imageAlt: "Uptone browser extension",
      technologies: [
        "Python",
        "JavaScript",
        "TensorFlow",
        "Keras",
        "Flask",
        "WebExtensions",
      ],
      github: "https://github.com/martin226/uptone",
      demo: "https://devpost.com/software/uptone",
    },
    {
      title: "Black York Region Youth",
      href: "https://byryouth.ca",
      description:
        "a modern, multi-page organization website for Black York Region Youth.",
      image: BYRYouthImage,
      imageAlt: "BYR Youth website",
      technologies: ["JavaScript", "Vue.js", "Nuxt", "WindiCSS", "Imgur API"],
      demo: "https://byryouth.ca",
    },
    {
      title: "St. Augustine CHS Mobile App Website",
      href: "https://app.staugustinechs.ca",
      description:
        "the official website for the St. Augustine Catholic High School mobile app.",
      image: SACHSAppWebsiteImage,
      imageAlt: "St. Augustine CHS Mobile App Website",
      technologies: ["JavaScript", "Vue.js", "Nuxt", "TailwindCSS", "Firebase"],
      github: "https://github.com/stau-app-dev/app-website",
      demo: "https://app.staugustinechs.ca",
    },
    {
      title: "St. Augustine CHS School Website",
      href: "https://staugustinechs.ca",
      description:
        "the official website for St. Augustine Catholic High School.",
      image: SACHSWebsiteImage,
      imageAlt: "St. Augustine CHS School Website",
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
      github: "https://github.com/stau-app-dev/main-website",
      demo: "https://staugustinechs.ca",
    },
    {
      title: "Tic-Tac-Toe AI Solver",
      href: "https://martin226.github.io/tic-tac-toe-ai/",
      description:
        "a web app that uses the minimax algorithm and alpha-beta pruning to let you play against an unbeatable AI.",
      image: TicTacToeImage,
      imageAlt: "Tic-Tac-Toe AI Solver",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/martin226/tic-tac-toe-ai/",
      demo: "https://martin226.github.io/tic-tac-toe-ai/",
    },
    {
      title: "Enigma",
      href: "https://martin226.github.io/enigma/",
      description:
        "a minimalistic web utility for creating and evaluating passwords.",
      image: EnigmaImage,
      imageAlt: "Enigma Password Generator",
      technologies: ["JavaScript", "Vue.js", "TailwindCSS"],
      github: "https://github.com/martin226/enigma/",
      demo: "https://martin226.github.io/enigma/",
    },
    {
      title: "COVID-19 Tracker",
      href: "https://martin226.github.io/covid19-tracker/",
      description:
        "a web app that tracks COVID-19 cases, recoveries, and deaths worldwide.",
      image: COVID19TrackerImage,
      imageAlt: "COVID-19 Tracker",
      technologies: ["JavaScript", "Vue.js", "TailwindCSS"],
      github: "https://github.com/martin226/covid19-tracker/",
      demo: "https://martin226.github.io/covid19-tracker/",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="relative">
        <MagnifyingGlass className="absolute top-2.5 left-3 size-6 text-stone-400" />
        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>
      <ProjectList
        projects={projects.filter(
          (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((technology) =>
              technology.toLowerCase().includes(searchTerm.toLowerCase())
            )
        )}
      />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/martin226?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
