import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import ContactPageInfoCard from "@/components/ContactPageInfoCard";
import {withPageSEO} from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SkillYards",
    "url": "https://www.skillyards.in/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "SkillYards",
        "url": "https://www.skillyards.in",
        "logo": "https://www.skillyards.in/images/logo.png",
        "email": "support@skillyards.in",
        "telephone": "+91-7060-100-561",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Agra",
            "addressLocality": "Agra",
            "addressRegion": "Uttar Pradesh",
            "postalCode": "282005",
            "addressCountry": "IN"
        }
    }
};

export const metadata = withPageSEO({
    title: 'Contact SkillYards – Get in Touch',
    description:
        'Contact SkillYards for course inquiries, training support, partnerships, or general questions. We’re here to help you grow your skills and career.',
    canonical: 'https://www.skillyards.in/contact',
    keywords: [
        'Contact SkillYards',
        'SkillYards contact number',
        'SkillYards support',
        'Online training help',
        'SkillYards India',
        'EdTech support India',
    ],
    ogImage: '/images/opengraph/contact-og.jpg',
    twitterImage: '/images/opengraph/contact-twitter.jpg',
});


export default function ContactPage() {
    return (
        <>
            <div className="bg-linear-to-b from-white via-zinc-50 to-zinc-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-100 transition-colors duration-500">

                {/* ===== Hero ===== */}
                <section className="py-28 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Get in Touch
                    </h1>

                    {/* Center breadcrumbs */}
                    <div className="mt-4 flex justify-center">
                        <Breadcrumbs />
                    </div>

                    <p className="mt-4 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
                        Have questions about SkillYards? Fill out the form and our team
                        will contact you shortly.
                    </p>
                </section>


                {/* ===== Contact Section ===== */}
                <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-24 mt-16">

                    {/* Form */}
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold mb-6">
                            Send us a message
                        </h2>

                       <ContactForm />
                    </div>

                    {/* Contact Info */}
                    <ContactPageInfoCard />

                </section>

                {/* ===== Full Width Google Map ===== */}
                <section className="w-full h-[420px] relative">
                    <iframe
                        title="SkillYards Location"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=27.2112740,78.0056243&zoom=19`}
                        aria-label="SkillYards Versatilitty Pvt. Ltd."
                    />
                </section>
            </div>
            <JsonLd schema={contactPageSchema} id='contact-page-schema-skillyards'/>
        </>
    );
}
