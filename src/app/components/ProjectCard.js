import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";

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
    <div className={`group bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${className}`}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <div className="relative">
          <Image
            src={image}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer)}`}
            alt={imageAlt}
            className="rounded-t-lg w-full h-[200px] group-hover:h-[275px] object-cover object-center transition-all duration-500"
          />
        </div>
      </a>
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 font-bold text-2xl hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-200 block"
            >
              {title}
            </a>
            <p className="text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <SquareArrowOutUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
