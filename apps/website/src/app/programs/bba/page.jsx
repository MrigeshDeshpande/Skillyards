import { buildSEO } from "@/lib/seo/buildSEO";
import { LandingPage } from "@/components/landingPageBBA/LandingPage";
import Script from "next/script";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";

const course = courses.bba;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

export default function BBAPage() {
    return (
        <>
            <Script
                id="course-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(courseSchema),
                }}
            />

            <div className="w-full overflow-x-hidden">
                <LandingPage />
            </div>
        </>
    );
}