import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"; // Added the import here!

export const metadata: Metadata = {
  title: "SmallGEOTools - Free Generative Engine Optimization Utilities",
  description: "Improve your AI search visibility with our free GEO tracking and optimization tools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SmallGEOTools",
    "url": "https://smallgeotools.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {/* The new Navbar component */}
        <Navbar/>
        
        <main className="max-w-5xl mx-auto p-6 min-h-screen">{children}</main>
        
        <footer className="p-10 border-t mt-10 text-center text-sm text-gray-500 bg-white">
          © 2026 SmallGEOTools. Built for the Post-Search Web.
        </footer>
      </body>
    </html>
  );
}