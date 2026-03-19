// // // /** @type {import('next').NextConfig} */
// // // const nextConfig = {
// // //     /* config options here */
// // //     reactCompiler: false,
// // //     async headers() {
// // //         return [
// // //             {
// // //                 source: "/sw.js",
// // //                 headers: [
// // //                     {
// // //                         key: "Content-Type",
// // //                         value: "application/javascript; charset=utf-8",
// // //                     },
// // //                     {
// // //                         key: "Service-Worker-Allowed",
// // //                         value: "/",
// // //                     },
// // //                 ],
// // //             },
// // //             {
// // //                 source: "/(.*)",
// // //                 headers: [
// // //                     {
// // //                         key: "Content-Security-Policy",
// // //                         value:
// // //                             "default-src 'self'; " +
// // //                             "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: " +
// // //                             "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// // //                             "https://www.googletagmanager.com; " +
// // //                             "frame-src https://disqus.com https://*.disqus.com; " +
// // //                             "connect-src 'self' " +
// // //                             "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// // //                             "https://referrer.disqus.com https://links.services.disqus.com " +
// // //                             "https://www.googletagmanager.com; " +
// // //                             "img-src 'self' data: blob: " +
// // //                             "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// // //                             "https://referrer.disqus.com; " +
// // //                             "style-src 'self' 'unsafe-inline' https://c.disquscdn.com; " +
// // //                             "font-src 'self' data: https://c.disquscdn.com; " +
// // //                             "worker-src 'self' blob:;"
// // //                     },
// // //                 ],
// // //             }
// // //         ];
// // //     },
// // //     images: {
// // //         remotePatterns: [
// // //             {
// // //                 protocol: "https",
// // //                 hostname: "picsum.photos",
// // //             },
// // //             {
// // //                 protocol: "https",
// // //                 hostname: "admin.skillyards.in",
// // //                 pathname: "/storage/**",
// // //             },
// // //             {
// // //                 protocol: "https",
// // //                 hostname: "admin.skillyards.in",
// // //                 pathname: "/images/**",
// // //             },
// // //             {
// // //                 protocol: "https",
// // //                 hostname: "cdn.sanity.io",
// // //                 pathname: "/images/**",
// // //             },
// // //         ],
// // //     },
// // //     async redirects() {
// // //         return [
// // //             {
// // //                 source: '/about-us',
// // //                 destination: '/about',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/contact-us',
// // //                 destination: '/contact',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/courses',
// // //                 destination: '/programs',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/blogs',
// // //                 destination: '/blog',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/reviews',
// // //                 destination: '/testimonials',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/terms-and-conditions',
// // //                 destination: '/terms-of-service',
// // //                 permanent: true, // 301
// // //             },
// // //             {
// // //                 source: '/gallery/photos',
// // //                 destination: '/gallery/images',
// // //                 permanent: true, // 301
// // //             },
// // //         ];
// // //     },
// // // };

// // // export default nextConfig;



// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactCompiler: false,
// //   async headers() {
// //     return [
// //       {
// //         source: "/sw.js",
// //         headers: [
// //           {
// //             key: "Content-Type",
// //             value: "application/javascript; charset=utf-8",
// //           },
// //           {
// //             key: "Service-Worker-Allowed",
// //             value: "/",
// //           },
// //         ],
// //       },
// //       {
// //         source: "/(.*)",
// //         headers: [
// //           {
// //             key: "Content-Security-Policy",
// //             value:
// //               "default-src 'self'; " +
// //                 "http://127.0.0.1.nip.io:3001 " +
// //               "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: " +
// //                 "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// //                 "https://skillyards-blog.disqus.com " +
// //                 "https://www.googletagmanager.com; " +
// //               "frame-src https://disqus.com https://*.disqus.com; " +
// //               "connect-src 'self' " +
// //                 "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// //                 "https://referrer.disqus.com https://links.services.disqus.com " +
// //                 "https://skillyards-blog.disqus.com " +
// //                 "https://www.googletagmanager.com; " +
// //               "img-src 'self' data: blob: " +
// //                 "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
// //                 "https://referrer.disqus.com; " +
// //               "style-src 'self' 'unsafe-inline' https://c.disquscdn.com; " +
// //               "font-src 'self' data: https://c.disquscdn.com; " +
// //               "worker-src 'self' blob:;",
// //           },
// //         ],
// //       },
// //     ];
// //   },
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: "https",
// //         hostname: "picsum.photos",
// //       },
// //       {
// //         protocol: "https",
// //         hostname: "admin.skillyards.in",
// //         pathname: "/storage/**",
// //       },
// //       {
// //         protocol: "https",
// //         hostname: "admin.skillyards.in",
// //         pathname: "/images/**",
// //       },
// //       {
// //         protocol: "https",
// //         hostname: "cdn.sanity.io",
// //         pathname: "/images/**",
// //       },
// //     ],
// //   },
// //   async redirects() {
// //     return [
// //       {
// //         source: "/about-us",
// //         destination: "/about",
// //         permanent: true,
// //       },
// //       {
// //         source: "/contact-us",
// //         destination: "/contact",
// //         permanent: true,
// //       },
// //       {
// //         source: "/courses",
// //         destination: "/programs",
// //         permanent: true,
// //       },
// //       {
// //         source: "/blogs",
// //         destination: "/blog",
// //         permanent: true,
// //       },
// //       {
// //         source: "/reviews",
// //         destination: "/testimonials",
// //         permanent: true,
// //       },
// //       {
// //         source: "/terms-and-conditions",
// //         destination: "/terms-of-service",
// //         permanent: true,
// //       },
// //       {
// //         source: "/gallery/photos",
// //         destination: "/gallery/images",
// //         permanent: true,
// //       },
// //     ];
// //   },
// // };

