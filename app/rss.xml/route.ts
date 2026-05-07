// app/rss.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = "https://smallgeotools.com"; // Replace with your domain

  // In the future, you can fetch this array dynamically from a database or markdown files.
  // For now, we manually list your top tools.
  const contentItems = [
    {
      title: "Rapid Index Pinger",
      description: "Force search engines to crawl your links instantly using the Bing API. Don't wait weeks for organic discovery.",
      url: `${siteUrl}/tools/rapid-index-pinger`,
      date: new Date().toUTCString(), // You can hardcode a specific date like "Thu, 07 May 2026 12:00:00 GMT"
    },
    {
      title: "AI Search Traffic Risk Calculator",
      description: "Calculate exactly how much organic traffic your website will lose to AI overviews, ChatGPT, and Perplexity.",
      url: `${siteUrl}/tools/ai-traffic-risk-calculator`,
      date: new Date(Date.now() - 86400000).toUTCString(), // Yesterday
    }
  ];

  // Map the items into XML format
  const rssItemsXml = contentItems.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.url}</link>
      <guid isPermaLink="true">${item.url}</guid>
      <description><![CDATA[${item.description}]]></description>
      <pubDate>${item.date}</pubDate>
    </item>
  `).join('');

  // Wrap it in the standard RSS 2.0 channel syntax
  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>SmallGEOTools</title>
        <link>${siteUrl}</link>
        <description>Free Generative Engine Optimization (GEO) utilities.</description>
        <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-us</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItemsXml}
      </channel>
    </rss>`;

  // Return the XML with headers that tell browsers/crawlers it's an RSS feed
  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate', // Cache for 24 hours
    },
  });
}