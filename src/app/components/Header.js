"use client";

import HorizontalNav from "./HorizontalNav";
import { usePathname } from "next/navigation";
import Link from "./Link";
import { useEffect, useState } from "react";
import useModifierKey from "../hooks/useModifierKey";
import useMobileDevice from "../hooks/useMobileDevice";
import CurvedArrow from "./CurvedArrow";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function Header({ className }) {
  const pathname = usePathname();
  const [isMac, setIsMac] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const isModifierPressed = useModifierKey();
  const isMobileDevice = useMobileDevice();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
    const hasOpenedPalette = localStorage.getItem('hasOpenedCommandPalette');
    setShowArrow(!hasOpenedPalette);

    // Listen for command palette opened event
    const handlePaletteOpened = () => setShowArrow(false);
    window.addEventListener('command-palette-opened', handlePaletteOpened);
    return () => window.removeEventListener('command-palette-opened', handlePaletteOpened);
  }, []);

  const openCommandPalette = () => {
    setShowArrow(false);
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
      <h1 className="text-neutral-700 dark:text-neutral-300 font-semibold">
        <Link href="/" isNextLink={true}>martin sit</Link>
      </h1>
      <div className="flex items-center gap-6">
        <HorizontalNav links={links} />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        {!isMobileDevice && (
          <div className="relative">
            {showArrow && <CurvedArrow className="hidden lg:block absolute -top-10 -right-28" />}
            <button
              onClick={openCommandPalette}
              className="hidden sm:flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 bg-stone-50 dark:bg-stone-800 px-2 py-1 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700 hover:border-stone-300 dark:hover:border-stone-600 transition-colors duration-200"
            >
              <span className={`flex items-center ${isModifierPressed ? 'opacity-0' : 'opacity-100'}`}>
                <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 font-mono">
                  {isMac ? '⌘' : 'ctrl'}
                </kbd>
                <span>+</span>
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 font-mono">
                K
              </kbd>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
