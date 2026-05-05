"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function SitemapPromptGenerator() {
  const [domain, setDomain] = useState("");
  const [audience, setAudience] = useState("");

  const prompt = domain ? `Act as a Generative Engine Optimization (GEO) expert. I am providing the structure of my website, ${domain}. My target audience is ${audience || "[Target Audience]"}. Based on standard AI retrieval algorithms, analyze my domain's topical authority. Identify any content gaps, suggest 5 new high-Information-Gain topics I should write about, and tell me which existing pages I should link together to form a stronger entity knowledge graph.` : "";

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Sitemap to LLM Prompt Converter</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Generate the perfect AI prompt to audit your website's topical authority using ChatGPT or Claude.</p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Your Website (e.g., smallgeotools.com)" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setDomain(e.target.value)} />
          <input type="text" placeholder="Target Audience (e.g., SEO developers)" className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setAudience(e.target.value)} />
        </div>
        <div className="bg-gray-900 rounded-xl p-6">
          <h3 className="text-gray-300 text-sm font-semibold mb-4 uppercase">Your Custom Prompt</h3>
          <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">{prompt || "Fill out the fields above to generate your prompt."}</pre>
        </div>
      </div>

      {/* AdSense SEO Content Block */}
      <article className="prose max-w-none text-gray-700 bg-blue-50 p-8 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Sitemap to LLM Prompt Converter</h2>
        <p className="mb-4">Generative Engine Optimization (GEO) requires a deep understanding of how Large Language Models (LLMs) perceive your website's architecture. To use this tool, simply enter your primary domain name and your target audience demographic. The tool instantly constructs a highly engineered prompt designed specifically for advanced models like OpenAI's ChatGPT (GPT-4o) or Anthropic's Claude 3.5 Sonnet.</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Why Website Architecture Matters for AI</h3>
        <p className="mb-4">Unlike traditional Google Search bots that crawl links page by page, AI answer engines attempt to build a semantic map of your entity. By feeding this generated prompt into an LLM, you force the AI to evaluate your website's "Topical Map." It will identify orphaned pages, recommend internal linking structures, and highlight missing concepts that your competitors are already covering. This is the fastest way to audit your site for Information Gain.</p>
      </article>

      <ShareButtons title="Sitemap to LLM Prompt Converter" urlPath="/tools/sitemap-prompt" />
    </div>
  );
}