// // export default nextConfig;


// /** @type {import('next').NextConfig} */

// const isDev = process.env.NODE_ENV === 'development';

// const nextConfig = {
//   reactCompiler: false,

//   async headers() {
//     return [
//       {
//         source: "/sw.js",
//         headers: [
//           {
//             key: "Content-Type",
//             value: "application/javascript; charset=utf-8",
//           },
//           {
//             key: "Service-Worker-Allowed",
//             value: "/",
//           },
//         ],
//       },
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Content-Security-Policy",
//             value: isDev
//               ? ""
//               : "default-src 'self'; " +
//                 "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: " +
//                   "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
//                   "https://skillyards-blog.disqus.com " +
//                   "https://www.googletagmanager.com; " +
//                 "frame-src https://disqus.com https://*.disqus.com; " +
//                 "connect-src 'self' " +
//                   "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
//                   "https://referrer.disqus.com https://links.services.disqus.com " +
//                   "https://skillyards-blog.disqus.com " +
//                   "https://www.googletagmanager.com; " +
//                 "img-src 'self' data: blob: " +
//                   "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
//                   "https://referrer.disqus.com; " +
//                 "style-src 'self' 'unsafe-inline' https://c.disquscdn.com; " +
//                 "font-src 'self' data: https://c.disquscdn.com; " +
//                 "worker-src 'self' blob:;",
//           },
//         ],
//       },
//     ];
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "picsum.photos",
//       },
//       {
//         protocol: "https",
//         hostname: "admin.skillyards.in",
//         pathname: "/storage/**",
//       },
//       {
//         protocol: "https",
//         hostname: "admin.skillyards.in",
//         pathname: "/images/**",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         pathname: "/images/**",
//       },
//     ],
//   },

//   async redirects() {
//     return [
//       {
//         source: "/about-us",
//         destination: "/about",
//         permanent: true,
//       },
//       {
//         source: "/contact-us",
//         destination: "/contact",
//         permanent: true,
//       },
//       {
//         source: "/courses",
//         destination: "/programs",
//         permanent: true,
//       },
//       {
//         source: "/blogs",
//         destination: "/blog",
//         permanent: true,
//       },
//       {
//         source: "/reviews",
//         destination: "/testimonials",
//         permanent: true,
//       },
//       {
//         source: "/terms-and-conditions",
//         destination: "/terms-of-service",
//         permanent: true,
//       },
//       {
//         source: "/gallery/photos",
//         destination: "/gallery/images",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */

console.log("NODE_ENV:", process.env.NODE_ENV);
const nextConfig = {
  reactCompiler: false,

  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';

    const swHeaders = {
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
    };

    const cspHeaders = {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value:
            "default-src 'self'; " +
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: " +
              "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
              "https://skillyards-blog.disqus.com " +
              "https://www.googletagmanager.com; " +
            "frame-src https://disqus.com https://*.disqus.com; " +
            "connect-src 'self' " +
              "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
              "https://referrer.disqus.com https://links.services.disqus.com " +
              "https://skillyards-blog.disqus.com " +
              "https://www.googletagmanager.com; " +
            "img-src 'self' data: blob: " +
              "https://disqus.com https://*.disqus.com https://c.disquscdn.com " +
              "https://referrer.disqus.com; " +
            "style-src 'self' 'unsafe-inline' https://c.disquscdn.com; " +
            "font-src 'self' data: https://c.disquscdn.com; " +
            "worker-src 'self' blob:;",
        },
      ],
    };

    return isDev ? [swHeaders] : [swHeaders, cspHeaders];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "admin.skillyards.in", pathname: "/storage/**" },
      { protocol: "https", hostname: "admin.skillyards.in", pathname: "/images/**" },
      { protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" },
    ],
  },

  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/courses", destination: "/programs", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },
      { source: "/reviews", destination: "/testimonials", permanent: true },
      { source: "/terms-and-conditions", destination: "/terms-of-service", permanent: true },
      { source: "/gallery/photos", destination: "/gallery/images", permanent: true },
    ];
  },
};

export default nextConfig;