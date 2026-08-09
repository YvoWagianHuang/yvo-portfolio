"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  lang: string;
  dict: any;
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: `/${lang}`, label: dict.nav.home },
    { path: `/${lang}/about`, label: dict.nav.about },
    { path: `/${lang}/resources`, label: dict.nav.resources },
    { path: `/${lang}/blog`, label: dict.nav.blog },
    { path: `/${lang}/contact`, label: dict.nav.contact },
  ];

  // Helper to strip the language prefix for the switcher link
  const getPathWithoutLang = () => {
    const segments = pathname.split('/');
    if (segments.length > 1 && ['zh', 'en', 'fi'].includes(segments[1])) {
      segments.splice(1, 1);
    }
    return segments.join('/') || '/';
  };

  const switchLangPath = `${dict.common.switchLangPath}${getPathWithoutLang()}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-gray-900">
                {lang === "zh" ? "伊理教育" : "YiliEdTech"}
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => {
              // Exact match for home, startsWith for others to keep active state on subpages
              const isActive = item.path === `/${lang}` ? pathname === item.path : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={switchLangPath}
              className="ml-4 px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {dict.common.switchLang}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = item.path === `/${lang}` ? pathname === item.path : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={switchLangPath}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            >
              {dict.common.switchLang}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
