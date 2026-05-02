"use client";

import { useState } from "react";

export default function InformationGainAnalyzer() {
  const [content, setContent] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    wordCount: number;
    statsCount: number;
    quotesCount: number;
    feedback: string[];
  } | null>(null);

  const analyzeContent = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const words = content.trim().split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
      
      // Look for numbers/percentages (statistics)
      const statsMatch = content.match(/\d+(\.\d+)?%?/g);
      const statsCount = statsMatch ? statsMatch.length : 0;

      // Look for quotation marks (expert quotes)
      const quotesMatch = content.match(/["'“‘].*?["'”’]/g);
      const quotesCount = quotesMatch ? quotesMatch.length : 0;

      let score = 0;
      const feedback = [];

      // Scoring Logic
      if (wordCount > 300) {
        score += 30;
        feedback.push("✅ Good length for context parsing.");
      } else {
        score += 10;
        feedback.push("⚠️ Too short. AI engines prefer comprehensive answers.");
      }

      if (statsCount > 2) {
        score += 40;
        feedback.push("✅ High density of statistics. LLMs love hard data.");
      } else {
        score += 10;
        feedback.push("⚠️ Add more numbers or percentages to increase Information Gain.");
      }

      if (quotesCount > 0) {
        score += 30;
        feedback.push("✅ Contains quotes. Great for entity association.");
      } else {
        feedback.push("⚠️ Consider adding direct quotes from experts.");
      }

      setResults({
        score: Math.min(score, 100),
        wordCount,
        statsCount,
        quotesCount,
        feedback
      });
      setIsAnalyzing(false);
    }, 800); // Simulate processing time
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Information Gain Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Generative search engines reward unique data. Paste your draft below to analyze its Information Gain and AI citation readiness.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Area */}
        <div className="lg:col-span-2 space-y-4">
          <textarea 
            className="w-full h-96 border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 resize-none shadow-sm"
            placeholder="Paste your article draft here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button 
            onClick={analyzeContent}
            disabled={content.length === 0 || isAnalyzing}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${content.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isAnalyzing ? "Analyzing Vectors..." : "Analyze Content"}
          </button>
        </div>

        {/* Results Dashboard */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Analysis Report</h2>
          
          {results ? (
            <div className="space-y-6">
              <div className="text-center pb-6 border-b border-gray-200">
                <span className="block text-sm text-gray-500 mb-1">Gain Score</span>
                <span className={`text-5xl font-extrabold ${results.score > 70 ? 'text-green-600' : results.score > 40 ? 'text-yellow-500' : 'text-red-500'}`}>
                  {results.score}/100
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <span className="block text-2xl font-bold text-gray-800">{results.wordCount}</span>
                  <span className="text-xs text-gray-500 uppercase">Words</span>
                </div>
                <div className="bg-white p-3 rounded border border-gray-200">
                  <span className="block text-2xl font-bold text-gray-800">{results.statsCount}</span>
                  <span className="text-xs text-gray-500 uppercase">Data Points</span>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h3 className="text-sm font-bold text-gray-900">Actionable Feedback:</h3>
                <ul className="space-y-2">
                  {results.feedback.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700 bg-white p-2 rounded border border-gray-100 shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-400 py-12">
              <p>Paste your content and click analyze to see your score.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}