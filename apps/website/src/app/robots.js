export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/_next/",
                    "/api/",
                ],
            },
        ],
        sitemap: "https://skillyards.in/sitemap.xml",
    };
}