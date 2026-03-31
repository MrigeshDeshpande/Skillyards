import { buildSEO } from "@/lib/seo/buildSEO";
import { FSDLandingPage } from "@/components/landingPageFSD/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { getPageFaqs } from "@/lib/seo/getFaqs";

const course = courses.fullstack;
const courseSchema = getCourseSchema(course);

const faqs = getPageFaqs("fullstack");
const faqSchema = getFAQSchema(faqs);

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "https://www.skillyards.in/" },
  { name: "Programs", url: "https://www.skillyards.in/programs" },
  { name: course.title, url: `https://www.skillyards.in${course.seo.path}` },
]);

const combinedSchema = [
  courseSchema,
  breadcrumbSchema,
  faqSchema,
].filter(Boolean);

export const metadata = buildSEO(course.seo);

export default function FullStackPage() {
  return (
    <>
      <JsonLd
        data={combinedSchema}
        id="fullstack-schema"
      />

      <div className="w-full overflow-x-hidden">
        <FSDLandingPage faqs={faqs} />
      </div>
    </>
  );
}