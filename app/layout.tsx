import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmallGEOTools | Dominate AI Search",
  description: "13 Free Generative Engine Optimization (GEO) utilities.",
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-blue-200">
        
        {/* GLOBAL NAVIGATION BAR */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  SmallGEO<span className="text-blue-600">Tools</span>
                </Link>
              </div>
              <div className="flex items-center space-x-6">
                <Link href="/#tools" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition">
                  Tools
                </Link>
                <Link href="/#blog" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition">
                  Articles
                </Link>
                <a 
                  href="/rss.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-md text-xs font-bold uppercase tracking-wide border border-orange-200 transition"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
                  RSS
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}