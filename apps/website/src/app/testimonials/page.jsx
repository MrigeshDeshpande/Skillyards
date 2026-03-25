import { buildSEO } from "@/lib/seo/buildSEO";
import TestimonialsHero from "@/components/testimonialspage/TestimonialsHero";
import TestimonialsGrid from "@/components/testimonialspage/TestimonialsGrid";
import VideoTestimonials from "@/components/testimonialspage/VideoTestimonials";
import TestimonialsCTA from "@/components/testimonialspage/TestimonialsCTA";

export const metadata = buildSEO({
    title: "Student Testimonials & Reviews | SkillYards Agra",
    description:
        "Read authentic reviews from SkillYards students. Real stories on skill growth, on-job training, and career outcomes from our Full-Stack, Digital Marketing, BCA and BBA graduates.",
    path: "/testimonials",
    keywords: [
        "SkillYards testimonials",
        "SkillYards student reviews",
        "IT training reviews Agra",
        "SkillYards placement stories",
        "coding bootcamp reviews Agra",
        "SkillYards student feedback",
    ],
    ogImage: "/images/opengraph/testimonials-og.jpg",
});

export default function TestimonialsPage() {
    return (
        <div className="w-full overflow-x-hidden">
            <TestimonialsHero />
            <TestimonialsGrid />
            <VideoTestimonials />
            <TestimonialsCTA />
        </div>
    );
}
