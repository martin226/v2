import Socials from "./Socials";

export default function Footer({ className, socials }) {
  return (
    <footer className={`flex flex-col gap-4 ${className}`}>
      <hr className="border-b border-neutral-200" />
      <Socials socials={socials} />
      <p>{new Date().getFullYear()} &copy; Martin Sit</p>
    </footer>
  );
}
