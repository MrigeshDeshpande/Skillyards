import { buildSEO } from "@/lib/seo/buildSEO";
import { LandingPage } from "@/components/landingPageBBA/LandingPage";
import Breadcrumbs from "@/components/Breadcrumbs";
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

            <div className="bg-background px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto mt-24">
                <Breadcrumbs currentLabel="BBA" />
            </div>

            <div className="w-full overflow-x-hidden">
                <LandingPage />
            </div>
        </>
    );
}