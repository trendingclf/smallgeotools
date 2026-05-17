"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';

function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  // Sync the input field if the URL changes
  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    
    // If they type, append the query to the URL. If empty, clear it.
    if (val) {
      router.push(`/?q=${encodeURIComponent(val)}`);
    } else {
      // If they clear the search while on a tool page, keep them on that tool page.
      // If they clear it on the homepage, reset the homepage.
      router.push(pathname === '/' ? '/' : pathname);
    }
  };

  return (
    <div className="hidden md:block relative group">
      <svg 
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input 
        type="text" 
        placeholder="Search tools & articles..." 
        value={query}
        onChange={handleSearch}
        className="pl-9 pr-4 py-1.5 bg-gray-100 border border-transparent rounded-md text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 w-64 transition-all outline-none" 
      />
    </div>
  );
}

// Next.js requires useSearchParams to be wrapped in a Suspense boundary
export default function NavbarSearch() {
  return (
    <Suspense fallback={<div className="w-64 hidden md:block"></div>}>
      <SearchInput />
    </Suspense>
  );
}