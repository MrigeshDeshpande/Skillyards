import { buildSEO } from "@/lib/seo/buildSEO";
import { FSDLandingPage } from "@/components/landingPageFSD/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";
import { faqCategories } from "@/data/faqs";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";

const course = courses.fullstack;
const courseSchema = getCourseSchema(course);
const faqs = faqCategories.fullstack.faqs.slice(0, 4);
const faqSchema = getFAQSchema(faqs);

export const metadata = buildSEO(course.seo);

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "https://www.skillyards.in/" },
  { name: "Programs", url: "https://www.skillyards.in/programs" },
  { name: course.title, url: `https://www.skillyards.in${course.seo.path}` },
]);

export default function FullStackPage() {
  return (
    <>
      <JsonLd data={courseSchema} id="course-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />

      <div className="w-full overflow-x-hidden">
        <FSDLandingPage faqs={faqs} />
      </div>
    </>
  );
}