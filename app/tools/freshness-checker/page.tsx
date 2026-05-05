"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function FreshnessChecker() {
  const [dateStr, setDateStr] = useState("");

  const calculateDecay = () => {
    if (!dateStr) return null;
    const pubDate = new Date(dateStr);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - pubDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let score = 100 - Math.floor(diffDays / 7); // Loses 1 point per week
    if (score < 10) score = 10;
    
    return { days: diffDays, score };
  };

  const result = calculateDecay();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Content Freshness & Decay Scorer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI models like Perplexity favor real-time, updated data. Calculate your content's decay score.</p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12 text-center">
        <label className="block text-gray-700 font-bold mb-4">When was your article last updated?</label>
        <input type="date" className="border border-gray-300 p-3 rounded-lg w-full max-w-xs outline-none focus:ring-2 focus:ring-blue-500 mb-6" onChange={(e) => setDateStr(e.target.value)} />
        
        {result && (
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg max-w-md mx-auto">
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-2">AI Freshness Score</h3>
            <div className={`text-6xl font-extrabold mb-2 ${result.score > 80 ? 'text-green-600' : result.score > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
              {result.score}/100
            </div>
            <p className="text-gray-600">Updated {result.days} days ago.</p>
            <p className="text-sm text-gray-500 mt-4">
              {result.score > 80 ? "Highly relevant for real-time RAG models." : "Content is decaying. Consider adding new statistics or current year updates to trigger re-indexing."}
            </p>
          </div>
        )}
      </div>

      {/* AdSense SEO Content Block */}
      <article className="prose max-w-none text-gray-700 bg-blue-50 p-8 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Content Freshness in GEO</h2>
        <p className="mb-4">Information Retrieval systems operate on a concept known as "Content Decay." When an article is published, it hits its maximum relevancy score. Over time, as new data, statistics, and global events occur, the mathematical probability that your article contains the absolute best answer decreases. Generative AI models, specifically those connected to the live internet like Google Gemini and Perplexity AI, heavily weight the `<lastmod>` tag in your XML sitemap and the structured date metadata on your page.</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">How to Combat Content Decay</h3>
        <p className="mb-4">To maintain a high AI Freshness Score, webmasters should conduct quarterly content audits. This does not mean simply changing the publish date—doing so without altering the content is considered spam by search engines. Instead, improve the Information Gain by adding a new paragraph reflecting recent industry changes, updating outdated statistics with current-year data, or expanding the FAQ section based on new user queries. Consistently refreshed content is cited exponentially more often by Large Language Models.</p>
      </article>

      <ShareButtons title="Content Freshness Scorer" urlPath="/tools/freshness-checker" />
    </div>
  );
}