import { Suspense } from "react";
import UnsubscribeClient from "./UnsubscribeClient";
import { buildSEO } from "@/lib/seo/buildSEO";

export const dynamic = "force-dynamic";

export const metadata = buildSEO({
  title: "Unsubscribe from Emails",
  description:
    "Manage your email preferences on SkillYards. Unsubscribe from newsletters or promotional emails anytime.",
  path: "/unsubscribe",
  keywords: [
    "unsubscribe SkillYards",
    "email preferences",
    "newsletter unsubscribe",
    "SkillYards emails",
    "stop emails",
  ],
  // no ogImage → fallback will be used
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