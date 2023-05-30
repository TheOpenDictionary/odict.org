import type { MarkdownInstance } from "astro";
import { basename, dirname } from "node:path";

export function getSlug(doc: MarkdownInstance<Record<string, any>>) {
  const filename = basename(doc.file, ".md");
  const directory = dirname(doc.file);

  let slug = basename(directory);

  if (filename !== "index") {
    slug += `/${filename}`;
  }

  return slug;
}
