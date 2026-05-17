"use client";

import { useState } from "react";
import Link from "next/link";

export default function ZeroClickChecker() {
  const [content, setContent] = useState("");

  const analyzeLinks = () => {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const links = content.match(linkRegex) || [];
    const penaltyPerLink = 40; 
    const totalPenalty = Math.min(links.length * penaltyPerLink, 95);
    const retainedReach = 100 - totalPenalty;

    return { count: links.length, reach: retainedReach };
  };

  const results = analyzeLinks();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <Link href="/#tools" className="text-indigo-600 font-semibold text-sm hover:underline mb-6 inline-block">
        &larr; Back to Toolkit
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Zero-Click Penalty Checker</h1>
        <p className="text-lg text-gray-600">Discover exactly how much algorithmic reach your post will lose by including outbound links.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 outline-none resize-none transition"
          placeholder="Paste your social media copy here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {content.length > 0 && (
        <div className={`p-8 rounded-2xl border-2 transition-all ${results.count > 0 ? 'bg-rose-50 border-rose-200' : 'bg-emerald-50 border-emerald-200'}`}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-sm font-bold uppercase tracking-wider mb-1 text-gray-500">Estimated Reach Retained</div>
              <div className={`text-6xl font-black ${results.count > 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                {results.reach}%
              </div>
            </div>
            
            <div className="flex-1 space-y-3">
              {results.count > 0 ? (
                <>
                  <h3 className="text-xl font-bold text-rose-900">🚨 Severe Penalty Detected</h3>
                  <p className="text-rose-800 text-sm font-medium">You included {results.count} outbound link(s). Modern algorithms aggressively de-boost posts that pull users away from their platform.</p>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-rose-100 mt-2">
                    <span className="font-bold text-gray-900 text-sm block mb-1">GEO Fix Strategy:</span>
                    <p className="text-sm text-gray-600">Remove the link from the main post. Rewrite the post to deliver the core value natively, then drop the link in the first reply (the "Link in Bio/Thread" method).</p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-emerald-900">✅ Zero-Click Optimized</h3>
                  <p className="text-emerald-800 text-sm font-medium">No outbound links detected. The algorithm will classify this as "native content" and distribute it to a significantly wider audience.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}