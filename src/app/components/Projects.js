export default function Projects({ className, projects }) {
  return (
    <ul className={`list-disc list-outside ${className}`}>
      {projects.map((project, index) => (
        <li key={index}>
          <a
            href={project.href}
            target="_blank"
            className="underline decoration-neutral-400 text-neutral-700 hover:text-neutral-400"
          >
            {project.name}
          </a>
          , {project.description}
        </li>
      ))}
    </ul>
  );
}
