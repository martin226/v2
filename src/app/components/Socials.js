export default function Socials({ className, socials }) {
  return (
    <ul className={`inline-flex ${className}`}>
      {socials.map((social, index) => (
        <li
          key={index}
          className={`inline-block ${
            index > 0 ? "before:content-['•'] before:mx-2" : ""
          }`}
        >
          <a
            href={social.href}
            target="_blank"
            className="underline decoration-neutral-400 text-neutral-700 hover:text-neutral-400"
          >
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
