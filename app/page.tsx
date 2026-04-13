export default function Home() {
  return (
    <div className="space-y-10 py-10">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-900">Dominate AI Search</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Free Generative Engine Optimization (GEO) utilities to help your brand get cited by Gemini, ChatGPT, and Perplexity.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {/* Tool Card */}
        <a href="/tools/visibility-checker" className="block p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition border-blue-100">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">AI Visibility Checker ➔</h2>
          <p className="text-gray-600">Enter your domain and see how often AI models are citing your brand in their answers.</p>
        </a>

        {/* Blog Card 1 */}
        <a href="/blog/what-is-geo" className="block p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-2">What is GEO? ➔</h2>
          <p className="text-gray-600">Read our definitive guide on why traditional SEO is dying and how to adapt your site for LLMs.</p>
        </a>

        {/* Blog Card 2 */}
        <a href="/blog/json-ld-entity-seo" className="block p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-2">JSON-LD & Entity SEO ➔</h2>
          <p className="text-gray-600">Learn the secret structured data language you need to speak to get cited by AI engines.</p>
        </a>

        {/* Blog Card 3 */}
        <a href="/blog/zero-click-serp-survival" className="block p-8 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold mb-2">Surviving Zero-Click SERPs ➔</h2>
          <p className="text-gray-600">Why interactive tools and micro-utilities are the new blog posts in the 2026 search landscape.</p>
        </a>
      </div>
    </div>
  );
}