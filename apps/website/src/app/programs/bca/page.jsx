import { buildSEO } from "@/lib/seo/buildSEO";
import { BCALandingPage } from "@/components/landingPageBCA/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";

const course = courses.bca;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

export default function BCAPage() {
    return (
        <>
            <JsonLd data={courseSchema} id="course-schema" />


            <div className="w-full overflow-x-hidden">
                <BCALandingPage />
            </div>
        </>
    );
}