"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function EntityDensityAnalyzer() {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  
  const calculateDensity = () => {
    if (!text || !keyword) return 0;
    const words = text.toLowerCase().split(/\s+/).length;
    const matches = (text.toLowerCase().match(new RegExp(keyword.toLowerCase(), "g")) || []).length;
    return words > 0 ? ((matches / words) * 100).toFixed(2) : 0;
  };

  const density = Number(calculateDensity());

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Entity Density Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Ensure your core entities appear frequently enough for AI models to recognize them, without triggering spam filters.</p>
      </header>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-12">
        <input type="text" placeholder="Target Entity / Keyword" className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setKeyword(e.target.value)} />
        <textarea className="w-full h-48 border p-4 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Paste your article draft here..." onChange={(e) => setText(e.target.value)} />
        
        {keyword && text && (
          <div className={`p-6 rounded-lg text-center ${density > 5 ? 'bg-red-100 text-red-800' : density > 1 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
            <span className="block text-sm font-bold uppercase tracking-wide mb-1">Entity Density Score</span>
            <span className="text-5xl font-extrabold">{density}%</span>
            <p className="mt-2 text-sm">
              {density > 5 ? "Warning: Keyword stuffing detected. Lower your density below 3%." : density >= 1 ? "Optimal density. AI models will clearly associate this text with your entity." : "Density too low. Include your entity more often for better Knowledge Graph extraction."}
            </p>
          </div>
        )}
      </div>

      {/* AdSense SEO Content Block */}
      <article className="prose max-w-none text-gray-700 bg-blue-50 p-8 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding TF-IDF and Entity Density</h2>
        <p className="mb-4">In traditional SEO, keyword density was a primary ranking factor. In the era of Generative Engine Optimization (GEO), the focus has shifted from mere "keywords" to "entities." An entity is a singular, unique, well-defined thing or concept. The Entity Density Analyzer calculates the ratio of your target concept against the total word count of your document to ensure optimal indexing by systems like Google's Knowledge Graph and Perplexity's retrieval nodes.</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">What is the Ideal Density for AI Search?</h3>
        <p className="mb-4">Modern Natural Language Processing (NLP) models are incredibly sophisticated at detecting spam. If your entity density exceeds 4-5%, the algorithm flags the content as manipulated, drastically reducing its chances of being cited in an AI-generated summary. The sweet spot for RAG (Retrieval-Augmented Generation) systems is typically between 1.5% and 3.0%. This provides enough statistical weight for the LLM's attention mechanism to recognize the primary subject without triggering quality degradation penalties.</p>
      </article>

      <ShareButtons title="Entity Density Analyzer" urlPath="/tools/entity-density" />
    </div>
  );
}