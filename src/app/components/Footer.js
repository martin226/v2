import { Twitter, Linkedin, Github, FileText, Mail } from "lucide-react";

export default function Footer({ className }) {
  const links = [
    { 
      name: "x", 
      href: "https://x.com/_martinsit",
      icon: Twitter
    },
    { 
      name: "linkedin", 
      href: "https://www.linkedin.com/in/martin-sit/",
      icon: Linkedin
    },
    { 
      name: "github", 
      href: "https://github.com/martin226",
      icon: Github
    },
    { 
      name: "resume", 
      href: "/resume.pdf",
      icon: FileText
    },
    { 
      name: "email", 
      href: "mailto:martinsit288@gmail.com",
      icon: Mail
    },
    { 
      name: "</>", 
      href: "https://github.com/martin226/v2"
    },
  ];

  return (
    <footer className={`flex flex-col gap-4 ${className}`}>
      <hr className="border-b border-neutral-200" />
      <div className="flex-col sm:flex-row flex justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex items-center hover:text-neutral-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon && (
                <>
                  <link.icon className="w-5 h-5 transition-transform duration-200 ease-out group-hover:scale-110" />
                  <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out">
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
          <a href="https://cs.uwatering.com/#https://martinsit.ca/?nav=prev">
            ←
          </a>
          <a
            href="https://cs.uwatering.com/#https://martinsit.ca/"
            target="_blank"
          >
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              style={{ width: "24px", height: "auto", opacity: 0.8 }}
            />
          </a>
          <a href="https://cs.uwatering.com/#https://martinsit.ca/?nav=next">
            →
          </a>
        </div>
      </div>
      <p>{new Date().getFullYear()} &copy; Martin Sit</p>
    </footer>
  );
}
