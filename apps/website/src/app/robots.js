export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: "/admin"
            },
        ],
        sitemap: "https://www.skillyards.in/sitemap.xml",
    };
}
