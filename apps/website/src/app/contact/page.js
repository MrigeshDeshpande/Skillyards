import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import ContactPageInfoCard from "@/components/ContactPageInfoCard";
import Breadcrumbs from "@/components/Breadcrumbs";

import { buildSEO } from "@/lib/seo/buildSEO";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact SkillYards",
  url: "https://www.skillyards.in/contact",
  mainEntity: {
    "@type": "Organization",
    name: "SkillYards",
    url: "https://www.skillyards.in",
    logo: "https://www.skillyards.in/images/logo.png",
    email: "support@skillyards.in",
    telephone: "+91-7060-100-561",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Agra",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      postalCode: "282005",
      addressCountry: "IN",
    },
  },
};

export const metadata = buildSEO({
  title: "Contact SkillYards",
  description:
    "Contact SkillYards for course inquiries, training support, partnerships, or general questions. We’re here to help you grow your skills and career.",
  path: "/contact",
  keywords: [
    "Contact SkillYards",
    "SkillYards contact number",
    "SkillYards support",
    "Online training help",
    "SkillYards India",
    "EdTech support India",
  ],
  ogImage: "/images/opengraph/contact-og.jpg",
});

export default function ContactPage() {
  return (
    <>
      <div className="bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 transition-colors duration-500 relative selection:bg-primary/30 min-h-screen z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_40%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none z-[-1]" />
        
        <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-60 pointer-events-none z-[-1]" />
        <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] bg-secondary/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 pointer-events-none z-[-1]" />

        <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 text-center z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 text-sm font-semibold tracking-wide bg-primary/10 text-accent-foreground rounded-full border border-primary/20 backdrop-blur-md shadow-sm">
                Contact Us
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight font-playfair mb-6 bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 to-neutral-500 dark:from-white dark:to-neutral-400">
              Let's Get in Touch
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              Have questions about SkillYards? Our team is ready to answer your inquiries, support your learning, and help accelerate your career.
            </p>
            
            <div className="mt-10 flex justify-center">
              <Breadcrumbs />
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 relative z-20 -mt-10 md:-mt-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col h-full order-2 lg:order-1">
              <ContactPageInfoCard />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="h-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-2xl border border-neutral-200/60 dark:border-neutral-800 shadow-2xl shadow-neutral-200/50 dark:shadow-black/60 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-1000" />
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-playfair font-bold text-neutral-900 dark:text-white mb-2">
                    Send us a message
                  </h2>
                  <p className="text-neutral-500 dark:text-neutral-400 mb-10 text-lg">
                    Fill out the fields below and we'll reply as soon as possible.
                  </p>
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-28">
           <div className="w-full h-[500px] relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 group">
             <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 rounded-[2.5rem] pointer-events-none z-10 shadow-[inner_0_2px_20px_rgba(0,0,0,0.05)]" />
             
             <iframe
                title="SkillYards Location"
                className="absolute inset-0 w-full h-full border-0 filter  dark:brightness-90 dark:contrast-125 dark:saturate-50 transition-all duration-700" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2462724676166!2d78.00276847614923!3d27.211416747188895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974776a3f3b61d9%3A0xc26cc82e5a39a7fc!2sSkillyards%20Versatility%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774862128520!5m2!1sen!2sin"
                 width="600" 
                 height="450" 
                aria-label="SkillYards Versatilitty Pvt. Ltd."
             />
           </div>
        </section>
      </div>

      <JsonLd
        schema={contactPageSchema}
        id="contact-page-schema-skillyards"
      />
    </>
  );
}