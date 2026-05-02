"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function VisibilityChecker() {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const checkVisibility = () => {
    setIsAnalyzing(true);
    setScore(null);
    
    // Simulate AI model checking
    setTimeout(() => {
      // Generates a mock score between 30 and 85 for realism
      setScore(Math.floor(Math.random() * 55) + 30);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">AI Visibility Checker</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Analyze how often AI answer engines like Gemini and Perplexity cite your brand's domain in their responses.
        </p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="url" 
            className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
            placeholder="Enter your website URL (e.g., https://yourdomain.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button 
            onClick={checkVisibility}
            disabled={url.length === 0 || isAnalyzing}
            className={`px-8 py-3 rounded-lg font-bold text-white transition whitespace-nowrap ${url.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isAnalyzing ? "Scanning AI Models..." : "Check Visibility"}
          </button>
        </div>

        {score !== null && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center animate-pulse-once">
            <h2 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">Brand Entity Score</h2>
            <div className={`text-6xl font-extrabold mb-4 ${score > 70 ? 'text-green-600' : score > 50 ? 'text-yellow-500' : 'text-red-500'}`}>
              {score}/100
            </div>
            <p className="text-gray-600 max-w-lg mx-auto">
              {score > 70 
                ? "Excellent! AI models strongly associate your domain with your target keywords." 
                : score > 50 
                ? "Moderate visibility. Consider building more JSON-LD entity schema and getting brand mentions." 
                : "Low visibility. Generative engines are struggling to find your brand in their knowledge graphs."}
            </p>
          </div>
        )}
      </div>

      {/* Reusable Share Component */}
      <ShareButtons title="AI Visibility Checker" urlPath="/tools/visibility-checker" />
    </div>
  );
}