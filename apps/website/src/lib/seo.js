import { commonMetadata } from '@/components/metaDataTemplate';

export function withPageSEO({
                                title,
                                description,
                                canonical,
                                keywords = [],
                                ogImage,
                                twitterImage,
                            }) {
    return {
        ...commonMetadata,

        // Same title used everywhere
        title: {
            template: commonMetadata.title.template,
            default: title,
        },

        // Same description for web, OG & Twitter
        description,

        keywords: [...keywords, ...commonMetadata.keywords],

        alternates: {
            ...commonMetadata.alternates,
            canonical,
        },

        openGraph: {
            ...commonMetadata.openGraph,
            title,
            description,
            url: canonical,
            images: [
                {
                    url:
                        ogImage ??
                        commonMetadata.openGraph.images?.[0]?.url,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            ...commonMetadata.twitter,
            title,
            description,
            images: [
                {
                    url:
                        twitterImage ??
                        commonMetadata.twitter.images?.[0]?.url,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    };
}
