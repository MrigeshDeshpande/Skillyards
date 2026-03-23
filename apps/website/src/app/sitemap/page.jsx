import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildSEO } from "@/lib/seo/buildSEO";
import {
  BASE_URL,
  STATIC_SITEMAP_ROUTES,
  LEADERS,
} from "@/lib/sitemap-routes";

export const metadata = buildSEO({
  title: "HTML Sitemap | SkillYards",
  description:
    "Browse the complete HTML sitemap of SkillYards with quick access to all important pages.",
  path: "/sitemap",
  keywords: [
    "SkillYards sitemap",
    "HTML sitemap SkillYards",
    "website structure SkillYards",
    "all pages SkillYards",
  ],
  ogImage: "/images/opengraph/sitemap-og.jpg",
});

export default function SitemapPage() {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = groupBySection(STATIC_SITEMAP_ROUTES);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <Breadcrumbs />

      <h1 className="text-3xl font-bold mt-4">HTML Sitemap</h1>
      <p className="text-gray-600 mt-2">
        Last updated on {lastUpdated}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {Object.entries(sections).map(([section, routes]) => (
          <div key={section}>
            <h2 className="text-lg font-semibold mb-3">
              {section}
            </h2>
            <ul className="space-y-2">
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-lg font-semibold mb-3">
            Leadership
          </h2>
          <ul className="space-y-2">
            {LEADERS.map((leader) => (
              <li key={leader.username}>
                <Link
                  href={`/team/${leader.username}`}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  {leader.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SitemapSchema />
    </section>
  );
}

/* ---------------- Helpers ---------------- */

function groupBySection(routes) {
  return routes.reduce((acc, route) => {
    acc[route.section] ||= [];
    acc[route.section].push(route);
    return acc;
  }, {});
}

function SitemapSchema() {
  const items = STATIC_SITEMAP_ROUTES.map((route, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: route.label,
    url: `${BASE_URL}${route.path}`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "SkillYards HTML Sitemap",
          itemListElement: items,
        }),
      }}
    />
  );
}