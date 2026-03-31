import { redirect } from "next/navigation";

export default async function TestStartPage({ searchParams }) {
    const params = await searchParams; 

    const leadId = params?.leadId;

    if (!leadId) {
        redirect("/10-minutes-test");
    }

    let lead = null;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/test/validate?leadId=${leadId}`,
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
            <div className="text-center max-w-md">
                <h1 className="text-2xl font-bold mb-4">
                    Test Ready 🚀
                </h1>

                <p className="text-gray-600 mb-2">
                    Welcome, <strong>{lead.name}</strong>
                </p>

                <p className="text-sm text-gray-500">
                    Your test session is validated. You can now begin.
                </p>
            </div>
        </div>
    );
}