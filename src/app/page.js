"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import Signature from "@/app/assets/signature.png";
import Image from "next/image";
import { useState } from "react";
import ComputerDesktop from "./components/icon/ComputerDesktop";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <p>
        I&apos;m a CS student at the{" "}
        <Link href="https://uwaterloo.ca">University of Waterloo</Link> who
        loves building cool things.
      </p>
      <p>
        I&apos;m experienced in Python, JS/TS, and C++, with a lot of experience
        in full-stack web dev. Recently, I&apos;ve been diving deep into ML,
        creating projects such as a{" "}
        <Link href="https://github.com/martin226/litenet">
          C++ deep learning framework from scratch
        </Link>
        .
      </p>
      <p>
        Previously, I worked as an ML Research Intern at{" "}
        <Link href="https://sunnybrook.ca/research/">
          Sunnybrook Research Institute
        </Link>
        , building deep learning models to accelerate focused ultrasound
        treatment monitoring.
      </p>
      {!isExpanded ? (
        <div className="flex flex-row justify-between">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-neutral-500 to-transparent line-clamp-1">
            Before that, I was a Research Intern at the University of Waterloo
            &hellip;{" "}
          </span>
          <button
            className="text-neutral-700 font-medium text-right whitespace-nowrap"
            onClick={() => setIsExpanded(true)}
          >
            continue reading →
          </button>
        </div>
      ) : (
        <>
          <p>
            Before that, I was a Research Intern at the University of Waterloo
            under the guidance of{" "}
            <Link href="https://cs.uwaterloo.ca/~dbarrada/">
              Professor Diogo Barradas
            </Link>
            , building systems to advance censorship-resistant Internet
            communications.
          </p>
          <p>
            In high school, I led the{" "}
            <Link href="https://app.staugustinechs.ca">
              App Development Team
            </Link>{" "}
            and grew our mobile app to hundreds of monthly active users. I
            developed our high school&apos;s{" "}
            <Link href="https://staugustinechs.ca">website</Link> (and{" "}
            <Link href="https://app.staugustinechs.ca">
              mobile app&apos;s website
            </Link>{" "}
            too).
          </p>
          <p>
            I was also an organizer of{" "}
            <Link href="https://www.jamhacks.ca">JAMHacks</Link>, Canada&apos;s
            largest high school hackathon. I was the head of the Web/Tech team,
            where among other things, I spearheaded the development of the event
            website and dashboard used by hundreds of participants.
          </p>
          <button
            className="text-neutral-700 font-medium text-left"
            onClick={() => setIsExpanded(false)}
          >
            ← show less
          </button>
        </>
      )}
      <NextLink
        href="/projects"
        className="text-center py-4 rounded-md border border-stone-700 hover:bg-stone-700 hover:text-neutral-200 bg-stone-100 text-neutral-500 transform transition-all duration-300"
      >
        see what i&apos;ve built{" "}
        <ComputerDesktop className="size-6 inline align-top" />
      </NextLink>
      <div className="flex justify-between">
        <div className="relative flex-1">
          <Image
            src={Signature}
            alt="Martin Sit Signature"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-48 h-48 relative rounded-full border">
          <Image
            src={Headshot}
            alt="Martin Sit Headshot"
            fill
            className="object-cover object-top rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
