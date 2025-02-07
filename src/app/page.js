"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import Signature from "@/app/assets/signature.png";
import Image from "next/image";
import { useState } from "react";
import ComputerDesktop from "./components/icon/ComputerDesktop";

export default function About() {
  return (
    <div className="flex flex-col gap-12 max-w-2xl mx-auto">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600">
            incoming SWE Intern @ {" "}
            <Link href="https://shopify.com" className="font-medium">
              Shopify
            </Link> (summer 2025)
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600">
            cs @ {" "}
            <Link href="https://uwaterloo.ca" className="font-medium">
              UWaterloo
            </Link>
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 italic font-medium">recently:</span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <div className="absolute left-0 top-[10px] w-[4px] h-[4px] bg-stone-600 rounded-full transition-all duration-300 group-hover/item:scale-150" />
              <span className="text-stone-600">
                shipped a{" "}
                <Link href="https://jakesresu.me" className="font-medium">
                  product
                </Link>{" "}
                to 3,500+ users (idea → launch in &lt; 2 days)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <div className="absolute left-0 top-[10px] w-[4px] h-[4px] bg-stone-600 rounded-full transition-all duration-300 group-hover/item:scale-150" />
              <span className="text-stone-600">
                built a{" "}
                <Link href="https://github.com/martin226/litenet" className="font-medium">
                  deep learning framework
                </Link>{" "}
                from scratch in C++
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <div className="absolute left-0 top-[10px] w-[4px] h-[4px] bg-stone-600 rounded-full transition-all duration-300 group-hover/item:scale-150" />
              <span className="text-stone-600">
                created an <Link href="https://github.com/martin226/twirl" className="font-medium">AI agent</Link> for turning text/images into 3D-printable models (UofTHacks 2025 Winner)
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600">
            in high school: ML research at{" "}
            <Link href="https://sunnybrook.ca/research/" className="font-medium">
              Sunnybrook
            </Link>, research at{" "}
            <Link href="https://cs.uwaterloo.ca/~dbarrada/" className="font-medium">
              UWaterloo
            </Link>, organized{" "}
            <Link href="https://www.jamhacks.ca/" className="font-medium">
              JAMHacks
            </Link>, led my school&apos;s <Link href="https://app.staugustinechs.ca/" className="font-medium">
              mobile app
            </Link>
          </span>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center py-4 px-6 rounded-lg border-2 border-stone-400 hover:bg-stone-800 hover:text-white bg-stone-50 text-stone-600 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&apos;ve built{" "}
        <ComputerDesktop className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex justify-between mt-4">
        <div className="relative flex-1">
          <Image
            src={Signature}
            alt="Martin Sit Signature"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 shadow-lg overflow-hidden">
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
