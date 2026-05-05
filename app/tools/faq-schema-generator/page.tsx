"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function FAQSchemaGenerator() {
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  
  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const generatedSchema = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    ${faqs.filter(f => f.question && f.answer).map(f => `{
      "@type": "Question",
      "name": "${f.question.replace(/"/g, '\\"')}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "${f.answer.replace(/"/g, '\\"')}"
      }
    }`).join(",\n    ")}
  ]
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    alert("FAQ Schema copied to clipboard!");
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">FAQ Schema Generator</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Generate perfectly formatted JSON-LD FAQ schema to help LLMs instantly extract your answers.</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <input 
                type="text" placeholder="Question?" className="w-full border border-gray-300 rounded-lg p-2 mb-3 outline-none"
                value={faq.question} onChange={(e) => updateFaq(index, "question", e.target.value)}
              />
              <textarea 
                placeholder="Answer..." className="w-full border border-gray-300 rounded-lg p-2 outline-none h-20"
                value={faq.answer} onChange={(e) => updateFaq(index, "answer", e.target.value)}
              />
            </div>
          ))}
          <button onClick={addFaq} className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-lg border border-gray-300 transition">+ Add Another Q&A</button>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-gray-300 text-sm font-semibold mb-4 uppercase">Generated JSON-LD</h3>
            <pre className="text-green-400 text-xs overflow-x-auto whitespace-pre-wrap font-mono">{generatedSchema}</pre>
          </div>
          <button onClick={copyToClipboard} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">Copy Code</button>
        </div>
      </div>
      <ShareButtons title="FAQ Schema Generator" urlPath="/tools/faq-schema-generator" />
    </div>
  );
}