import type { Metadata } from "next";
import Link from "next/link";
import NavbarSearch from "../components/NavbarSearch"; // Import the new search bar
import "./globals.css";

export const metadata: Metadata = {
  title: "SmallGEOTools | Dominate AI Search",
  description: "Free Generative Engine Optimization (GEO) utilities to help your brand build topical authority.",
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
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-blue-200 flex flex-col">
        
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
                
                {/* The Functional Search Bar */}
                <NavbarSearch />

                <Link href="/#tools" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition">
                  Tools
                </Link>
                <Link href="/#blog" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition">
                  Articles
                </Link>
              </div>

            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="text-sm text-gray-500 font-medium">
                &copy; {new Date().getFullYear()} SmallGEOTools.
              </div>
              
              {/* Relocated RSS Button */}
              <a 
                href="/rss.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 text-sm font-bold uppercase tracking-wide transition"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 4a16 16 0 0 1 16 16"></path>
                  <circle cx="5" cy="19" r="1"></circle>
                </svg>
                RSS Feed
              </a>
            </div>

            <div className="text-sm font-bold text-gray-900 tracking-wide uppercase">
              Built for the <span className="text-blue-600">Post-Web</span>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}