"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// --- DATA ARRAYS ---
const toolsData = [
  { id: '1', title: '1. AI Search Visibility', desc: 'Analyze how often AI models cite your brand.', slug: '/tools/ai-search-visibility-checker', style: 'default' },
  { id: '2', title: '2. JSON-LD Entity Schema', desc: 'Create structured entity data instantly.', slug: '/tools/json-ld-entity-schema-generator', style: 'default' },
  { id: '3', title: '3. Info Gain Analyzer', desc: 'Score content for unique data readiness.', slug: '/tools/information-gain-seo-analyzer', style: 'default' },
  { id: '4', title: '4. AI robots.txt', desc: 'Control which LLM bots scrape your site.', slug: '/tools/ai-robots-generator', style: 'default' },
  { id: '5', title: '5. FAQ Schema for RAG', desc: 'Build RAG-optimized Q&A schema.', slug: '/tools/faq-schema-generator-for-rag', style: 'default' },
  { id: '6', title: '6. Entity Extractor', desc: 'Simulate NLP proper noun extraction.', slug: '/tools/entity-extractor', style: 'default' },
  { id: '7', title: '7. RAG Meta Optimizer', desc: 'Optimize meta tags for AI crawlers.', slug: '/tools/rag-optimizer', style: 'default' },
  { id: '8', title: '8. Author Schema', desc: 'Establish Knowledge Graph E-E-A-T.', slug: '/tools/author-schema', style: 'default' },
  { id: '9', title: '9. Semantic Keywords', desc: 'Generate LSI entities for content depth.', slug: '/tools/lsi-generator', style: 'default' },
  { id: '10', title: '10. Sitemap Prompt', desc: 'Convert your sitemap to an LLM audit prompt.', slug: '/tools/sitemap-prompt', style: 'blue' },
  { id: '11', title: '11. Semantic Density', desc: 'Check text for optimal entity frequency.', slug: '/tools/semantic-entity-density-calculator', style: 'blue' },
  { id: '12', title: '12. Freshness Scorer', desc: 'Calculate AI relevance decay over time.', slug: '/tools/freshness-checker', style: 'blue' },
  { id: '13', title: '13. AI Traffic Risk Calc', desc: 'Calculate clicks lost to AI search.', slug: '/tools/ai-traffic-risk-calculator', style: 'red' },
  { id: '14', title: '14. Grok Ingestion Scorer', desc: 'Optimize posts for X algorithm & Grok indexing.', slug: '/tools/x-algorithm-grok-ingestion-scorer', style: 'dark' },
  { id: '15', title: '15. Zero-Click Penalty', desc: 'Check social posts for algorithmic reach penalties.', slug: '/tools/social-media-zero-click-penalty-checker', style: 'dark' },
  { id: '16', title: '16. Tweepcred Simulator', desc: 'Calculate your Author Reputation for AI trust.', slug: '/tools/x-author-reputation-simulator', style: 'dark' },
];

const articlesData = [
  { title: "What is GEO?", excerpt: "Our definitive guide to Generative Engine Optimization.", slug: "/blog/what-is-geo" },
  { title: "JSON-LD & Entity SEO", excerpt: "The structured data language you need to speak for AI crawlers.", slug: "/blog/json-ld-entity-seo" },
  { title: "Zero-Click SERP Survival", excerpt: "Why interactive tools are the new blogs in the AI search era.", slug: "/blog/zero-click-serp-survival" },
  { title: "AI Search Ranking Factors", excerpt: "The core metrics that drive visibility in LLM outputs.", slug: "/blog/ai-search-ranking-factors" },
  { title: "Information Gain in Generative SEO", excerpt: "Why providing unique data is your strongest SEO moat.", slug: "/blog/information-gain-generative-seo" },
  { title: "How to Optimize for Perplexity AI", excerpt: "Getting your brand cited in the world's fastest-growing answer engine.", slug: "/blog/optimize-perplexity-ai" },
  { title: "AI Search & Gemini in 2026", excerpt: "How Google's generative models are reshaping search query intent.", slug: "/blog/ai-search-gemini-2026" },
  { title: "The Biggest GEO Mistakes", excerpt: "Common pitfalls developers make when optimizing for generative engines.", slug: "/blog/biggest-geo-mistakes" },
  { title: "Micro SaaS & Indie Hacking AI", excerpt: "Building profitable, lightweight utilities in the AI landscape.", slug: "/blog/micro-saas-indie-hacking-ai" }
];

// --- STYLING LOGIC ---
const getCardStyles = (style: string) => {
  switch (style) {
    case 'blue': return "bg-blue-50 border-blue-200 hover:border-blue-400 group-hover:text-blue-600 text-blue-800 text-gray-600";
    case 'red': return "bg-red-50 border-red-200 hover:border-red-400 group-hover:text-red-600 text-red-800 text-gray-700";
    case 'dark': return "bg-gray-900 border-gray-800 hover:border-gray-500 group-hover:text-gray-300 text-white text-gray-400";
    default: return "bg-white border-gray-200 hover:border-blue-300 group-hover:text-blue-600 text-gray-900 text-gray-500";
  }
};

// --- DYNAMIC COMPONENT ---
function HomepageContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  // Instant Client-Side Filtering
  const filteredTools = toolsData.filter(t => t.title.toLowerCase().includes(query) || t.desc.toLowerCase().includes(query));
  const filteredArticles = articlesData.filter(a => a.title.toLowerCase().includes(query) || a.excerpt.toLowerCase().includes(query));

  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <header className="text-center space-y-6 mb-20 mt-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Dominate <span className="text-blue-600">AI Search</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Free Generative Engine Optimization (GEO) utilities to help your brand build topical authority and get cited by Gemini, ChatGPT, and Perplexity.
        </p>
      </header>

      {/* TOOLS GRID */}
      <section id="tools" className="scroll-mt-24">
        <div className="border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">The GEO Toolkit</h2>
        </div>
        
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {filteredTools.map((tool) => {
              const styles = getCardStyles(tool.style);
              const [bgStyle, titleStyle, descStyle] = styles.split(" text-"); // Hacky but clean split for tailwind classes
              
              return (
                <Link href={tool.slug} key={tool.id} className={`block p-6 border rounded-xl shadow-sm hover:shadow-lg transition-all group ${styles.split(' ')[0]} ${styles.split(' ')[1]} ${styles.split(' ')[2]}`}>
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${styles.split(' ')[3]} text-${titleStyle}`}>{tool.title} ➔</h3>
                  <p className={`text-sm text-${descStyle}`}>{tool.desc}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300 mb-16">
            <p className="text-gray-500 font-medium">No tools found matching "{query}".</p>
          </div>
        )}
      </section>

      {/* BLOG GRID */}
      <section id="blog" className="scroll-mt-24 mb-20">
        <div className="border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">GEO Guides & Articles</h2>
        </div>
        
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Link href={article.slug} key={index} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition group">
                <h3 className="text-md font-bold text-gray-900 group-hover:text-blue-600 mb-2">{article.title} ➔</h3>
                <p className="text-sm text-gray-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium">No articles found matching "{query}".</p>
          </div>
        )}
      </section>

    </div>
  );
}

// Wrap in Suspense as required by Next.js useSearchParams
export default function Home() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center text-gray-500">Loading...</div>}>
      <HomepageContent />
    </Suspense>
  );
}