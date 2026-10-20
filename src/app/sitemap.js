import fs from "fs";
import path from "path";

const BASE_URL = "https://martinsit.ca";

export default async function sitemap() {
  const postsDirectory = path.join(process.cwd(), "src/app/writing");
  const folderNames = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts = await Promise.all(
    folderNames.map(async (folderName) => {
      const { meta } = await import(`./writing/${folderName}/page.mdx`);
      return {
        url: `${BASE_URL}/writing/${folderName}`,
        lastModified: new Date(meta.date),
      };
    })
  );

  return [
    { url: BASE_URL },
    { url: `${BASE_URL}/projects` },
    { url: `${BASE_URL}/writing` },
    ...posts,
    { url: `${BASE_URL}/resources` },
  ];
}
