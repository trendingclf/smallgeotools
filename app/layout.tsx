import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmallGEOTools | Dominate AI Search",
  description: "Free Generative Engine Optimization (GEO) utilities to help your brand build topical authority and get cited by Gemini, ChatGPT, and Perplexity.",
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
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900 selection:bg-blue-200">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}