export const getFAQSchema = (faqs = []) => {
  const validFaqs = faqs
    .filter(
      (faq) =>
        (faq?.question || faq?.q) &&
        (faq?.answer || faq?.a)
    )
    .map((faq) => ({
      "@type": "Question",
      name: (faq.question || faq.q).trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: (faq.answer || faq.a)
          .replace(/<[^>]*>/g, "")
          .trim(),
      },
    }));

  if (!validFaqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs,
  };
};