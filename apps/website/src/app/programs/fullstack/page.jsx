import { buildSEO } from "@/lib/seo/buildSEO";
import { FSDLandingPage } from "@/components/landingPageFSD/LandingPage";
import Script from "next/script";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";

const course = courses.fullstack;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

export default function FullStackPage() {
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
        <FSDLandingPage />
      </div>
    </>
  );
}