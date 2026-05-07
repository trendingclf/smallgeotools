// components/RssButton.tsx
export default function RssButton() {
  return (
    <a 
      href="/rss.xml" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 hover:bg-orange-100 border border-orange-200 text-orange-600 rounded-lg font-semibold text-sm transition-colors shadow-sm"
      aria-label="Subscribe to RSS Feed"
    >
      <svg 
        xmlns="http://www.w3.org/2005/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M4 11a9 9 0 0 1 9 9"></path>
        <path d="M4 4a16 16 0 0 1 16 16"></path>
        <circle cx="5" cy="19" r="1"></circle>
      </svg>
      RSS Feed
    </a>
  );
}