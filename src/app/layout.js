import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martin Sit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center bg-stone-100 min-h-screen selection:bg-yellow-200">
          <div className="flex flex-col gap-4 md:max-w-[500px] m-6 md:m-20 text-neutral-500 font-[380] md:mt-[100px] lg:mt-[180px]">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
