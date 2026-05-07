"use client";

import { useState } from "react";

export default function RapidIndexPinger() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [pageUrl, setPageUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Hardcoded password for Phase 1 testing
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handlePing = async () => {
    if (!pageUrl) return;
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch('/api/index-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: pageUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(`Success! Google received the ping. Expected indexing within 24 hours.`);
      } else {
        setStatus("error");
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setStatus("error");
      setMessage("Network error. Could not reach backend.");
    }
  };

  // The Login Screen
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto py-24 px-6 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Private Indexer Engine</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="Enter Master Password" 
            className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition">
            Unlock Engine
          </button>
        </form>
      </div>
    );
  }

  // The Authenticated Tool
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Rapid Index Engine</h1>
        <p className="text-gray-500 font-mono text-sm">Status: Authenticated | Daily Quota: 200 URLs</p>
      </header>

      <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-6">Push URL to Google</h2>
        
        <input 
          type="url" 
          placeholder="https://smallgeotools.com/new-page" 
          className="w-full bg-black border border-gray-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          value={pageUrl}
          onChange={(e) => setPageUrl(e.target.value)}
        />
        
        <button 
          onClick={handlePing}
          disabled={status === "loading" || !pageUrl}
          className={`w-full font-bold py-4 rounded-lg transition text-lg ${status === "loading" ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"}`}
        >
          {status === "loading" ? "Transmitting to Google..." : "FIRE PAYLOAD"}
        </button>

        {message && (
          <div className={`mt-6 p-4 rounded-lg font-mono text-sm ${status === "success" ? "bg-green-900/50 text-green-400 border border-green-800" : "bg-red-900/50 text-red-400 border border-red-800"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
}