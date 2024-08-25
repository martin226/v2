import HorizontalNav from "./HorizontalNav";

export default function Footer({ className }) {
  const links = [
    { name: "linkedin", href: "https://www.linkedin.com/in/martin-sit/" },
    { name: "github", href: "https://github.com/martin226" },
    { name: "resume", href: "/resume.pdf" },
    { name: "email", href: "mailto:martinsit288@gmail.com" },
  ];
  return (
    <footer className={`flex flex-col gap-4 ${className}`}>
      <hr className="border-b border-neutral-200" />
      <HorizontalNav links={links} />
      <p>{new Date().getFullYear()} &copy; Martin Sit</p>
    </footer>
  );
}
