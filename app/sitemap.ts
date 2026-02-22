import type { MetadataRoute } from "next";

const SITE_URL = "https://airboost.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: SITE_URL,
          fr: `${SITE_URL}/fr`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/how-it-works`,
          fr: `${SITE_URL}/fr/how-it-works`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
