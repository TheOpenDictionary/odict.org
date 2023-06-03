import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://odict.org",
  integrations: [tailwind()],
  build: {
    format: "file",
  },
  markdown: {
    shikiConfig: {
      theme: "nord",
    },
    rehypePlugins: [
      [rehypeExternalLinks, { rel: "noreferrer", target: "_blank" }],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
});
