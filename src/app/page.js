import Link from "./components/Link";
import NextLink from "next/link";
import Headshot from "@/app/assets/headshot.png";
import Signature from "@/app/assets/signature.png";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <p>CS @ University of Waterloo.</p>
      <p>
        Previously, I worked as an ML Research Intern at{" "}
        <Link href="https://sunnybrook.ca/research/">
          Sunnybrook Research Institute
        </Link>
        , building deep learning models to accelerate focused ultrasound
        treatment monitoring.
      </p>
      <p>
        Before that, I was a Research Intern at the University of Waterloo under
        the guidance of{" "}
        <Link href="https://cs.uwaterloo.ca/~dbarrada/">
          Professor Diogo Barradas
        </Link>
        , building systems to advance censorship-resistant Internet
        communications.
      </p>
      <p>
        In high school, I led the{" "}
        <Link href="https://app.staugustinechs.ca">App Development Team</Link>{" "}
        and grew our mobile app to hundreds of monthly active users. I developed
        our high school&apos;s{" "}
        <Link href="https://staugustinechs.ca">website</Link> (and{" "}
        <Link href="https://app.staugustinechs.ca">
          mobile app&apos;s website
        </Link>{" "}
        too).
      </p>
      <NextLink
        href="/projects"
        className="text-center py-4 rounded-md border border-stone-700 hover:bg-stone-700 hover:text-neutral-200 bg-stone-100 text-neutral-500 transform transition-all duration-300"
      >
        see what i've built →
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
