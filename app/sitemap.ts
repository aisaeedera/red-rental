import type { MetadataRoute } from "next";

const SITE_URL = "https://red.filmwithbigstory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-13");
  const landingLastModified = new Date();
  const landingPages = [
    "camera-rental-dubai",
    "cinema-camera-rental-dubai",
    "red-komodo-x-rental",
    "b-cam-rental-dubai",
    "lens-rental-dubai",
    "prime-lens-rental-dubai",
    "lowa-probe-lens-rental-dubai",
  ];
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/rental-agreements/delivery-handover`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/rental-agreements/post-rental-return`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...landingPages.map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: landingLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
