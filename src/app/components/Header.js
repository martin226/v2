"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";
import Link from "./Link";

export default function Header({ className }) {
  const pathname = usePathname();
  const links = [
    {
      name: "about",
      href: "/",
      isActive: pathname === "/",
      isNextLink: true,
    },
    {
      name: "projects",
      href: "/projects",
      isActive: pathname === "/projects",
      isNextLink: true,
    },
    {
      name: "writing",
      href: "/writing",
      isActive: pathname.startsWith("/writing"),
      isNextLink: true,
    },
  ];
  return (
    <div className="flex justify-between">
      <h1 className="text-neutral-700 font-semibold"><Link href="/" isNextLink={true}>martin sit</Link></h1>
      <HorizontalNav links={links} />
    </div>
  );
}
