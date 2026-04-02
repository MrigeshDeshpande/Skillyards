import { buildSEO } from "@/lib/seo/buildSEO";
import { BCALandingPage } from "@/components/landingPageBCA/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";
import { getWebPageSchema } from "@/lib/seo/schema/webPageSchema";

const course = courses.bca;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Programs", url: "/programs" },
    { name: course.title, url: course.seo.path },
]);

const webPageSchema = getWebPageSchema({
    url: course.seo.path,
    name: course.title,
    description: course.seo.description
});

const combinedSchema = [courseSchema, breadcrumbSchema, webPageSchema].filter(Boolean);

export default function BCAPage() {
    return (
        <>
            <JsonLd data={combinedSchema} id="course-schema" />

            <div className="w-full overflow-x-hidden">
                <BCALandingPage />
            </div>
        </>
    );
}