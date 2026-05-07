export default function Home() {
  return (
    <div className="space-y-12 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <header className="text-center space-y-6 mb-20 mt-10">
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
          
          {/* THE 13TH TOOL (RED TINT) */}
          <a href="/tools/ai-traffic-risk-calculator" className="block p-6 bg-red-50 border rounded-xl shadow-sm hover:shadow-lg hover:border-red-400 transition-all group border-red-200">
            <h3 className="text-lg font-bold text-red-800 group-hover:text-red-600 mb-2">13. AI Traffic Risk Calc ➔</h3>
            <p className="text-sm text-gray-700">Calculate how many clicks you will lose to AI search.</p>
          </a>
        </div>
      </section>

      {/* BLOG GRID */}
      <section id="blog" className="scroll-mt-24">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">GEO Guides & Articles</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <a href="/blog/what-is-geo" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">What is GEO? ➔</h3>
            <p className="text-sm text-gray-600">Our definitive guide to AI search.</p>
          </a>
          <a href="/blog/json-ld-entity-seo" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">JSON-LD & Entity SEO ➔</h3>
            <p className="text-sm text-gray-600">The language you need to speak.</p>
          </a>
          <a href="/blog/zero-click-serp-survival" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Zero-Click SERP Survival ➔</h3>
            <p className="text-sm text-gray-600">Why tools are the new blogs.</p>
          </a>
          <a href="/blog/ai-search-gemini-2026" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Google Gemini's Impact ➔</h3>
            <p className="text-sm text-gray-600">How Gemini shifted the landscape.</p>
          </a>
          <a href="/blog/optimize-perplexity-ai" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Optimizing for Perplexity ➔</h3>
            <p className="text-sm text-gray-600">Mastering RAG.</p>
          </a>
          <a href="/blog/information-gain-generative-seo" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Information Gain Metric ➔</h3>
            <p className="text-sm text-gray-600">The metric that matters most.</p>
          </a>
          <a href="/blog/micro-saas-indie-hacking-ai" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Micro-SaaS Indie Hacking ➔</h3>
            <p className="text-sm text-gray-600">The most profitable solo path.</p>
          </a>
          <a href="/blog/biggest-geo-mistakes" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">Top 5 GEO Mistakes ➔</h3>
            <p className="text-sm text-gray-600">Common developer pitfalls.</p>
          </a>
          <a href="/blog/ai-search-ranking-factors" className="block p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <h3 className="text-md font-bold text-gray-900 mb-2">AI Ranking Factors ➔</h3>
            <p className="text-sm text-gray-600">Measurable signals for success.</p>
          </a>
        </div>
      </section>

    </div>
  );
}