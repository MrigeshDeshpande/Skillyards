import { faqCategories } from "@/data/faqs";

export function getPageFaqs(category, limit = 4) {
  return faqCategories[category]?.faqs?.slice(0, limit) || [];
}