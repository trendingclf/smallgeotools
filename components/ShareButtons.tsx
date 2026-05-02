"use client";

import { useState, useEffect } from "react";

export default function ShareButtons({ title, urlPath }: { title: string, urlPath: string }) {
  const [fullUrl, setFullUrl] = useState("");

  // Get the current URL safely on the client side
  useEffect(() => {
    setFullUrl(`${window.location.origin}${urlPath}`);
  }, [urlPath]);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this free tool: ${title}`,
          url: fullUrl,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback to copying link if native share isn't supported
      navigator.clipboard.writeText(fullUrl);
      alert("Link copied to clipboard!");
    }
  };

  if (!fullUrl) return null; // Prevent hydration mismatch

  return (
    <div className="mt-8 border-t border-gray-200 pt-6">
      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Share this tool</h3>
      <div className="flex flex-wrap gap-3">
        {/* X (Twitter) Button */}
        <a 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this free ${title} from SmallGEOTools! `)}&url=${encodeURIComponent(fullUrl)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          Share on X
        </a>

        {/* LinkedIn Button */}
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Share on LinkedIn
        </a>

        {/* Reddit Button */}
        <a 
          href={`https://reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition"
        >
          Share on Reddit
        </a>

        {/* Native Mobile Share / Copy Link */}
        <button 
          onClick={handleNativeShare}
          className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-semibold rounded-lg hover:bg-gray-300 transition flex items-center gap-2"
        >
          🔗 Copy / Share
        </button>
      </div>
    </div>
  );
}