import React, { useState } from 'react';
import { personalDetails } from '../data/cvData';
import { Language } from '../types';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Briefcase, 
  Languages, 
  ArrowRight,
  Copy,
  Check,
  Globe2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  lang: Language;
  onPrintClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onPrintClick }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    
    // Trigger festive mini confetti
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#3b82f6', '#10b981']
    });
  };

  return (
    <section id="about" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-indigo-500/0 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalDetails.status[lang]}</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
                {lang === 'vi' ? personalDetails.vietnameseName : personalDetails.fullName}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-400 mt-1">
                  ({lang === 'vi' ? personalDetails.fullName : personalDetails.vietnameseName})
                </span>
              </h1>
              
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {personalDetails.title[lang]}
                </span>
                <span className="hidden sm:inline-block text-slate-600">•</span>
                <span className="text-slate-400 text-sm sm:text-base font-medium flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  {personalDetails.location}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {personalDetails.summary[lang]}
            </p>

            {/* Key Metric Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-xl">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">5+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {lang === 'vi' ? 'Năm kinh nghiệm' : 'Years Experience'}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-display font-bold text-sky-400">12+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {lang === 'vi' ? 'Dự án bàn giao' : 'Completed Projects'}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-bold text-emerald-400 flex items-center gap-1">
                  🇯🇵 🇦🇺 🇩🇪
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  {lang === 'vi' ? 'Khách hàng toàn cầu' : 'Global Clients'}
                </div>
              </div>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>{lang === 'vi' ? 'Khám phá dự án' : 'View Projects'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-print-cv-btn"
                onClick={onPrintClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 shadow-md transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'vi' ? 'In / Xuất Bản PDF CV' : 'Print / Export CV'}</span>
              </button>

              <a
                id="hero-contact-anchor"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{lang === 'vi' ? 'Gửi liên hệ' : 'Contact Me'}</span>
              </a>
            </div>

          </div>

          {/* Quick Contact & Profile Card Column */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/70 p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Card Header Avatar / Branding */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-cyan-400 font-display font-extrabold text-2xl">
                    TKD
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg">
                    {personalDetails.vietnameseName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    Frontend Engineer
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-slate-400" />
                    Can Tho, Vietnam
                  </p>
                </div>
              </div>

              {/* Verified Details List */}
              <div className="space-y-3 text-sm">
                
                {/* Email with copy */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-300 text-xs font-mono truncate">
                      {personalDetails.email}
                    </span>
                  </div>
                  <button
                    id="copy-hero-email-btn"
                    onClick={() => handleCopy(personalDetails.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-800 hover:bg-slate-700 transition-colors shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone with copy */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-300 text-xs font-mono truncate">
                      {personalDetails.phone}
                    </span>
                  </div>
                  <button
                    id="copy-hero-phone-btn"
                    onClick={() => handleCopy(personalDetails.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-white rounded bg-slate-800 hover:bg-slate-700 transition-colors shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Core Stack Pills */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    {lang === 'vi' ? 'Thế mạnh công nghệ chính' : 'Primary Tech Stack'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['ReactJS', 'Angular', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'Tailwind', 'Cypress'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-800/90 text-cyan-300 rounded-md border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client Markets */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{lang === 'vi' ? 'Thị trường đối tác:' : 'Client Regions:'}</span>
                    <span className="font-semibold text-slate-200">Japan, Australia, Germany</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
