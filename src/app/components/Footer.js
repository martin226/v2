import { Twitter, Linkedin, Github, FileText, Mail, CodeXml } from "lucide-react";

export default function Footer({ className }) {
  const links = [
    {
      name: "x",
      href: "https://x.com/_martinsit",
      icon: Twitter,
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/martin-sit/",
      icon: Linkedin,
    },
    {
      name: "github",
      href: "https://github.com/martin226",
      icon: Github,
    },
    {
      name: "email",
      href: "mailto:martinsit288@gmail.com",
      icon: Mail,
    },
    {
      name: "repo",
      href: "https://github.com/martin226/v2",
      icon: CodeXml,
    }
  ];

  return (
    <footer className={`flex flex-col gap-4 text-sm text-stone-500 dark:text-stone-400 ${className}`}>
      <hr className="border-b border-neutral-200 dark:border-neutral-800" />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center hover:text-neutral-800 dark:hover:text-neutral-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 hover:scale-110 md:hover:scale-110 transition-transform duration-500 ease-out" />
                  <span className="hidden md:inline-block md:w-0 md:overflow-hidden md:group-hover:w-auto md:group-hover:ml-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    {link.name}
                  </span>
                </>
              )}
              {!link.icon && (
                <span>{link.name}</span>
              )}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href="https://cs.uwatering.com/#https://martinsit.ca/?nav=prev" className="text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200">
            ←
          </a>
          <a
            href="https://cs.uwatering.com/#https://martinsit.ca/"
            target="_blank"
          >
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              className="w-6 h-auto opacity-80 dark:invert"
            />
          </a>
          <a href="https://cs.uwatering.com/#https://martinsit.ca/?nav=next" className="text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200">
            →
          </a>
        </div>
      </div>
      <p>{new Date().getFullYear()} &copy; Martin Sit</p>
    </footer>
  );
}
