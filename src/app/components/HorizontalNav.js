import Link from "./Link";

export default function HorizontalNav({ className, links }) {
  return (
    <ul className={`inline-flex ${className}`}>
      {links.map((link, index) => (
        <li
          key={index}
          className={`inline-block ${
            index > 0 ? "before:content-['•'] before:mx-2" : ""
          }`}
        >
          <Link
            href={link.href}
            isActive={link.isActive}
            isNextLink={link.isNextLink}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
