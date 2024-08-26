import Image from "next/image";
import Github from "./icon/Github";
import ArrowTopRightOnSquare from "./icon/ArrowTopRightOnSquare";

const shimmer = `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#333" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function ProjectCard({
  title,
  description,
  href,
  image,
  imageAlt,
  technologies,
  github,
  demo,
  className,
}) {
  return (
    <div className={`bg-neutral-100 rounded-lg shadow-md ${className}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={image}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
          alt={imageAlt}
          className="rounded-t-lg w-full h-[200px] object-cover object-center hover:h-[275px] transition-all duration-300"
        />
      </a>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 font-bold text-2xl hover:underline"
          >
            {title}
          </a>
          {(github || demo) && (
            <div className="flex flex-wrap gap-2 justify-end">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="py-1.5 px-3 text-sm font-medium text-center text-neutral-200 bg-stone-700 rounded-md hover:bg-stone-100 hover:text-neutral-500 border border-stone-700 transform transition-all duration-300"
                >
                  <Github className="size-4 inline align-middle mr-1" />
                  github repo
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  className="py-1.5 px-3 text-sm font-medium text-center text-neutral-700 bg-neutral-200 rounded-md hover:bg-neutral-300"
                >
                  check it out
                  <ArrowTopRightOnSquare className="size-4 inline align-middle ml-1" />
                </a>
              )}
            </div>
          )}
        </div>
        <p className="text-neutral-500 mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-neutral-200 text-neutral-700 rounded-md text-xs"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
