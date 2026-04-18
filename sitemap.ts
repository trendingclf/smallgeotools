import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smallgeotools.com'

  // Your published blog slugs
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

  // Automatically generate the sitemap nodes for the blogs
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