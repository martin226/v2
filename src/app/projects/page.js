"use client";

import Link from "../components/Link";
import ProjectList from "../components/ProjectList";

import VibeDrawImage from "../assets/projects/vibedraw.gif";
import SlideItInImage from "../assets/projects/slideitin.png";
import MakeItJakesImage from "../assets/projects/makeitjakes.gif";
import TwirlImage from "../assets/projects/twirl.png";
import LayoffEvadersImage from "../assets/projects/layoffevaders.png";
import LiteNetImage from "../assets/projects/litenet.gif";
import KaleidoscopeImage from "../assets/projects/kaleidoscope.png";
import SensaiImage from "../assets/projects/sensai.png";
import UptoneImage from "../assets/projects/uptone.png";
import CredibilityImage from "../assets/projects/credibility.png";
import BYRYouthImage from "../assets/projects/byryouth.png";
import SACHSAppWebsiteImage from "../assets/projects/sachs-app-website.png";
import SACHSWebsiteImage from "../assets/projects/sachs-website.png";
import TicTacToeImage from "../assets/projects/tictactoe.png";
import EnigmaImage from "../assets/projects/enigma.png";
import COVID19TrackerImage from "../assets/projects/covid19-tracker.png";
import EcoRewardsImage from "../assets/projects/ecorewards.png";

import { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Vibe Draw",
      href: "https://tryvibedraw.com",
      description:
        "the Cursor + Midjourney for 3D modeling. Create beautiful 3D assets from your roughest sketches in seconds. 3M+ views, 1,600+ stars.",
      image: VibeDrawImage,
      imageAlt: "Vibe Draw",
      technologies: ["Python", "FastAPI", "React", "Next.js", "Three.js", "TypeScript", "Google Cloud Platform"],
      github: "https://github.com/martin226/vibe-draw",
      demo: "https://tryvibedraw.com",
    },
    {
      title: "Slide it In",
      href: "https://justslideitin.com",
      description:
        "a powerful presentation generator that transforms documents into beautiful slide decks using AI. 1,000+ users in 24 hours.",
      image: SlideItInImage,
      imageAlt: "Slide it In",
      technologies: ["Go", "Next.js", "Google Cloud Platform"],
      github: "https://github.com/martin226/slideitin",
      demo: "https://justslideitin.com",
    },
    {
      title: "Make It Jake's",
      href: "https://jakesresu.me",
      description:
        "a website for turning any resume into Jake's Resume template. 10,000+ users, idea to production in < 2 days.",
      image: MakeItJakesImage,
      imageAlt: "Make It Jakes",
      technologies: ["Ruby on Rails", "Remix.js", "Redis", "Google Cloud Platform"],
      github: "https://github.com/martin226/makeitjakes",
      demo: "https://jakesresu.me",
    },
    {
      title: "Twirl",
      href: "https://dorahacks.io/buidl/21695",
      description:
        "an AI agent for turning text/images into 3D-printable models. made in 36h for UofTHacks 2025, 2nd place overall + best use of generative AI.",
      image: TwirlImage,
      imageAlt: "Twirl",
      technologies: ["Python", "FastAPI", "React", "Next.js", "Three.js", "OpenSCAD", "Azure"],
      github: "https://github.com/martin226/twirl",
      demo: "https://www.youtube.com/watch?v=8JtZbi48wHM",
    },
    {
      title: "Layoff Evaders",
      href: "https://devpost.com/software/layoff-evaders",
      description:
        "a VR fitness game where you move IRL to dodge layoffs. made in 24h for DeltaHacks 2025, 2nd place overall.",
      image: LayoffEvadersImage,
      imageAlt: "Layoff Evaders",
      technologies: ["Unity", "C#", "Streamlit", "Firebase"],
      github: "https://github.com/martin226/layoffevaders",
      demo: "https://www.youtube.com/watch?v=VG-6LGvBcf4"
    },
    {
      title: "EcoRewards",
      href: "https://devpost.com/software/ecorewards-t0qw26",
      description:
        "a mobile app that rewards users for making eco-friendly decisions. made in 36h for Hack the North 2024, winner of $1,200 RBC prize.",
      image: EcoRewardsImage,
      imageAlt: "EcoRewards mobile app",
      technologies: [
        "JavaScript",
        "React",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
        "GPT-4o",
        "NFC",
      ],
      github: "https://github.com/jeffrey-zang/ecorewards",
    },
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
      title: "Kaleidoscope",
      href: "https://partner.projectboard.world/ysc/project/emotion-and-irony-detection-for-individuals-with-autism-spectrum-disorder-using-deep-neural-networks-dwvwyv",
      description:
        "a browser extension providing emotion and irony detection in one click for individuals with autism spectrum disorder.",
      image: KaleidoscopeImage,
      imageAlt: "Kaleidoscope browser extension",
      technologies: ["Python", "PyTorch", "HuggingFace", "WebExtensions", "Flask"],
      github: "https://github.com/martin226/kaleidoscope",
      demo: "https://partner.projectboard.world/ysc/project/emotion-and-irony-detection-for-individuals-with-autism-spectrum-disorder-using-deep-neural-networks-dwvwyv",
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
        "Selenium",
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
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
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
