"use client";

import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import Signature from "@/app/components/Signature";
import ShopifyLogo from "@/app/components/icon/Shopify.png";
import UWaterlooLogo from "@/app/components/icon/UWaterloo.png";
import SunnybrookLogo from "@/app/components/icon/Sunnybrook.png";
import JAMHacksLogo from "@/app/components/icon/JAMHacks.png";
import StAugustineLogo from "@/app/components/icon/StAugustine.png";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-2xl mx-auto">
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            incoming SWE Intern @ {" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={ShopifyLogo} alt="Shopify Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://shopify.com" className="font-medium">
                Shopify
              </Link>
            </span> (summer 2025)
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            cs @ {" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={UWaterlooLogo} alt="UWaterloo Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://uwaterloo.ca" className="font-medium">
                UWaterloo
              </Link>
            </span>
          </span>
        </li>
        <li className="group flex flex-col gap-3 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400 italic font-medium">recently:</span>
          <ul className="grid gap-1 pl-4">
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                created{" "}
                <Link href="https://tryvibedraw.com" className="font-medium">
                  Cursor for 3D modeling
                </Link>{" "}
                (3M+ views, 1,600+ stars, inbound VC interest from Sequoia, a16z, GC, others)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                shipped a{" "}
                <Link href="https://jakesresu.me" className="font-medium">
                  product
                </Link>{" "}
                in &lt; 2 days to 10,000+ users
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                did it again with another{" "}
                <Link href="https://justslideitin.com" className="font-medium">
                  product
                </Link>{" "}
                (1,000+ users in &lt; 24 hours)
              </span>
            </li>
            <li className="relative flex items-start gap-4 group/item">
              <span className="absolute left-[-20px] top-0 text-stone-500 dark:text-stone-500">↳</span>
              <span className="text-stone-600 dark:text-stone-400">
                built a{" "}
                <Link href="https://github.com/martin226/litenet" className="font-medium">
                  deep learning framework
                </Link>{" "}
                from scratch in C++
              </span>
            </li>
          </ul>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            in high school: ML research at{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={SunnybrookLogo} alt="Sunnybrook Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://sunnybrook.ca/research/" className="font-medium">
                Sunnybrook
              </Link>
            </span>, research at{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={UWaterlooLogo} alt="UWaterloo Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://cs.uwaterloo.ca/~dbarrada/" className="font-medium">
                UWaterloo
              </Link>
            </span>, organized{" "}
            <span className="inline-flex items-baseline gap-1">
              <Image src={JAMHacksLogo} alt="JAMHacks Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://www.jamhacks.ca/" className="font-medium">
                JAMHacks
              </Link>
            </span>, led my school&apos;s <span className="inline-flex items-baseline gap-1">
              <Image src={StAugustineLogo} alt="St. Augustine Logo" width={14} height={14} className="object-contain relative top-[2px]" />
              <Link href="https://app.staugustinechs.ca/" className="font-medium">
                mobile app
              </Link>
            </span>
          </span>
        </li>
      </ul>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="relative flex-1 flex items-center">
          <Signature />
        </div>
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
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
