export default function Home() {
  return (
    <div className="space-y-10 py-10">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-900">Dominate AI Search</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Free Generative Engine Optimization (GEO) utilities to help your brand get cited by Gemini, ChatGPT, and Perplexity.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Core Tool */}
        <a href="/tools/visibility-checker" className="block p-6 bg-blue-50 border rounded-xl shadow-sm hover:shadow-md transition border-blue-200 col-span-full md:col-span-1">
          <h2 className="text-xl font-bold text-blue-700 mb-2">AI Visibility Checker ➔</h2>
          <p className="text-sm text-gray-600">Analyze how often AI models cite your brand.</p>
        </a>

        {/* Blog Cards */}
        <a href="/blog/what-is-geo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">What is GEO? ➔</h2>
          <p className="text-sm text-gray-600">Our definitive guide on why traditional SEO is dying.</p>
        </a>

        <a href="/blog/json-ld-entity-seo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">JSON-LD & Entity SEO ➔</h2>
          <p className="text-sm text-gray-600">The structured data language you need to speak.</p>
        </a>

        <a href="/blog/zero-click-serp-survival" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Zero-Click SERP Survival ➔</h2>
          <p className="text-sm text-gray-600">Why interactive tools are the new blog posts.</p>
        </a>

        <a href="/blog/ai-search-gemini-2026" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Google Gemini's Impact ➔</h2>
          <p className="text-sm text-gray-600">How Gemini has shifted the search landscape.</p>
        </a>

        <a href="/blog/optimize-perplexity-ai" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Optimizing for Perplexity ➔</h2>
          <p className="text-sm text-gray-600">Mastering Retrieval-Augmented Generation.</p>
        </a>

        <a href="/blog/information-gain-generative-seo" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Information Gain Metric ➔</h2>
          <p className="text-sm text-gray-600">The metric that matters most in Generative SEO.</p>
        </a>

        <a href="/blog/micro-saas-indie-hacking-ai" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Micro-SaaS & Indie Hacking ➔</h2>
          <p className="text-sm text-gray-600">The most profitable path for solo developers.</p>
        </a>

        <a href="/blog/biggest-geo-mistakes" className="block p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-lg font-bold mb-2">Top 5 GEO Mistakes ➔</h2>
          <p className="text-sm text-gray-600">Common pitfalls developers face ranking in AI.</p>
        </a>
      </div>
    </div>
  );
}