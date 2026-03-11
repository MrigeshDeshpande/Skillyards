import { Suspense } from "react";
import UnsubscribeClient from "./UnsubscribeClient";
import {withPageSEO} from "@/lib/seo";

export const dynamic = "force-dynamic"; // prevents static prerender

export const metadata = withPageSEO({
    title: "Unsubscribe from Emails",
    description:
        "Manage your email preferences on SkillYards. Unsubscribe from newsletters or promotional emails anytime.",
    canonical: "https://www.skillyards.in/unsubscribe",
    keywords: [
        "unsubscribe SkillYards",
        "email preferences",
        "newsletter unsubscribe",
        "SkillYards emails",
        "stop emails",
    ],

    // Optional dedicated images (can reuse default if you want)
    ogImage: "",
    twitterImage: "",
});

export default function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <UnsubscribeClient />
        </Suspense>
    );
}

function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-sm text-gray-500">Loading unsubscribe page…</p>
        </div>
    );
}
