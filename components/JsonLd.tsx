import { faqs } from "@/data/content";

export default function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dr. Maya Reynolds, PsyD",
    description:
      "Licensed clinical psychologist offering therapy for adults with anxiety, trauma, burnout and perfectionism, in person in Santa Monica and by telehealth across California.",
    url: "https://gmt-self.vercel.app",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123th Street 45 W",
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "State", name: "California" },
    ],
    knowsAbout: [
      "Anxiety therapy",
      "Trauma therapy",
      "EMDR",
      "Cognitive-behavioral therapy",
      "Burnout",
      "Perfectionism",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}