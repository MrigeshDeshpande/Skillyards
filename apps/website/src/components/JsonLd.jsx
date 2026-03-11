"use client";
import Script from "next/script";

export default function JsonLd({ schema, id }) {
    return (
        <Script
            type="application/ld+json"
            id={id}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}