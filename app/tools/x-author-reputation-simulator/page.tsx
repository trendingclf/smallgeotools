"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthorReputationSimulator() {
  const [followers, setFollowers] = useState<number | "">("");
  const [following, setFollowing] = useState<number | "">("");
  const [outOfNetwork, setOutOfNetwork] = useState(50);

  const calculateReputation = () => {
    if (!followers || !following || following === 0) return { score: 0, tier: "Unknown", color: "text-gray-400" };
    
    let baseScore = 40;
    const ratio = Number(followers) / Number(following);
    
    // Follower Ratio Math
    if (ratio < 0.6) baseScore -= 20; // Mass follow penalty
    if (ratio > 2.0) baseScore += 15;
    if (ratio > 10.0) baseScore += 25;

    // Out of Network Interaction (The "For You" trigger)
    baseScore += (outOfNetwork * 0.35);

    const finalScore = Math.min(Math.max(Math.round(baseScore), 1), 100);
    
    let tier = "Normal";
    let color = "text-amber-500";
    if (finalScore < 30) { tier = "Spam / Restricted"; color = "text-rose-500"; }
    else if (finalScore > 75) { tier = "High Authority (Grok Trusted)"; color = "text-emerald-500"; }

    return { score: finalScore, tier, color };
  };

  const rep = calculateReputation();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <Link href="/#tools" className="text-indigo-600 font-semibold text-sm hover:underline mb-6 inline-block">
        &larr; Back to Toolkit
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">Author Reputation (Tweepcred) Simulator</h1>
        <p className="text-lg text-gray-600">Simulate how X assigns your account an authority score based on follower graphs and interaction metrics.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Followers</label>
              <input type="number" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" value={followers} onChange={(e) => setFollowers(Number(e.target.value))} placeholder="e.g. 5000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Following</label>
              <input type="number" className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" value={following} onChange={(e) => setFollowing(Number(e.target.value))} placeholder="e.g. 500" />
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-2 flex justify-between">
              <span>Out-of-Network Interactions</span>
              <span className="text-indigo-600">{outOfNetwork}%</span>
            </label>
            <input type="range" min="0" max="100" value={outOfNetwork} onChange={(e) => setOutOfNetwork(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" />
            <p className="text-xs text-gray-500 mt-2">Percentage of replies coming from accounts that do not follow you. High % triggers viral distribution.</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Simulated Tweepcred Score</h2>
          
          <div className={`text-8xl font-black tracking-tighter mb-4 ${rep.color}`}>
            {followers ? rep.score : "00"}
          </div>
          
          {followers ? (
            <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
              <span className={`text-sm font-bold uppercase tracking-wide ${rep.color}`}>
                Tier: {rep.tier}
              </span>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">Enter your metrics to calculate authority.</p>
          )}
        </div>
      </div>
    </div>
  );
}