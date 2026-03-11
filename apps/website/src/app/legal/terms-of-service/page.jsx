import {withPageSEO} from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata = withPageSEO({
    title: 'Terms of Service',
    description:
        'Read SkillYards’ Terms of Service to understand the rules, responsibilities, and conditions for using our website, courses, and training programs.',
    canonical: 'https://www.skillyards.in/terms-of-service',
    keywords: [
        'SkillYards Terms of Service',
        'SkillYards Terms and Conditions',
        'User agreement SkillYards',
        'Online learning terms',
        'EdTech terms India',
        'Course usage policy',
    ],
    ogImage: '/images/opengraph/terms-of-service-og.jpg',
    twitterImage: '/images/opengraph/terms-of-service-twitter.jpg',
});

export default function TermsOfServicePage() {
    return (
        <>
            <PageHero
                title="Terms of Service"
                description="These Terms of Service outline the rules, responsibilities, and conditions that govern your use of our website, products, and services. By accessing or using our platform, you agree to comply with these terms."
            />
            <div className="min-h-screen w-full bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">

                <section className="max-w-5xl mx-auto px-6 py-20">
                    {/* Header */}
                    <div className="mb-14">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
                            These Terms of Service govern your access to and use of the SkillYards website,
                            platform, courses, and services. By using SkillYards, you agree to be bound
                            by these terms.
                        </p>
                        <p className="mt-4 text-sm text-neutral-500">
                            Last updated: {new Date().toLocaleDateString("en-IN")}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 leading-relaxed text-[17px]">
                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                            <p>
                                By accessing or using SkillYards, you confirm that you have read,
                                understood, and agreed to these Terms of Service, along with our
                                Privacy Policy and Refund & Cancellation Policy.
                            </p>
                            <p className="mt-3">
                                If you do not agree with any part of these terms, you should not
                                use our platform or services.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">2. Eligibility</h2>
                            <p>
                                You must be at least 18 years old to create an account or enroll
                                in paid programs on SkillYards. If you are under 18, you may use
                                the platform only with the involvement and consent of a parent
                                or legal guardian.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">3. Account Registration</h2>
                            <p>
                                When creating an account, you agree to provide accurate, current,
                                and complete information. You are responsible for maintaining the
                                confidentiality of your account credentials and for all activities
                                that occur under your account.
                            </p>
                            <p className="mt-3">
                                SkillYards reserves the right to suspend or terminate accounts
                                found to be using false information or engaging in unauthorized activity.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">4. Course Access & Usage</h2>
                            <p>
                                Upon successful payment, SkillYards grants you a limited,
                                non-transferable, and non-exclusive license to access the enrolled
                                course or program for personal learning purposes only.
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Courses may include recorded content, live sessions, projects, and assessments</li>
                                <li>Access duration may vary depending on the program</li>
                                <li>Sharing login credentials or course content is strictly prohibited</li>
                            </ul>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">5. Payments & Fees</h2>
                            <p>
                                All fees displayed on SkillYards are in Indian Rupees (INR), unless
                                otherwise stated. Payments must be made in full at the time of enrollment.
                            </p>
                            <p className="mt-3">
                                Refunds, cancellations, and fee adjustments are governed by our
                                Refund & Cancellation Policy.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">6. Intellectual Property</h2>
                            <p>
                                All content on SkillYards — including videos, text, graphics,
                                logos, designs, course materials, and software — is the intellectual
                                property of SkillYards or its content partners.
                            </p>
                            <p className="mt-3">
                                You may not copy, reproduce, distribute, modify, or commercially
                                exploit any content without prior written permission from SkillYards.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">7. User Conduct</h2>
                            <p>
                                You agree not to use SkillYards for any unlawful, harmful, or
                                disruptive activities, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Sharing offensive, abusive, or misleading content</li>
                                <li>Attempting to hack, disrupt, or reverse-engineer the platform</li>
                                <li>Infringing on the rights or privacy of others</li>
                                <li>Misuse of certificates, credentials, or branding</li>
                            </ul>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">8. Suspension & Termination</h2>
                            <p>
                                SkillYards reserves the right to suspend or terminate your access
                                to the platform at its sole discretion, without prior notice,
                                if you violate these terms or engage in activities that may
                                harm SkillYards or its community.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">9. Disclaimer of Warranties</h2>
                            <p>
                                SkillYards provides its services on an “as is” and “as available”
                                basis. We do not guarantee uninterrupted access, error-free content,
                                or specific learning or career outcomes.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, SkillYards shall not be
                                liable for any indirect, incidental, or consequential damages
                                arising from your use of the platform or services.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
                            <p>
                                These Terms of Service shall be governed by and construed in
                                accordance with the laws of India. Any disputes shall be subject
                                to the exclusive jurisdiction of Indian courts.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">12. Changes to These Terms</h2>
                            <p>
                                SkillYards may update these Terms of Service from time to time.
                                Continued use of the platform after changes are posted constitutes
                                acceptance of the revised terms.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">13. Contact Information</h2>
                            <p>
                                If you have any questions regarding these Terms of Service, please
                                contact us:
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
