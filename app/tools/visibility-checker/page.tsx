"use client";
import { useState } from "react";

export default function VisibilityChecker() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | string>(null);

  const checkVisibility = async () => {
    if(!url) return;
    setLoading(true);
    // Simulated API call for UI mockup
    setTimeout(() => {
      setResult(`Analysis complete for ${url}. Your domain was cited in 3/10 test queries across Gemini and Perplexity.`);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="max-w-3xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-4">AI Search Visibility Checker</h1>
      <p className="mb-8 text-lg text-gray-600">Analyze how often your brand is cited in Generative AI responses.</p>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <label className="block text-sm font-semibold mb-2">Target URL</label>
        <input 
          type="text" 
          placeholder="e.g., mysite.com" 
          className="w-full p-4 border rounded-lg mb-6 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button 
          onClick={checkVisibility}
          className="w-full bg-blue-600 text-white font-bold text-lg px-6 py-4 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Analyzing Models..." : "Check Visibility"}
        </button>
      </div>

      {result && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-xl text-green-800 font-medium text-lg">
          {result}
        </div>
      )}
    </section>
  );
}