import Link from "../components/Link";
import ProjectSearch from "../components/ProjectSearch";

export default function Projects() {
  return (
    <>
      <ProjectSearch />
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
