import { withPageSEO } from "@/lib/seo";
import { FSDLandingPage } from "@/components/landingPageFSD/LandingPage";

export const metadata = withPageSEO({
  title: "Full-Stack Web Development Course in Agra | SkillYards OJT",
  description:
    "Go from zero to hired Full-Stack Developer in 6 months. MERN stack bootcamp in Agra with on-job training, real projects, and 95% placement support. Starting ₹25,000.",
  canonical: "https://www.skillyards.in/programs/fullstack",
  keywords: [
    "full stack development course Agra",
    "full stack web development training in Agra",
    "MERN stack course Agra",
    "coding bootcamp Agra",
    "web development course with placement Agra",
    "full stack developer course fees Agra",
    "on job training web development Agra",
  ],
  ogImage: "/images/opengraph/fullstack-og.jpg",
  twitterImage: "/images/opengraph/fullstack-twitter.jpg",
});

export default function FullStackPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <FSDLandingPage />
    </div>
  );
}
