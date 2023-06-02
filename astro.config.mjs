import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
		rehypePlugins: [
			rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap'
        }
      ]
		]
	}
});
