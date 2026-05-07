"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function AITrafficRiskCalculator() {
  const [traffic, setTraffic] = useState<number>(10000);
  const [infoPercent, setInfoPercent] = useState<number>(70);
  const [industry, setIndustry] = useState<string>("medium");

  const calculateRisk = () => {
    let multiplier = 0.5;
    if (industry === "low") multiplier = 0.2;
    if (industry === "high") multiplier = 0.8;

    const lostClicks = Math.round(traffic * (infoPercent / 100) * multiplier);
    const riskPercentage = traffic > 0 ? Math.round((lostClicks / traffic) * 100) : 0;
    
    return { lostClicks, riskPercentage };
  };

  const { lostClicks, riskPercentage } = calculateRisk();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AI Search Traffic Risk Calculator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Calculate exactly how much organic traffic your website will lose to AI overviews, ChatGPT, and Perplexity in the next 12 months.
        </p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12 grid md:grid-cols-2 gap-10">
        
        {/* Input Form */}
        <div className="space-y-6 border-r md:pr-10 border-gray-200">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Current Monthly Organic Traffic</label>
            <input 
              type="number" 
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
              value={traffic} 
              onChange={(e) => setTraffic(Number(e.target.value))} 
            />
          </div>

          <div>
            <label className="flex justify-between text-gray-700 font-bold mb-2">
              <span>% of Informational Content</span>
              <span className="text-blue-600">{infoPercent}%</span>
            </label>
            <input 
              type="range" min="0" max="100" 
              className="w-full cursor-pointer accent-blue-600" 
              value={infoPercent} 
              onChange={(e) => setInfoPercent(Number(e.target.value))} 
            />
            <p className="text-xs text-gray-500 mt-1">Blogs and "How-to" guides are at the highest risk.</p>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Industry AI Adoption Level</label>
            <select 
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="low">Low (E-commerce, Local Services)</option>
              <option value="medium">Medium (Health, Finance, B2C)</option>
              <option value="high">High (Tech, SaaS, Coding, Marketing)</option>
            </select>
          </div>
        </div>

        {/* Results Panel */}
        <div className="flex flex-col justify-center text-center">
          <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 mb-2">Estimated Monthly Clicks Lost to AI</h3>
          <div className="text-6xl font-extrabold text-red-600 mb-2">
            {lostClicks.toLocaleString()}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4 mt-6 overflow-hidden">
            <div className={`h-4 rounded-full ${riskPercentage > 50 ? 'bg-red-500' : riskPercentage > 20 ? 'bg-yellow-400' : 'bg-green-500'}`} style={{ width: `${riskPercentage}%` }}></div>
          </div>
          <p className="text-gray-700 font-medium">You are at risk of losing <span className="font-bold">{riskPercentage}%</span> of your traffic.</p>

          <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-900 font-semibold mb-2">How to recover this traffic:</p>
            <p className="text-xs text-blue-800">You must pivot from traditional SEO to Generative Engine Optimization (GEO). Use our free toolkit to force AI bots to cite your brand.</p>
            <a href="/#tools" className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition">
              View Free GEO Tools
            </a>
          </div>
        </div>
      </div>

      {/* SEO Content Block for Google Indexing & AdSense */}
      <article className="prose max-w-none text-gray-700 bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why is AI Stealing Organic Traffic?</h2>
        <p className="mb-4">With the launch of AI Overviews, ChatGPT Search, and Perplexity, the traditional "10 blue links" search engine model is dying. When a user asks a question, Large Language Models (LLMs) now read the top search results, summarize the answer, and present it directly to the user. This creates a "Zero-Click Search" environment where the user gets their answer without ever clicking on your website.</p>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">Which Websites are at the Highest Risk?</h3>
        <p className="mb-4">Not all websites will suffer equally. The AI Traffic Risk Calculator uses three primary variables to determine your exposure:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Informational Content:</strong> If your site relies heavily on top-of-funnel blog posts (e.g., "What is a CRM?"), you are at extreme risk. AI answers these queries perfectly. Transactional pages (e.g., "Buy CRM software") are currently safer.</li>
          <li><strong>Industry Adoption:</strong> Tech, coding, and marketing audiences have rapidly adopted AI search. Local plumbing businesses have not.</li>
          <li><strong>Current Search Volume:</strong> The higher your current reliance on Google organic traffic, the harder the mathematical drop will hit your bottom line.</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-2 mt-6">How to Survive the Zero-Click Era</h3>
        <p className="mb-4">You cannot stop AI from answering questions, but you can control whether it cites you as the source. Generative Engine Optimization (GEO) is the practice of structuring your content, establishing your entity authority, and increasing your Information Gain so that AI models are mathematically forced to cite your brand in their answers. Use the SmallGEOTools free suite of utilities to audit your site's RAG-readiness today.</p>
      </article>

      <ShareButtons title="AI Search Traffic Risk Calculator" urlPath="/tools/ai-traffic-risk-calculator" />
    </div>
  );
}