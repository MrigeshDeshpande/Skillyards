import { BASE_URL, STATIC_SITEMAP_ROUTES, LEADERS } from "@/lib/sitemap-routes";

export async function GET() {
    const now = new Date().toISOString();

    const urls = [
        ...STATIC_SITEMAP_ROUTES.map((route) => ({
            loc: `${BASE_URL}${route.path}`,
            lastmod: now,
            priority: route.priority ?? 0.8,
        })),
        ...LEADERS.map((leader) => ({
            loc: `${BASE_URL}/team/${leader.username}`,
            lastmod: now,
            priority: 0.9,
        })),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            (url) => `
    <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
        <priority>${url.priority}</priority>
    </url>`
        )
        .join("")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
