import { buildSEO } from "@/lib/seo/buildSEO";
import { DGMLandingPage } from "@/components/landingPageDGM/LandingPage";
import JsonLd from "@/components/JsonLd";
import { getCourseSchema } from "@/lib/seo/schema/courseSchema";
import { courses } from "@/data/courses";
import { getBreadcrumbSchema } from "@/lib/seo/schema/breadcrumbSchema";
import { getFAQSchema } from "@/lib/seo/schema/faqSchema";
import { getPageFaqs } from "@/lib/seo/getFaqs";


const course = courses.digitalmarketing;
const courseSchema = getCourseSchema(course);
const faqs = getPageFaqs("digitalmarketing");
const faqSchema = getFAQSchema(faqs);

export const metadata = buildSEO(course.seo);

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: "https://www.skillyards.in/" },
  { name: "Programs", url: "https://www.skillyards.in/programs" },
  { name: course.title, url: `https://www.skillyards.in${course.seo.path}` },
]);

export default function DigitalMarketingPage() {
  return (
    <>
      <JsonLd data={courseSchema} id="course-schema" />
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />

      <div className="w-full overflow-x-hidden">
        <DGMLandingPage faqs={faqs} />
      </div>
    </>
  );
}