import { buildSEO } from "@/lib/seo/buildSEO";
import { DGMLandingPage } from "@/components/landingPageDGM/LandingPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";

const course = courses.digitalmarketing;
const courseSchema = getCourseSchema(course);

export const metadata = buildSEO(course.seo);

export default function DigitalMarketingPage() {
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

      <div className="relative w-full overflow-x-hidden">
        <div className="absolute top-24 left-4 sm:left-6 lg:left-8 z-20">
          <Breadcrumbs currentLabel="Digital Marketing" />
        </div>
        <DGMLandingPage />
      </div>
    </>
  );
}