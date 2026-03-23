import { buildSEO } from "@/lib/seo/buildSEO";
import PageHero from "@/components/PageHero";

export const metadata = buildSEO({
    title: "Refund Policy",
    description:
        "Review SkillYards’ Refund Policy to understand eligibility, timelines, and conditions for refunds on courses, subscriptions, and training programs.",
    path: "/refund-policy",
    keywords: [
        "SkillYards Refund Policy",
        "Refund Policy SkillYards",
        "Course refund terms",
        "Online training refunds",
        "EdTech refund policy India",
        "SkillYards cancellations",
    ],
    ogImage: "/images/opengraph/refund-policy-og.jpg",
});

export default function RefundPolicyPage() {
    return (
        <>
            <PageHero
                title="Refund Policy"
                description="This Refund Policy explains the eligibility, process, and conditions under which refunds may be requested for our courses, services, or digital products."
            />

            <div className="min-h-screen w-full bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
                <section className="max-w-5xl mx-auto px-6 py-20">
                    <div className="mb-14">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Refund & Cancellation Policy
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
                            This Refund & Cancellation Policy outlines the terms under which SkillYards
                            processes refunds, cancellations, and fee adjustments for its programs,
                            courses, and services.
                        </p>
                        <p className="mt-4 text-sm text-neutral-500">
                            Last updated: {new Date().toLocaleDateString("en-IN")}
                        </p>
                    </div>

                    <div className="space-y-12 leading-relaxed text-[17px]">
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">1. General Policy</h2>
                            <p>
                                SkillYards offers digital education programs, training services, and learning
                                resources. By enrolling in any course or program, you acknowledge and agree
                                to the terms outlined in this Refund & Cancellation Policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">2. Course Enrollment & Access</h2>
                            <p>
                                Once payment is successfully completed and access to course materials,
                                live sessions, or learning resources is provided, the enrollment is considered
                                confirmed.
                            </p>
                            <p className="mt-3">
                                Due to the nature of digital content and limited-seat programs, refunds may
                                not be available once access has been granted, except in specific cases
                                mentioned below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">3. Refund Eligibility</h2>
                            <p>
                                Refunds may be considered under the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Duplicate payment made for the same course or program</li>
                                <li>
                                    Technical issues on our platform that prevent access to the purchased
                                    content and cannot be resolved by our support team
                                </li>
                                <li>Cancellation of a program or batch by SkillYards</li>
                            </ul>
                            <p className="mt-4">
                                Any approved refund will be processed after verification by our team.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">4. Non-Refundable Cases</h2>
                            <p>
                                Refunds will <strong>not</strong> be provided in the following cases:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Change of mind after enrollment</li>
                                <li>Partial completion of a course or program</li>
                                <li>Failure to attend live sessions or use course materials</li>
                                <li>Delays caused by personal, academic, or professional reasons</li>
                                <li>Violation of SkillYards’ Terms of Service or Code of Conduct</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">5. Cancellation by SkillYards</h2>
                            <p>
                                SkillYards reserves the right to cancel or reschedule any course, batch,
                                or training program due to unforeseen circumstances. In such cases,
                                learners may be offered:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Enrollment in an alternative batch or program, or</li>
                                <li>A full or partial refund, as applicable</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">6. Refund Processing Time</h2>
                            <p>
                                Approved refunds will be processed using the original payment method.
                                Refund timelines may vary depending on the payment gateway or bank,
                                typically ranging from <strong>7 to 10 business days</strong>.
                            </p>
                            <p className="mt-3">
                                SkillYards is not responsible for delays caused by banks or third-party
                                payment providers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">7. How to Request a Refund</h2>
                            <p>
                                To request a refund, please contact our support team with the following
                                details:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Registered name and email address</li>
                                <li>Course or program name</li>
                                <li>Payment reference or transaction ID</li>
                                <li>Reason for the refund request</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">8. Policy Updates</h2>
                            <p>
                                SkillYards reserves the right to update or modify this Refund & Cancellation
                                Policy at any time. Changes will be effective immediately upon posting
                                on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
                            <p>
                                For any questions regarding refunds, cancellations, or this policy,
                                please contact us:
                            </p>
                            <div className="mt-4 space-y-1">
                                <p><strong>SkillYards</strong></p>
                                <p>
                                    Email:{" "}
                                    <a
                                        href="mailto:support@skillyards.in"
                                        className="underline hover:text-primary"
                                    >
                                        support@skillyards.in
                                    </a>
                                </p>
                                <p>
                                    Website:{" "}
                                    <a
                                        href="https://www.skillyards.in"
                                        className="underline hover:text-primary"
                                    >
                                        www.skillyards.in
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}