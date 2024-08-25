import NextLink from "next/link";

export default function Link({
  className,
  href,
  isActive,
  isNextLink,
  children,
}) {
  return isNextLink ? (
    <NextLink
      href={href}
      className={`${
        !isActive && "underline hover:text-neutral-400"
      } decoration-neutral-400 text-neutral-700 ${className}`}
    >
      {children}
    </NextLink>
  ) : (
    <a
      href={href}
      target="_blank"
      className={`${
        !isActive && "underline hover:text-neutral-400"
      } decoration-neutral-400 text-neutral-700 ${className}`}
    >
      {children}
    </a>
  );
}
