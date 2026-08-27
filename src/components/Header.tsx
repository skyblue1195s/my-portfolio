import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { 
  FileText, 
  Send, 
  Menu, 
  X, 
  Globe, 
  Sparkles,
  Printer
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onPrintClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onPrintClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'vi' ? 'Giới Thiệu' : 'About' },
    { href: '#skills', label: lang === 'vi' ? 'Kỹ Năng' : 'Skills' },
    { href: '#experience', label: lang === 'vi' ? 'Kinh Nghiệm' : 'Experience' },
    { href: '#projects', label: lang === 'vi' ? 'Dự Án' : 'Projects' },
    { href: '#education', label: lang === 'vi' ? 'Học Vấn' : 'Education' },
    { href: '#contact', label: lang === 'vi' ? 'Liên Hệ' : 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          id="header-brand-logo"
          href="#about"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-display font-bold text-lg shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            DK
          </div>
          <div>
            <span className="font-display font-bold text-white text-lg tracking-tight group-hover:text-cyan-400 transition-colors">
              Trần Khắc Điều
            </span>
            <span className="block text-xs font-mono text-cyan-400 font-medium">
              Frontend Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800/90 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-all hover:border-slate-600 shadow-sm"
            title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'vi' ? 'VI 🇻🇳' : 'EN 🇬🇧'}</span>
          </button>

          {/* Print / Export CV Button */}
          <button
            id="header-print-cv-btn"
            onClick={onPrintClick}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-sm group"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>{lang === 'vi' ? 'In / PDF CV' : 'Print CV'}</span>
          </button>

          {/* Contact Direct CTA */}
          <a
            id="header-contact-cta"
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'vi' ? 'Liên hệ' : 'Hire Me'}</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden bg-[#0b0f19]/98 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2 mt-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onPrintClick();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-cyan-400 py-2"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Tải / In bản PDF CV' : 'Print / Export PDF'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
