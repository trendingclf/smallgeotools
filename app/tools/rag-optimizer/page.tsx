"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function RAGOptimizer() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const getScore = (val: string, optimalMin: number, optimalMax: number) => {
    if (val.length === 0) return { text: "Empty", color: "text-red-500" };
    if (val.length < optimalMin) return { text: "Too Short", color: "text-yellow-500" };
    if (val.length > optimalMax) return { text: "Too Long", color: "text-red-500" };
    return { text: "Optimal for AI", color: "text-green-600" };
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">RAG Meta Optimizer</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Optimize your Title and Description tags specifically for Retrieval-Augmented Generation engines.</p>
      </header>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
        <div>
          <label className="flex justify-between font-bold text-gray-700 mb-2">
            <span>Title Tag (Focus on Entity Clarity)</span>
            <span className={getScore(title, 40, 60).color}>{title.length}/60 chars - {getScore(title, 40, 60).text}</span>
          </label>
          <input type="text" className="w-full border border-gray-300 rounded p-3 outline-none focus:ring-2 focus:ring-blue-500" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        
        <div>
          <label className="flex justify-between font-bold text-gray-700 mb-2">
            <span>Meta Description (Include Direct Answers)</span>
            <span className={getScore(desc, 120, 160).color}>{desc.length}/160 chars - {getScore(desc, 120, 160).text}</span>
          </label>
          <textarea className="w-full border border-gray-300 rounded p-3 outline-none focus:ring-2 focus:ring-blue-500 h-24" value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
      </div>
      <ShareButtons title="RAG Meta Optimizer" urlPath="/tools/rag-optimizer" />
    </div>
  );
}