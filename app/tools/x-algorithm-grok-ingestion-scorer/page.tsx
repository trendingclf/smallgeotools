"use client";

import { useState } from "react";
import Link from "next/link";

export default function GrokIngestionScorer() {
  const [postText, setPostText] = useState("");
  const [hasMedia, setHasMedia] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  const analyzePost = () => {
    let score = 50; 
    let feedback = [];
    const hasLink = /(https?:\/\/[^\s]+)/g.test(postText);
    const charCount = postText.length;

    if (charCount === 0) return { score: 0, feedback: [{ type: "info", text: "Paste a draft to analyze algorithmic weight." }] };

    if (hasLink) {
      score = score * 0.5;
      feedback.push({ type: "negative", text: "External link detected (-50% reach penalty). X limits outbound traffic." });
    } else {
      score += 15;
      feedback.push({ type: "positive", text: "Zero external links. Algorithmic retention boost applied." });
    }

    if (charCount > 200) {
      score += 15;
      feedback.push({ type: "positive", text: "High character count. Favored for Grok LLM context ingestion." });
    } else if (charCount > 0) {
      feedback.push({ type: "warning", text: "Short post. Provides limited semantic data for AI training." });
    }

    if (hasMedia) {
      score = score * 1.2;
      feedback.push({ type: "positive", text: "Media attached. 1.2x multiplier for visual dwell time." });
    }

    if (isPremium) {
      score = score * 1.5;
      feedback.push({ type: "positive", text: "X Premium status. Network amplification multiplier active." });
    }

    return { score: Math.min(Math.round(score), 100), feedback };
  };

  const results = analyzePost();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <Link href="/#tools" className="text-indigo-600 font-semibold text-sm hover:underline mb-6 inline-block">
        &larr; Back to Toolkit
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">X Algorithm & Grok Ingestion Scorer</h1>
        <p className="text-lg text-gray-600 max-w-2xl">Simulate the open-source X algorithm. Optimize your posts for maximum timeline reach and Grok AI indexing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Draft Your Post</label>
            <textarea
              className="w-full h-48 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none transition"
              placeholder="What is happening?!"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <div className="text-right text-xs text-gray-500 mt-2 font-medium">{postText.length} characters</div>
          </div>
          <div className="flex gap-6 p-4 bg-indigo-50 border border-indigo-100 rounded-xl">
            <label className="flex items-center gap-2 text-sm font-semibold text-indigo-900 cursor-pointer">
              <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4" checked={hasMedia} onChange={(e) => setHasMedia(e.target.checked)} />
              Includes Media
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold text-indigo-900 cursor-pointer">
              <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500 w-4 h-4" checked={isPremium} onChange={(e) => setIsPremium(e.target.checked)} />
              X Premium User
            </label>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Ingestion Probability</h2>
          <div className="flex items-end gap-2 mb-4">
            <span className={`text-7xl font-black tracking-tighter ${results.score > 80 ? 'text-emerald-500' : results.score > 50 ? 'text-amber-500' : 'text-rose-500'}`}>
              {results.score}
            </span>
            <span className="text-2xl text-gray-400 font-bold mb-2">/ 100</span>
          </div>
          
          <div className="w-full bg-gray-100 rounded-full h-4 mb-8 overflow-hidden border border-gray-200">
            <div className={`h-full transition-all duration-500 ${results.score > 80 ? 'bg-emerald-500' : results.score > 50 ? 'bg-amber-400' : 'bg-rose-500'}`} style={{ width: `${results.score}%` }}></div>
          </div>

          <h3 className="text-sm font-bold text-gray-900 mb-3">Heavy Ranker Diagnostics</h3>
          <ul className="space-y-3 flex-grow">
            {results.feedback.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                {item.type === "positive" && <span className="text-emerald-500 text-lg leading-none">✅</span>}
                {item.type === "negative" && <span className="text-rose-500 text-lg leading-none">🚨</span>}
                {item.type === "warning" && <span className="text-amber-500 text-lg leading-none">⚠️</span>}
                {item.type === "info" && <span className="text-blue-500 text-lg leading-none">ℹ️</span>}
                <span className={item.type === "negative" ? "font-semibold text-rose-700" : "text-gray-700 font-medium"}>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}