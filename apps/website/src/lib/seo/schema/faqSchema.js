export const getFAQSchema = (faqs = []) => {
  const validFaqs = faqs
    .filter(
      (faq) =>
        faq?.question &&
        faq?.answer &&
        typeof faq.question === "string" &&
        typeof faq.answer === "string"
    )
    .map((faq) => ({
      "@type": "Question",
      name: faq.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
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