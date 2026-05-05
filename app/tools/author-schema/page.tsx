"use client";

import { useState } from "react";
import ShareButtons from "../../../components/ShareButtons";

export default function AuthorSchemaBuilder() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [social, setSocial] = useState("");

  const schema = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "${name || "[Author Name]"}",
  "jobTitle": "${job || "[Job Title]"}",
  "sameAs": [
    "${social || "https://linkedin.com/in/author"}"
  ]
}`;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Author Schema Builder</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Build Person schema to prove your E-E-A-T and help LLMs connect your name to your expertise.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Job Title (e.g., SEO Expert)" className="w-full border p-2 rounded" onChange={(e) => setJob(e.target.value)} />
          <input type="url" placeholder="LinkedIn URL" className="w-full border p-2 rounded" onChange={(e) => setSocial(e.target.value)} />
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <pre className="text-green-400 text-sm overflow-x-auto whitespace-pre-wrap font-mono">{schema}</pre>
        </div>
      </div>
      <ShareButtons title="Author Schema Builder" urlPath="/tools/author-schema" />
    </div>
  );
}