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
        "the Cursor + Midjourney for 3D modeling. Create beautiful 3D assets from your roughest sketches in seconds. 3M+ views, 1,900+ stars.",
      image: VibeDrawImage,
      imageAlt: "Vibe Draw",
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Next.js",
        "Three.js",
        "TypeScript",
        "Google Cloud Platform",
      ],
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
      technologies: [
        "Ruby on Rails",
        "Remix.js",
        "Redis",
        "Google Cloud Platform",
      ],
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
      technologies: [
        "Python",
        "FastAPI",
        "React",
        "Next.js",
        "Three.js",
        "OpenSCAD",
        "Azure",
      ],
      github: "https://github.com/martin226/twirl",
      demo: "https://www.youtube.com/watch?v=8JtZbi48wHM",
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
