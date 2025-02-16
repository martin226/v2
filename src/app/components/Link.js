"use client";

import NextLink from "next/link";

export default function Link({
  className = "",
  href,
  isActive,
  isNextLink,
  children,
}) {
  const baseStyles = `
    relative
    inline-flex items-center
    text-stone-700 dark:text-stone-300
    transition-all duration-300
    ${!isActive && `
      after:absolute
      after:left-0
      after:bottom-0
      after:h-[1px]
      after:w-full
      after:bg-stone-300 dark:after:bg-stone-600
      after:z-[1]
      before:absolute
      before:left-0
      before:bottom-0
      before:h-[1px]
      before:w-full
      before:bg-stone-800 dark:before:bg-stone-300
      before:opacity-0
      before:z-[2]
      hover:before:opacity-100
      hover:text-stone-900 dark:hover:text-stone-100
      hover:before:[animation:sweep_2s_ease-in-out_infinite]
    `}
    ${className}
  `.trim();

  return (
    <>
      <style jsx global>{`
        @keyframes sweep {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.1% {
            transform: scaleX(1);
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
      `}</style>
      {isNextLink ? (
        <NextLink href={href} className={baseStyles}>
          {children}
        </NextLink>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
          {children}
        </a>
      )}
    </>
  );
}
