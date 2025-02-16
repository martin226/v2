"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter, usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, FileText, Home, FolderGit2, PenLine, Github, Linkedin, ExternalLink, Twitter, Mail, CodeXml, Lightbulb } from "lucide-react";
import useMobileDevice from "../hooks/useMobileDevice";

const projects = [
  {
    title: "Make It Jake's",
    href: "https://jakesresu.me",
    shortcut: "1",
  },
  {
    title: "Twirl",
    href: "https://dorahacks.io/buidl/21695",
    shortcut: "2",
  },
  {
    title: "Layoff Evaders",
    href: "https://devpost.com/software/layoff-evaders",
    shortcut: "3",
  },
  {
    title: "EcoRewards",
    href: "https://devpost.com/software/ecorewards-t0qw26",
    shortcut: "4",
  },
  {
    title: "LiteNet",
    href: "https://github.com/martin226/litenet",
    shortcut: "5",
  },
];

const posts = [
  {
    title: "Reflecting on 2024",
    href: "/writing/reflecting-on-2024",
    shortcut: "1",
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const [isModifierPressed, setIsModifierPressed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobileDevice = useMobileDevice();

  // Detect OS on mount
  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes('mac'));
  }, []);

  // Handle opening the palette and setting localStorage
  const handleOpen = () => {
    setOpen(true);
    localStorage.setItem('hasOpenedCommandPalette', 'true');
    window.dispatchEvent(new CustomEvent('command-palette-opened'));
  };

  // Track modifier key state
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.shiftKey) {
        setIsModifierPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (!e.shiftKey) {
        setIsModifierPressed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('blur', () => setIsModifierPressed(false));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', () => setIsModifierPressed(false));
    };
  }, [open]);

  // Listen for custom event to open palette
  useEffect(() => {
    const handleCustomOpen = () => handleOpen();
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, []);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!open) {
          handleOpen();
        } else {
          setOpen(false);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open]);

  // Get current section info
  const getCurrentSection = () => {
    if (pathname === "/") {
      return {
        name: "Home",
        icon: <Home className="h-5 w-5" />,
        description: "About me and what I'm up to",
      };
    } else if (pathname === "/projects") {
      return {
        name: "Projects",
        icon: <FolderGit2 className="h-5 w-5" />,
        description: "Things I've built",
      };
    } else if (pathname.startsWith("/writing")) {
      return {
        name: "Writing",
        icon: <PenLine className="h-5 w-5" />,
        description: "My thoughts and reflections",
      };
    }
  };

  // Handle keyboard shortcuts when palette is open
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      // Only handle shift + key combinations
      if (!e.shiftKey) return;
      
      const key = e.key.toLowerCase();
      
      if (key === "h") {
        e.preventDefault();
        runCommand(() => router.push("/"));
      } else if (key === "p") {
        e.preventDefault();
        runCommand(() => router.push("/projects"));
      } else if (key === "w") {
        e.preventDefault();
        runCommand(() => router.push("/writing"));
      } else if (key === "x") {
        e.preventDefault();
        runCommand(() => window.open("https://x.com/_martinsit", "_blank"));
      } else if (key === "l") {
        e.preventDefault();
        runCommand(() => window.open("https://www.linkedin.com/in/martin-sit/", "_blank"));
      } else if (key === "g") {
        e.preventDefault();
        runCommand(() => window.open("https://github.com/martin226", "_blank"));
      } else if (key === "r") {
        e.preventDefault();
        runCommand(() => window.open("/resume.pdf", "_blank"));
      } else if (key === "e") {
        e.preventDefault();
        runCommand(() => window.open("mailto:martinsit288@gmail.com", "_blank"));
      } else if (key === "c") {
        e.preventDefault();
        runCommand(() => window.open("https://github.com/martin226/v2", "_blank"));
      } else if (pathname === "/projects") {
        // Check for Digit1 through Digit5
        const match = e.code.match(/^Digit([1-5])$/);
        if (match) {
          e.preventDefault();
          const num = parseInt(match[1]);
          const project = projects[num - 1];
          if (project) {
            runCommand(() => window.open(project.href, "_blank"));
          }
        }
      } else if (pathname.startsWith("/writing")) {
        // Check for Digit1
        if (e.code === "Digit1") {
          e.preventDefault();
          const post = posts[0];
          if (post) {
            runCommand(() => router.push(post.href));
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, router, pathname]);

  const runCommand = (command) => {
    setOpen(false);
    command();
  };

  // If mobile device, don't render the command palette
  if (isMobileDevice) {
    return null;
  }

  const Shortcut = ({ children }) => (
    <div className="flex items-center gap-1 ml-auto text-xs text-stone-500">
      {!isModifierPressed && (
        <>
          <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">
            shift
          </kbd>
          <span>+</span>
        </>
      )}
      <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">
        {children}
      </kbd>
    </div>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in z-40" />
        <Dialog.Content className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[500px] p-3 animate-slide-down z-50">
          <Command 
            className="w-full rounded-xl border border-stone-300 bg-white shadow-2xl overflow-hidden"
            loop={true}
            shouldFilter={true}
            onClick={(e) => {
              // Get the search input element
              const input = e.currentTarget.querySelector('input');
              if (input) {
                input.focus();
              }
            }}
          >
            {getCurrentSection() && (
              <div className="px-5 py-6 border-b border-stone-200 flex items-center gap-3">
                <div className="p-1.5 bg-stone-100 rounded-lg">
                  {getCurrentSection().icon}
                </div>
                <div className="flex-1">
                  <h2 className="font-medium text-stone-900">{getCurrentSection().name}</h2>
                  <p className="text-sm text-stone-500">{getCurrentSection().description}</p>
                </div>
              </div>
            )}
            <div className="flex items-center border-b border-stone-300 px-4 py-4">
              <Search className="h-4 w-4 text-stone-500" />
              <Command.Input
                placeholder="Search for actions..."
                className="flex-1 w-full bg-transparent px-3 text-sm text-stone-800 placeholder:text-stone-500 focus:outline-none"
                onBlur={(e) => {
                  // Only close if clicking outside the command palette dialog
                  const commandDialog = e.currentTarget.closest('[role="dialog"]');
                  if (!commandDialog?.contains(e.relatedTarget)) {
                    setOpen(false);
                  }
                }}
                autoFocus
              />
            </div>
            <Command.List className="max-h-[300px] overflow-y-auto px-3 py-4">
              {pathname === "/projects" && (
                <Command.Group heading="Featured Projects" className="px-2">
                  {projects.map((project) => (
                    <Command.Item
                      key={project.href}
                      value={project.title.toLowerCase()}
                      onSelect={() => runCommand(() => window.open(project.href, "_blank"))}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="flex-1">{project.title}</span>
                      <Shortcut>{project.shortcut}</Shortcut>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {pathname.startsWith("/writing") && (
                <Command.Group heading="Blog Posts" className="px-2">
                  {posts.map((post) => (
                    <Command.Item
                      key={post.href}
                      value={post.title.toLowerCase()}
                      onSelect={() => runCommand(() => router.push(post.href))}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="flex-1">{post.title}</span>
                      <Shortcut>{post.shortcut}</Shortcut>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              <Command.Group heading="Navigation" className="px-2">
                <Command.Item
                  value="home"
                  onSelect={() => runCommand(() => router.push("/"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <Home className="h-4 w-4" />
                  <span className="flex-1">Go to Home</span>
                  <Shortcut>H</Shortcut>
                </Command.Item>
                <Command.Item
                  value="projects"
                  onSelect={() => runCommand(() => router.push("/projects"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <FolderGit2 className="h-4 w-4" />
                  <span className="flex-1">Go to Projects</span>
                  <Shortcut>P</Shortcut>
                </Command.Item>
                <Command.Item
                  value="writing"
                  onSelect={() => runCommand(() => router.push("/writing"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <PenLine className="h-4 w-4" />
                  <span className="flex-1">Go to Writing</span>
                  <Shortcut>W</Shortcut>
                </Command.Item>
              </Command.Group>

              <Command.Group heading="Links" className="px-2">
                <Command.Item
                  value="twitter"
                  onSelect={() => runCommand(() => window.open("https://x.com/_martinsit", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="flex-1">X Profile</span>
                  <Shortcut>X</Shortcut>
                </Command.Item>
                <Command.Item
                  value="linkedin"
                  onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/martin-sit/", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="flex-1">LinkedIn Profile</span>
                  <Shortcut>L</Shortcut>
                </Command.Item>
                <Command.Item
                  value="github"
                  onSelect={() => runCommand(() => window.open("https://github.com/martin226", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <Github className="h-4 w-4" />
                  <span className="flex-1">GitHub Profile</span>
                  <Shortcut>G</Shortcut>
                </Command.Item>
                <Command.Item
                  value="resume"
                  onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <FileText className="h-4 w-4" />
                  <span className="flex-1">Resume</span>
                  <Shortcut>R</Shortcut>
                </Command.Item>
                <Command.Item
                  value="email"
                  onSelect={() => runCommand(() => window.open("mailto:martinsit288@gmail.com", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <Mail className="h-4 w-4" />
                  <span className="flex-1">Email</span>
                  <Shortcut>E</Shortcut>
                </Command.Item>
                <Command.Item
                  value="source"
                  onSelect={() => runCommand(() => window.open("https://github.com/martin226/v2", "_blank"))}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 rounded hover:bg-stone-100 cursor-pointer data-[selected=true]:bg-stone-100"
                >
                  <CodeXml className="h-4 w-4" />
                  <span className="flex-1">Website Repository</span>
                  <Shortcut>C</Shortcut>
                </Command.Item>
              </Command.Group>
            </Command.List>
            <div className="border-t border-stone-200 px-3 py-4">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-3 w-3" />
                  <span>Type</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">↵</kbd>
                  <span>to select</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>Press</span>
                  <kbd className="px-1.5 py-0.5 rounded bg-stone-100 font-mono">esc</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 