import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
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
