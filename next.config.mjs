import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      [remarkToc, { tight: true, maxDepth: 3 }]
    ],
    rehypePlugins: [rehypePrism, rehypeSlug],
  },
});

export default withMDX(nextConfig);
