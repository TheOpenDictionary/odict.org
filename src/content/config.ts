import { z, defineCollection } from "astro:content";

const docCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  docs: docCollection,
};
