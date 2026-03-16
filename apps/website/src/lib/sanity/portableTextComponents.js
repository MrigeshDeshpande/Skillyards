/**
 * portableTextComponents.js
 *
 * Custom PortableText renderer that injects `id` attributes on
 * h2 / h3 headings so the TOC anchor links can scroll to them.
 *
 * Usage:
 *   import { portableTextComponents } from "@/lib/sanity/portableTextComponents";
 *   <PortableText value={post.content} components={portableTextComponents} />
 */

import { slugifyHeading } from "@/lib/sanity/slugifyHeading";

export const portableTextComponents = {
    block: {
        h2: ({ value, children }) => (
            <h2 id={slugifyHeading(value)}>{children}</h2>
        ),
        h3: ({ value, children }) => (
            <h3 id={slugifyHeading(value)}>{children}</h3>
        ),
    },
};