import {withPageSEO} from "@/lib/seo";
import PageHero from "@/components/PageHero";

export const metadata = withPageSEO({
    title: 'Privacy Policy',
    description:
        'Read SkillYards’ Privacy Policy to understand how we collect, use, protect, and manage your personal information when you use our website and services.',
    canonical: 'https://www.skillyards.in/privacy-policy',
    keywords: [
        'SkillYards Privacy Policy',
        'Privacy Policy SkillYards',
        'Data protection policy',
        'User data privacy India',
        'EdTech privacy policy',
        'GDPR compliance India',
    ],
    ogImage: '/images/opengraph/privacy-policy-og.jpg',
    twitterImage: '/images/opengraph/privacy-policy-twitter.jpg',
});
export default function PrivacyPolicyPage() {
    return (
        <>
            <PageHero title="Privacy Policy" description="This Privacy Policy explains how SkillYards collects, uses, protects, and shares your personal information when you use our website, services, and digital platforms. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled."/>
            <div className="min-h-screen w-full bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">

                <section className="max-w-5xl mx-auto px-6 py-20">
                    {/* Header */}
                    <div className="mb-14">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
                            At SkillYards, your privacy matters to us. This Privacy Policy explains how we
                            collect, use, protect, and share your information when you use our website,
                            platforms, and services.
                        </p>
                        <p className="mt-4 text-sm text-neutral-500">
                            Last updated: {new Date().toLocaleDateString("en-IN")}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 leading-relaxed text-[17px]">
                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
                            <p>
                                We collect information to provide better services and learning experiences.
                                This includes:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>
                                    <strong>Personal Information:</strong> Name, email address, phone number,
                                    educational background, and other details you provide during registration,
                                    enrollment, or communication.
                                </li>
                                <li>
                                    <strong>Usage Data:</strong> Pages visited, time spent on our platform,
                                    interactions with content, and technical data such as browser type and
                                    device information.
                                </li>
                                <li>
                                    <strong>Payment Information:</strong> Payment-related details are processed
                                    securely by trusted third-party payment gateways. SkillYards does not store
                                    your card or banking information.
                                </li>
                            </ul>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
                            <p>
                                The information we collect is used for legitimate educational and operational
                                purposes, including:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Providing access to courses, programs, and learning resources</li>
                                <li>Managing enrollments, certifications, and student support</li>
                                <li>Improving our platform, content, and user experience</li>
                                <li>Sending important updates, announcements, and learning-related communications</li>
                                <li>Ensuring platform security and preventing fraud or misuse</li>
                            </ul>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">3. Cookies & Tracking Technologies</h2>
                            <p>
                                SkillYards uses cookies and similar technologies to enhance your browsing
                                experience. Cookies help us understand how users interact with our platform,
                                remember preferences, and improve performance.
                            </p>
                            <p className="mt-3">
                                You can manage or disable cookies through your browser settings. However,
                                disabling cookies may affect certain features of the website.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing & Disclosure</h2>
                            <p>
                                We respect your privacy and do not sell your personal data. Your information
                                may be shared only in the following cases:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>With trusted service providers who assist us in operating our platform</li>
                                <li>When required by law, regulation, or legal process</li>
                                <li>To protect the rights, safety, and integrity of SkillYards and its users</li>
                            </ul>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to
                                safeguard your personal information. While no system is completely secure,
                                we continuously work to protect your data against unauthorized access,
                                alteration, or disclosure.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">6. Your Rights & Choices</h2>
                            <p>
                                You have the right to access, update, or request deletion of your personal
                                information. You may also opt out of non-essential communications at any time.
                            </p>
                            <p className="mt-3">
                                To exercise these rights, please contact us using the details provided below.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
                            <p>
                                Our platform may contain links to third-party websites or services. SkillYards
                                is not responsible for the privacy practices or content of these external
                                platforms. We encourage you to review their privacy policies separately.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">8. Updates to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in
                                our practices or legal requirements. Any updates will be posted on this page
                                with a revised “Last updated” date.
                            </p>
                        </section>

                        {/* Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
                            <p>
                                If you have any questions or concerns about this Privacy Policy or how your
                                data is handled, please reach out to us:
                            </p>
                            <div className="mt-4 space-y-1">
                                <p><strong>SkillYards</strong></p>
                                <p>Email: <a href="mailto:support@skillyards.in" className="underline hover:text-primary">support@skillyards.in</a></p>
                                <p>Website: <a href="https://www.skillyards.in" className="underline hover:text-primary">www.skillyards.in</a></p>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}
