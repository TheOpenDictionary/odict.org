import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = async ({ redirect }) => {
  return redirect("/docs/getting-started", 307);
};
