import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "One Heart Siu Lum Pai Hung Gar Arizona",
  tagline: "Empowering Your Martial Arts Journey",
  description: "One Heart Siu Lum Pai Hung Gar Arizona offers top-tier Kung Fu training and expert martial arts instruction to meet all your self-defense and fitness needs. Start exploring and contact our team for superior training and guidance.",
  description_short: "Top-tier Kung Fu training and expert martial arts instruction to meet all your self-defense and fitness needs.",
  url: "http://www.hunggaraz.com",
  author: "George Badulescu",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Empowering Your Martial Arts Journey`,
  description: "Discover the strength and discipline of One Heart Siu Lum Pai Hung Gar Arizona. Our top-tier Kung Fu training and expert martial arts instruction are designed to meet all your self-defense and fitness needs. Join us and start your journey towards mastery.",
  image: ogImageSrc,
};

