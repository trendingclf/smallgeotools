"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function EntityExtractor() {
  const [text, setText] = useState("");
  const [entities, setEntities] = useState<string[]>([]);

  const extractEntities = () => {
    // Simple mock NLP logic: finds capitalized phrases
    const words = text.match(/\b[A-Z][a-z]+(?: [A-Z][a-z]+)*\b/g);
    setEntities(words ? Array.from(new Set(words)) : []);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">NLP Entity Extractor</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Paste your text to see which proper nouns and entities an AI model is likely to extract for its Knowledge Graph.</p>
      </header>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-8">
        <textarea 
          className="w-full h-48 border border-gray-300 rounded-xl p-4 focus:ring-blue-500 outline-none resize-none mb-4"
          placeholder="Paste an article here to analyze entities..."
          value={text} onChange={(e) => setText(e.target.value)}
        />
        <button onClick={extractEntities} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">Analyze Entities</button>
      </div>

      {entities.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-4">Extracted Entities ({entities.length}):</h3>
          <div className="flex flex-wrap gap-2">
            {entities.map((ent, i) => (
              <span key={i} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm font-semibold text-blue-700">{ent}</span>
            ))}
          </div>
        </div>
      )}
      <ShareButtons title="NLP Entity Extractor" urlPath="/tools/entity-extractor" />
    </div>
  );
}