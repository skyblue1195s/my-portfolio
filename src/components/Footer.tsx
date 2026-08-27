import React from 'react';
import { personalDetails } from '../data/cvData';
import { Language } from '../types';
import { ArrowUp, Heart, Code2, Sparkles, Mail, Phone, MapPin, Globe2 } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#080c14] border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-md shadow-cyan-500/20">
              DK
            </div>
            <div>
              <p className="font-display font-bold text-white text-sm">
                {personalDetails.vietnameseName} ({personalDetails.fullName})
              </p>
              <p className="text-slate-400 font-mono text-[11px]">
                Senior Frontend Software Developer • 5+ Years Exp
              </p>
            </div>
          </div>

          {/* Quick links & copyright */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">{lang === 'vi' ? 'Giới thiệu' : 'About'}</a>
            <span>•</span>
            <a href="#skills" className="hover:text-white transition-colors">{lang === 'vi' ? 'Kỹ năng' : 'Skills'}</a>
            <span>•</span>
            <a href="#experience" className="hover:text-white transition-colors">{lang === 'vi' ? 'Kinh nghiệm' : 'Experience'}</a>
            <span>•</span>
            <a href="#projects" className="hover:text-white transition-colors">{lang === 'vi' ? 'Dự án' : 'Projects'}</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">{lang === 'vi' ? 'Liên hệ' : 'Contact'}</a>
          </div>

          {/* Back to top button */}
          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all text-xs font-semibold"
          >
            <span>{lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>
            © {new Date().getFullYear()} {personalDetails.fullName}. {lang === 'vi' ? 'Thông tin trích xuất chuẩn xác từ CV cá nhân.' : 'Crafted with precision from personal CV records.'}
          </p>
          <p className="flex items-center gap-1">
            <span>ReactJS & Tailwind CSS</span>
            <span>•</span>
            <span className="text-cyan-400 font-mono">React 19 + TypeScript</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
