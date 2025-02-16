import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Sit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center bg-stone-100 min-h-screen selection:bg-yellow-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="flex flex-col gap-4 w-full md:max-w-[500px] m-6 md:m-20 text-neutral-500 font-[380] md:mt-[60px]">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
        <CommandPalette />
      </body>
    </html>
  );
}
