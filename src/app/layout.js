import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ThemeProvider from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Sit",
  metadataBase: new URL("https://martinsit.ca"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <ThemeProvider>
          <main className="flex justify-center bg-stone-100 dark:bg-stone-900 min-h-screen selection:bg-yellow-200 dark:selection:bg-yellow-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 text-neutral-500 dark:text-neutral-400 font-[380] md:mt-[60px]">
              <Header />
              {children}
              <Footer />
            </div>
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-ZVLSZR04HM" />
    </html>
  );
}
