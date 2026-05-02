import ShareButtons from "../../../components/ShareButtons";
"use client";

import { useState } from "react";

export default function SchemaGenerator() {
  const [brandName, setBrandName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [founder, setFounder] = useState("");

  const generatedSchema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "${brandName || "[Your Brand Name]"}",
  "url": "${url || "[https://yourwebsite.com]"}",
  "description": "${description || "[A brief description of what you do]"}",
  "founder": {
    "@type": "Person",
    "name": "${founder || "[Founder Name]"}"
  },
  "sameAs": [
    "https://twitter.com/yourprofile",
    "https://linkedin.com/company/yourcompany"
  ]
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedSchema);
    alert("Schema copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">JSON-LD Entity Schema Generator</h1>
      <p className="text-xl text-gray-600 mb-10">
        AI answer engines rely on structured data to build their Knowledge Graphs. Fill out the fields below to instantly generate GEO-optimized Organization schema for your website.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Input Form */}
        <div className="space-y-6 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., SmallGEOTools"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
            <input 
              type="url" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., https://smallgeotools.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">One-Sentence Description</label>
            <textarea 
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none h-24"
              placeholder="We build free generative engine optimization utilities."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Founder Name (Optional)</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g., John Doe"
              value={founder}
              onChange={(e) => setFounder(e.target.value)}
            />
          </div>
        </div>

        {/* Output Display */}
        <div className="bg-gray-900 rounded-xl p-6 relative shadow-lg">
          <h3 className="text-gray-300 text-sm font-semibold mb-4 uppercase tracking-wider">Generated JSON-LD</h3>
          <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap font-mono">
            {generatedSchema}
          </pre>
          <button 
            onClick={copyToClipboard}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Copy Code
          </button>
        </div>
      </div>
<ShareButtons title="JSON-LD Schema Generator" urlPath="/tools/schema-generator"/>
    </div>
  );
}