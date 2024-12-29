import fs from "fs";
import path from "path";
import Link from "../components/Link";

export default async function Writing() {
  // Path to the writing directory
  const postsDirectory = path.join(process.cwd(), "src/app/writing");

  // Read all entries (files and folders) in the `writing` directory
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // Filter for directories only
  const folderNames = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  // For each folder, dynamically import the `page.mdx` file and extract its meta
  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const { meta } = await import(`../writing/${folderName}/page.mdx`);
      return { ...meta, slug: folderName }; // Use folder name as the slug
    })
  );

  // Sort posts by date (most recent first)
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
      <ul className="list-disc list-inside space-y-2">
        {posts.map(({ title, date, slug }) => (
          <li className="flex justify-between" key={slug}>
            <span className="font-semibold">
              <Link href={`/writing/${slug}`} isNextLink={true}>
                {title}
              </Link>
            </span>
            <time>
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </li>
        ))}
      </ul>
    </>
  );
}
