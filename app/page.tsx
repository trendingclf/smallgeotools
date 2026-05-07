import Link from "next/link";

// ADD YOUR ACTUAL ARTICLES HERE
const articles = [
  {
    title: "How to Build Topical Authority in 2026",
    excerpt: "Learn how AI models group entities to determine your brand's authority.",
    slug: "/blog/topical-authority-2026",
  },
  {
    title: "The Death of Traditional Keywords",
    excerpt: "Why semantic relevance has officially replaced keyword density.",
    slug: "/blog/death-of-keywords",
  },
  // Add more articles as you write them...
];

export default function Home() {
  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <header className="text-center space-y-6 mb-20 mt-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
          Dominate <span className="text-blue-600">AI Search</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          13 Free Generative Engine Optimization (GEO) utilities to help your brand build topical authority and get cited by Gemini, ChatGPT, and Perplexity.
        </p>
      </header>

      {/* TOOLS GRID */}
      <section id="tools" className="scroll-mt-24">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">The GEO Toolkit</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">13 Free Tools</span>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          <a href="/tools/visibility-checker" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">1. Visibility Checker ➔</h3>
            <p className="text-sm text-gray-500">Analyze how often AI models cite your brand.</p>
          </a>
          <a href="/tools/schema-generator" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">2. JSON-LD Generator ➔</h3>
            <p className="text-sm text-gray-500">Create structured entity data instantly.</p>
          </a>
          <a href="/tools/information-gain" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">3. Info Gain Analyzer ➔</h3>
            <p className="text-sm text-gray-500">Score content for unique data readiness.</p>
          </a>
          <a href="/tools/ai-robots-generator" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">4. AI robots.txt ➔</h3>
            <p className="text-sm text-gray-500">Control which LLM bots scrape your site.</p>
          </a>
          <a href="/tools/faq-schema-generator" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">5. FAQ Schema ➔</h3>
            <p className="text-sm text-gray-500">Build RAG-optimized Q&A schema.</p>
          </a>
          <a href="/tools/entity-extractor" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">6. Entity Extractor ➔</h3>
            <p className="text-sm text-gray-500">Simulate NLP proper noun extraction.</p>
          </a>
          <a href="/tools/rag-optimizer" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">7. RAG Meta Optimizer ➔</h3>
            <p className="text-sm text-gray-500">Optimize meta tags for AI crawlers.</p>
          </a>
          <a href="/tools/author-schema" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">8. Author Schema ➔</h3>
            <p className="text-sm text-gray-500">Establish Knowledge Graph E-E-A-T.</p>
          </a>
          <a href="/tools/lsi-generator" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-300 transition-all group">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 mb-2">9. Semantic Keywords ➔</h3>
            <p className="text-sm text-gray-500">Generate LSI entities for content depth.</p>
          </a>
          <a href="/tools/sitemap-prompt" className="block p-6 bg-blue-50 border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-400 transition-all group border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 group-hover:text-blue-600 mb-2">10. Sitemap Prompt ➔</h3>
            <p className="text-sm text-gray-600">Convert your sitemap to an LLM audit prompt.</p>
          </a>
          <a href="/tools/entity-density" className="block p-6 bg-blue-50 border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-400 transition-all group border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 group-hover:text-blue-600 mb-2">11. Density Analyzer ➔</h3>
            <p className="text-sm text-gray-600">Check text for optimal entity frequency.</p>
          </a>
          <a href="/tools/freshness-checker" className="block p-6 bg-blue-50 border rounded-xl shadow-sm hover:shadow-lg hover:border-blue-400 transition-all group border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 group-hover:text-blue-600 mb-2">12. Freshness Scorer ➔</h3>
            <p className="text-sm text-gray-600">Calculate AI relevance decay over time.</p>
          </a>
          <a href="/tools/ai-traffic-risk-calculator" className="block p-6 bg-red-50 border rounded-xl shadow-sm hover:shadow-lg hover:border-red-400 transition-all group border-red-200">
            <h3 className="text-lg font-bold text-red-800 group-hover:text-red-600 mb-2">13. AI Traffic Risk Calc ➔</h3>
            <p className="text-sm text-gray-700">Calculate how many clicks you will lose to AI search.</p>
          </a>
        </div>
      </section>

      {/* DYNAMIC BLOG GRID */}
      <section id="blog" className="scroll-mt-24 mb-20">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">GEO Guides & Articles</h2>
        </div>
        
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link href={article.slug} key={index} className="block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition group">
                <h3 className="text-md font-bold text-gray-900 group-hover:text-blue-600 mb-2">{article.title} ➔</h3>
                <p className="text-sm text-gray-600">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-100 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">No articles published yet. Check back soon!</p>
          </div>
        )}
      </section>

    </div>
  );
}