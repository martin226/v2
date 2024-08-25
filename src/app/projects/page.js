import Link from "../components/Link";
import Projects from "../components/Projects";

export default function Home() {
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
    <>
      <Projects projects={projects} className="ml-6" />
      <p>
        You can check out the rest of my projects{" "}
        <Link href="https://github.com/martin226?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </>
  );
}
