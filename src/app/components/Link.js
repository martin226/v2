export default function Link({ className, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className={`underline decoration-neutral-400 text-neutral-700 hover:text-neutral-400 ${className}`}
    >
      {children}
    </a>
  );
}
