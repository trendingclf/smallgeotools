import { MetadataRoute } from 'next'

// This line forces Next.js to build a permanent, static XML file
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smallgeotools.com'

  const blogs = [
    'what-is-geo',
    'json-ld-entity-seo',
    'zero-click-serp-survival',
    'ai-search-gemini-2026',
    'optimize-perplexity-ai',
    'information-gain-generative-seo',
    'micro-saas-indie-hacking-ai',
    'biggest-geo-mistakes',
    'ai-search-ranking-factors'
  ]

  const blogUrls = blogs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools/visibility-checker`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}