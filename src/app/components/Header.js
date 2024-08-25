"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";

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
  ];
  return (
    <div className="flex justify-between">
      <h1 className="text-neutral-700 font-semibold">martin sit</h1>
      <HorizontalNav links={links} />
    </div>
  );
}
