import { NextResponse } from 'next/server';

export const runtime = 'edge'; 

export async function GET() {
  const siteUrl = "https://smallgeotools.com"; 

  // The complete, accurate list of your 13 live tools
  const contentItems = [
    { title: "Visibility Checker", description: "Analyze how often AI models cite your brand.", url: `${siteUrl}/tools/visibility-checker` },
    { title: "JSON-LD Generator", description: "Create structured entity data instantly.", url: `${siteUrl}/tools/schema-generator` },
    { title: "Info Gain Analyzer", description: "Score content for unique data readiness.", url: `${siteUrl}/tools/information-gain` },
    { title: "AI robots.txt", description: "Control which LLM bots scrape your site.", url: `${siteUrl}/tools/ai-robots-generator` },
    { title: "FAQ Schema", description: "Build RAG-optimized Q&A schema.", url: `${siteUrl}/tools/faq-schema-generator` },
    { title: "Entity Extractor", description: "Simulate NLP proper noun extraction.", url: `${siteUrl}/tools/entity-extractor` },
    { title: "RAG Meta Optimizer", description: "Optimize meta tags for AI crawlers.", url: `${siteUrl}/tools/rag-optimizer` },
    { title: "Author Schema", description: "Establish Knowledge Graph E-E-A-T.", url: `${siteUrl}/tools/author-schema` },
    { title: "Semantic Keywords", description: "Generate LSI entities for content depth.", url: `${siteUrl}/tools/lsi-generator` },
    { title: "Sitemap Prompt", description: "Convert your sitemap to an LLM audit prompt.", url: `${siteUrl}/tools/sitemap-prompt` },
    { title: "Density Analyzer", description: "Check text for optimal entity frequency.", url: `${siteUrl}/tools/entity-density` },
    { title: "Freshness Scorer", description: "Calculate AI relevance decay over time.", url: `${siteUrl}/tools/freshness-checker` },
    { title: "AI Traffic Risk Calc", description: "Calculate how many clicks you will lose to AI search.", url: `${siteUrl}/tools/ai-traffic-risk-calculator` }
  ];

  // Map the items into XML format using today's date for freshness
  const feedDate = new Date().toUTCString();
  const rssItemsXml = contentItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${feedDate}</pubDate>
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>SmallGEOTools</title>
        <link>${siteUrl}</link>
        <description>13 Free Generative Engine Optimization (GEO) utilities.</description>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-us</language>
        <lastBuildDate>${feedDate}</lastBuildDate>
        ${rssItemsXml}
      </channel>
    </rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}