import HorizontalNav from "./HorizontalNav";

export default function Footer({ className }) {
  const links = [
    { name: "linkedin", href: "https://www.linkedin.com/in/martin-sit/" },
    { name: "github", href: "https://github.com/martin226" },
    { name: "resume", href: "/resume.pdf" },
    { name: "email", href: "mailto:martinsit288@gmail.com" },
    { name: "</>", href: "https://github.com/martin226/v2" },
  ];
  return (
    <footer className={`flex flex-col gap-4 ${className}`}>
      <hr className="border-b border-neutral-200" />
      <div className="flex-col sm:flex-row flex justify-between gap-4">
        <HorizontalNav links={links} />
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
