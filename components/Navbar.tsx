"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-blue-700 tracking-tight" aria-label="SmallGEOTools Home">
              SmallGEOTools
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav 
            className="hidden md:flex space-x-8" 
            itemScope 
            itemType="http://schema.org/SiteNavigationElement"
          >
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition" itemProp="url">
              <span itemProp="name">Home</span>
            </Link>
            <Link href="/#tools" className="text-gray-700 hover:text-blue-600 font-medium transition" itemProp="url">
              <span itemProp="name">Free Tools</span>
            </Link>
            <Link href="/#blog" className="text-gray-700 hover:text-blue-600 font-medium transition" itemProp="url">
              <span itemProp="name">GEO Guides</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-md"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
            <Link href="/#tools" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Free Tools</Link>
            <Link href="/#blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">GEO Guides</Link>
          </div>
        </div>
      )}
    </header>
  );
}