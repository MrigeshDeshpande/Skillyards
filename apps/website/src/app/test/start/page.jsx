import { redirect } from "next/navigation";
import TopicSelector from "@/components/testpage/TopicSelector";

export default async function TestStartPage({ searchParams }) {
    const params = await searchParams; 

    const leadId = params?.leadId;

    if (!leadId) {
        redirect("/10-minutes-test");
    }

    let lead = null;

    try {
        const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
        const res = await fetch(
            `${BASE_URL}/api/test/validate?leadId=${leadId}`,
            { cache: "no-store" }
        );

        if (res.ok) {
            const data = await res.json();
            lead = data?.lead;
        }
    } catch (err) {
        console.error("Validation fetch failed:", err);
    }

    if (!lead) {
        redirect("/10-minutes-test");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center max-w-md w-full px-4">
                <h1 className="text-2xl font-bold mb-4">
                    Test Ready 🚀
                </h1>
                
                <TopicSelector leadId={lead.id} />
                
            </div>
        </div>
    );
}