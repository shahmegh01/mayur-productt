import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Sitemap URLs must be absolute, so take the address the site is being served from
        const BASE_URL = new URL(request.url).origin;
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/products", priority: "0.9" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
          ),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
