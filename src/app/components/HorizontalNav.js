"use client";

import Link from "./Link";

export default function HorizontalNav({ links }) {
  return (
    <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          isActive={link.isActive}
          isNextLink={link.isNextLink}
          className={`text-sm ${link.isActive ? "text-stone-900 dark:text-stone-100" : ""}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
