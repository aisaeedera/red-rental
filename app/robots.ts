import type { MetadataRoute } from "next";

const SITE_URL = "https://red.filmwithbigstory.com";

// AI / LLM crawlers we explicitly welcome, we WANT to be cited by AI search.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Diffbot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Timpibot",
  "YouBot",
  "DuckAssistBot",
  "Kangaroo Bot",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search + everything else, full access.
      { userAgent: "*", allow: "/" },
      // Explicitly allow every AI/LLM crawler.
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    // llms.txt and llms-full.txt live at the site root for AI agents:
    //   ${SITE_URL}/llms.txt  ·  ${SITE_URL}/llms-full.txt
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
