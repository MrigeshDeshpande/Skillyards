/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    reactCompiler: false,
    async headers() {
        return [
            {
                source: "/sw.js",
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/javascript; charset=utf-8",
                    },
                    {
                        key: "Service-Worker-Allowed",
                        value: "/",
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "admin.skillyards.in",
                pathname: "/storage/**",
            },
            {
                protocol: "https",
                hostname: "admin.skillyards.in",
                pathname: "/images/**",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/images/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/about-us',
                destination: '/about',
                permanent: true, // 301
            },
            {
                source: '/contact-us',
                destination: '/contact',
                permanent: true, // 301
            },
            {
                source: '/courses',
                destination: '/programs',
                permanent: true, // 301
            },
            {
                source: '/blogs',
                destination: '/blog',
                permanent: true, // 301
            },
            {
                source: '/reviews',
                destination: '/testimonials',
                permanent: true, // 301
            },
            {
                source: '/terms-and-conditions',
                destination: '/terms-of-service',
                permanent: true, // 301
            },
            {
                source: '/gallery/photos',
                destination: '/gallery/images',
                permanent: true, // 301
            },
        ];
    },
};

export default nextConfig;
