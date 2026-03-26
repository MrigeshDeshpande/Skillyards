import { buildSEO } from "@/lib/seo/buildSEO";
import { BCALandingPage } from "@/components/landingPageBCA/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";


const course = courses.bca;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.skillyards.in/" },
    { name: "Programs", url: "https://www.skillyards.in/programs" },
    { name: course.title, url: `https://www.skillyards.in${course.seo.path}` },
]);


export default function BCAPage() {
    return (
        <>
            <JsonLd data={courseSchema} id="course-schema" />
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

            <div className="w-full overflow-x-hidden">
                <BCALandingPage />
            </div>
        </>
    );
}