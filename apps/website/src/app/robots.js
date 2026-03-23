export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],

        sitemap: "https://www.skillyards.in/sitemap.xml",
    };
}