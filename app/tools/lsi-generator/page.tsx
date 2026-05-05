"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function LSIGenerator() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const generateLSI = () => {
    if(!keyword) return;
    const base = keyword.toLowerCase();
    setResults([
      `${base} meaning`, `what is ${base}`, `${base} vs traditional`, 
      `how to optimize for ${base}`, `best ${base} tools`, `${base} examples`,
      `${base} strategies 2025`, `generative ai and ${base}`, `entity seo for ${base}`
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">LSI & Semantic Keyword Generator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find semantically related entities to include in your content to increase Information Gain.</p>
      </header>

      <div className="flex gap-4 mb-8">
        <input type="text" className="flex-1 border p-3 rounded-lg outline-none" placeholder="Enter seed keyword (e.g., GEO)" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={generateLSI} className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700">Generate</button>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((res, i) => (
             <div key={i} className="bg-white p-4 border border-gray-200 rounded-lg text-center font-medium text-gray-700 shadow-sm">{res}</div>
          ))}
        </div>
      )}
      <ShareButtons title="Semantic Keyword Generator" urlPath="/tools/lsi-generator" />
    </div>
  );
}