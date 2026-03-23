import ComingSoon from "@/components/ComingSoon";
import { buildSEO } from "@/lib/seo/buildSEO";

export const metadata = buildSEO({
  title: "SkillYards Gallery",
  description:
    "Explore the SkillYards gallery featuring photos and videos from our campus, training sessions, workshops, events, and student learning experiences.",
  path: "/gallery",
  keywords: [
    "SkillYards gallery",
    "SkillYards campus gallery",
    "IT training institute gallery",
    "SkillYards events photos and videos",
    "Student learning moments",
    "SkillYards classroom gallery",
  ],
  ogImage: "/images/opengraph/gallery-og.jpg",
});

export default function GalleryPage() {
  return (
    <ComingSoon
      title="Gallery — Coming Soon"
      description="We’re curating photos and moments from SkillYards classrooms, events, and student journeys. Check back soon!"
    />
  );
}