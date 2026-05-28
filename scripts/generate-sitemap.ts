import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://darkstack7.com"

interface SitemapEntry {
  path: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services/security-assessments-consulting", changefreq: "monthly", priority: "0.8" },
  { path: "/services/penetration-testing", changefreq: "monthly", priority: "0.8" },
  { path: "/services/CISO", changefreq: "monthly", priority: "0.8" },
  { path: "/services/IR", changefreq: "monthly", priority: "0.8" },
  { path: "/services/insiderthreat", changefreq: "monthly", priority: "0.8" },
  { path: "/services/tabletop_exercises", changefreq: "monthly", priority: "0.8" },
  { path: "/services/solution-engineering", changefreq: "monthly", priority: "0.8" },
  { path: "/services/training-keynotes", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/thank-you", changefreq: "yearly", priority: "0.3" },
  { path: "/media", changefreq: "monthly", priority: "0.7" },
  { path: "/media/news", changefreq: "weekly", priority: "0.7" },
  { path: "/podcast", changefreq: "weekly", priority: "0.8" },
  { path: "/podcast/guest", changefreq: "monthly", priority: "0.6" },
]

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  )

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length} entries)`)
