import Link from "./Link";
import Projects from "./Projects";

export default function About({ projects }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-neutral-700 font-semibold">martin sit</h1>
      <p>CS @ University of Waterloo.</p>
      <p>
        Previously, I worked as an ML Research Intern at{" "}
        <Link href="https://sunnybrook.ca/research/">
          Sunnybrook Research Institute
        </Link>
        , building deep learning models to accelerate focused ultrasound
        treatment monitoring.
      </p>
      <p>
        Before that, I was a Research Intern at the University of Waterloo under
        the guidance of{" "}
        <Link href="https://cs.uwaterloo.ca/~dbarrada/">
          Professor Diogo Barradas
        </Link>
        , building systems to advance censorship-resistant Internet
        communications.
      </p>
      <p>
        In high school, I led the{" "}
        <Link href="https://app.staugustinechs.ca">App Development Team</Link>{" "}
        and grew our mobile app to hundreds of monthly active users. I developed
        our high school's <Link href="https://staugustinechs.ca">website</Link>{" "}
        (and our{" "}
        <Link href="https://app.staugustinechs.ca">mobile app website</Link>{" "}
        too).
      </p>
      <h2 className="text-neutral-700 font-medium">projects</h2>
      <Projects projects={projects} className="ml-6" />
      <p>
        You can find more of my work{" "}
        <Link href="https://github.com/martin226?tab=repositories&q=&type=source">
          here
        </Link>
        .
      </p>
    </div>
  );
}
