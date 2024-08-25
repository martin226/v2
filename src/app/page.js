import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const socials = [
    { name: "linkedin", href: "https://www.linkedin.com/in/martin-sit/" },
    { name: "github", href: "https://github.com/martin226" },
    { name: "resume", href: "/resume.pdf" },
    { name: "email", href: "mailto:martinsit288@gmail.com" },
  ];

  const projects = [
    {
      name: "LiteNet",
      href: "https://github.com/martin226/litenet",
      description:
        "a C++ neural network framework built from scratch with 0 external dependencies.",
    },
    {
      name: "Sensai",
      href: "https://github.com/martin226/sensai",
      description:
        "a workout platform that uses computer vision to provide you with real-time suggestions and analytics.",
    },
    {
      name: "Uptone",
      href: "https://github.com/martin226/uptone",
      description:
        "a browser extension that protects users from hate speech on Twitter/X via a CNN built for sentiment analysis.",
    },
    {
      name: "Credibility",
      href: "https://github.com/martin226/credibility",
      description:
        "a research tool that uses LLMs and key metrics to assess the credibility of websites.",
    },
  ];

  return (
    <main className="flex justify-center bg-stone-100 min-h-screen selection:bg-yellow-200">
      <div className="flex flex-col gap-4 md:max-w-[500px] m-6 md:m-20 text-neutral-500 font-[380] md:mt-[100px] lg:mt-[180px]">
        <About projects={projects} />
        <Footer socials={socials} />
      </div>
    </main>
  );
}
