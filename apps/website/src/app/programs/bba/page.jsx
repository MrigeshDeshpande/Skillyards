import { buildSEO } from "@/lib/seo/buildSEO";
import { LandingPage } from "@/components/landingPageBBA/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";

const course = courses.bba;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

export default function BBAPage() {
    return (
        <>
            <JsonLd data={courseSchema} id="course-schema" />
            
            <div className="w-full overflow-x-hidden">
                <LandingPage />
            </div>
        </>
    );
}