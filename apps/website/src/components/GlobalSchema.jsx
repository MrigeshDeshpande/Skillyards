export const globalSchema = {
    "@context": "https://schema.org",
    "@type": ["WebSite", "EducationalOrganization", "LocalBusiness"],
    "name": "SkillYards | Learn, Train & Certify in Agra, India",
    "url": "https://www.skillyards.in",
    "description": "SkillYards is a next-generation learning and certification platform based in Agra, India. We empower students, professionals, and institutions with modern skill development, industry-aligned training, and verified certifications.",
    "image": "https://www.skillyards.in/cover.jpg",
    "logo": {
        "@type": "ImageObject",
        "url": "https://www.skillyards.in/images/logo.png",
        "width": 512,
        "height": 512
    },
    "publisher": {
        "@type": "Organization",
        "name": "SkillYards Technologies",
        "url": "https://www.skillyards.in",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.skillyards.in/logo.svg",
            "width": 512,
            "height": 512
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 9897-000-000",
            "contactType": "support",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        }
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near OPJS Campus, Dayalbagh",
        "addressLocality": "Agra",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "282005",
        "addressCountry": "IN"
    },
    "sameAs": [
        "https://www.facebook.com/skillyards",
        "https://www.linkedin.com/company/skillyards",
        "https://www.instagram.com/skillyards",
        "https://www.twitter.com/skillyards",
        "https://www.youtube.com/@skillyards"
    ],
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.skillyards.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};
