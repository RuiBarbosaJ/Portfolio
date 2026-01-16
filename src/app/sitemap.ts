import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ruibarbosa.dev/",
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date().toISOString(),
    },
  ];
}
