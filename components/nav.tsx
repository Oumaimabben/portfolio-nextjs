'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from "@/app/context/language-context";
export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
const navItems = [
  { href: '#', label: t.nav.home },
  { href: '#projects', label: t.nav.projects },
  { href: '#skills', label: t.nav.skills },
  { href: '#contact', label: t.nav.contact }
];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-accent/20 shadow-lg shadow-accent/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent hover:from-accent/90 hover:to-accent/60 transition-all duration-300">
          BNO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/60 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-2 ml-6 border border-accent/30 rounded-full px-2 py-1">
  <button
    onClick={() => setLang("fr")}
    className={`text-xs px-2 py-1 rounded-full transition ${
      lang === "fr" ? "bg-accent text-white" : "text-muted-foreground"
    }`}
  >
    FR
  </button>

  <button
    onClick={() => setLang("en")}
    className={`text-xs px-2 py-1 rounded-full transition ${
      lang === "en" ? "bg-accent text-white" : "text-muted-foreground"
    }`}
  >
    EN
  </button>
</div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-accent/20 bg-card/95 backdrop-blur-sm animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-muted-foreground hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
