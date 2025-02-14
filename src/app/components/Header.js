"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";
import Link from "./Link";
import { useEffect, useState } from "react";
import useModifierKey from "../hooks/useModifierKey";
import useMobileDevice from "../hooks/useMobileDevice";

export default function Header({ className }) {
  const pathname = usePathname();
  const [isMac, setIsMac] = useState(false);
  const isModifierPressed = useModifierKey();
  const isMobileDevice = useMobileDevice();

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

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
    <div className="flex justify-between items-center">
      <h1 className="text-neutral-700 font-semibold">
        <Link href="/" isNextLink={true}>martin sit</Link>
      </h1>
      <div className="flex items-center gap-6">
        <HorizontalNav links={links} />
        {!isMobileDevice && (
          <button
            onClick={openCommandPalette}
            className="hidden sm:flex items-center gap-1 text-xs text-stone-500 bg-stone-50 px-2 py-1 rounded-lg border border-stone-200 hover:bg-stone-100 hover:border-stone-300 transition-colors duration-200"
          >
            {!isModifierPressed && (
              <>
                <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">
                  {isMac ? '⌘' : 'ctrl'}
                </kbd>
                <span>+</span>
              </>
            )}
            <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">
              K
            </kbd>
          </button>
        )}
      </div>
    </div>
  );
}
