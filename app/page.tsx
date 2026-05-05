export default function Home() {
  return (
    <div className="space-y-10 py-10">
      <header className="text-center space-y-4 mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">Dominate AI Search</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          9 Free Generative Engine Optimization (GEO) utilities to help your brand get cited by Gemini, ChatGPT, and Perplexity.
        </p>
      </header>

      {/* TOOLS GRID */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-6">GEO Toolkit</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <a href="/tools/visibility-checker" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">1. AI Visibility Checker ➔</h2>
          <p className="text-sm text-gray-600">Analyze how often AI models cite your brand.</p>
        </a>
        <a href="/tools/schema-generator" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">2. JSON-LD Generator ➔</h2>
          <p className="text-sm text-gray-600">Create basic structured entity data.</p>
        </a>
        <a href="/tools/information-gain" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">3. Info Gain Analyzer ➔</h2>
          <p className="text-sm text-gray-600">Score content for unique data readiness.</p>
        </a>
        <a href="/tools/ai-robots-generator" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">4. AI robots.txt Generator ➔</h2>
          <p className="text-sm text-gray-600">Control which LLM bots scrape your domain.</p>
        </a>
        <a href="/tools/faq-schema-generator" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">5. FAQ Schema Generator ➔</h2>
          <p className="text-sm text-gray-600">Build question/answer RAG schema.</p>
        </a>
        <a href="/tools/entity-extractor" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">6. NLP Entity Extractor ➔</h2>
          <p className="text-sm text-gray-600">Simulate how bots extract proper nouns.</p>
        </a>
        <a href="/tools/rag-optimizer" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">7. RAG Meta Optimizer ➔</h2>
          <p className="text-sm text-gray-600">Check title/desc lengths for AI fetching.</p>
        </a>
        <a href="/tools/author-schema" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">8. E-E-A-T Author Schema ➔</h2>
          <p className="text-sm text-gray-600">Establish authority in the Knowledge Graph.</p>
        </a>
        <a href="/tools/lsi-generator" className="block p-6 bg-blue-50 border rounded-xl hover:shadow-md transition border-blue-200">
          <h2 className="text-lg font-bold text-blue-700 mb-2">9. Semantic Keyword Gen ➔</h2>
          <p className="text-sm text-gray-600">Find related entities to increase depth.</p>
        </a>
      </div>

      {/* BLOG GRID */}
      <h2 className="text-2xl font-bold border-b pb-2 mb-6">GEO Guides & Articles</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <a href="/blog/what-is-geo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">What is GEO? ➔</h2>
          <p className="text-sm text-gray-600">Our definitive guide to AI search.</p>
        </a>
        <a href="/blog/json-ld-entity-seo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">JSON-LD & Entity SEO ➔</h2>
          <p className="text-sm text-gray-600">The language you need to speak.</p>
        </a>
        <a href="/blog/zero-click-serp-survival" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Zero-Click SERP Survival ➔</h2>
          <p className="text-sm text-gray-600">Why tools are the new blogs.</p>
        </a>
        <a href="/blog/ai-search-gemini-2026" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Google Gemini's Impact ➔</h2>
          <p className="text-sm text-gray-600">How Gemini shifted the landscape.</p>
        </a>
        <a href="/blog/optimize-perplexity-ai" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Optimizing for Perplexity ➔</h2>
          <p className="text-sm text-gray-600">Mastering RAG.</p>
        </a>
        <a href="/blog/information-gain-generative-seo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Information Gain Metric ➔</h2>
          <p className="text-sm text-gray-600">The metric that matters most.</p>
        </a>
        <a href="/blog/micro-saas-indie-hacking-ai" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Micro-SaaS Indie Hacking ➔</h2>
          <p className="text-sm text-gray-600">The most profitable solo path.</p>
        </a>
        <a href="/blog/biggest-geo-mistakes" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">Top 5 GEO Mistakes ➔</h2>
          <p className="text-sm text-gray-600">Common developer pitfalls.</p>
        </a>
        <a href="/blog/ai-search-ranking-factors" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-md font-bold mb-2">AI Ranking Factors ➔</h2>
          <p className="text-sm text-gray-600">Measurable signals for success.</p>
        </a>
      </div>
    </div>
  );
}