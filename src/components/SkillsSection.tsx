import React, { useState } from 'react';
import { skillCategories } from '../data/cvData';
import { Language, SkillCategory } from '../types';
import { 
  Layers, 
  Palette, 
  CheckCircle2, 
  Server, 
  Code2, 
  Sparkles, 
  Cpu, 
  Check, 
  Flame,
  Star
} from 'lucide-react';

interface SkillsSectionProps {
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-fuchsia-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-16 lg:py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Năng Lực Chuyên Môn' : 'Technical Proficiency'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {lang === 'vi' ? 'Kỹ Năng & Công Nghệ Nổi Bật' : 'Core Skills & Tech Stack'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'vi' 
              ? 'Tổng hợp các công nghệ, framework, thư viện và quy trình phát triển phần mềm được áp dụng thực tế trong suốt hơn 5 năm qua.' 
              : 'Proven expertise spanning modern frontend architectures, automated QA pipelines, cloud environments, and enterprise UI/UX.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              id="skill-tab-all"
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {lang === 'vi' ? 'Tất cả kỹ năng' : 'All Categories'}
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{cat.title[lang]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 hover:border-slate-700 transition-all shadow-xl hover:shadow-cyan-500/5 group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
                      {category.title[lang]}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
                    {category.skills.length} {lang === 'vi' ? 'kỹ năng' : 'items'}
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          {skill.badge && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Brief description if available */}
                      {skill.description && (
                        <p className="text-xs text-slate-400 leading-relaxed pt-0.5">
                          {skill.description[lang]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag highlights */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  {lang === 'vi' ? 'Đã áp dụng trong dự án thực tế' : 'Battle-tested in live products'}
                </span>
                <span className="text-slate-400 font-mono">5+ yrs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Skill Callouts (Softskills, Code Review, Teamwork, UX Best Practices) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Star className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'vi' ? 'UI/UX Best Practices' : 'UI/UX Best Practices'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'vi' ? 'Tối ưu trải nghiệm người dùng, responsive chuẩn mực trên mọi màn hình.' : 'Pixel-perfect responsive design and fluid user interactions.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'vi' ? 'Teamwork & Mentor' : 'Teamwork & Mentorship'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'vi' ? 'Hỗ trợ đồng đội, review code, chia sẻ giải pháp kỹ thuật tối ưu.' : 'Guiding teammates, peer code reviews, and cross-team alignment.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'vi' ? 'Multi-Framework Master' : 'Multi-Framework Expertise'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'vi' ? 'Linh hoạt giữa ReactJS, NextJS, Angular và React Native.' : 'Seamless agility across React, Next.js, Angular, and React Native.'}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'vi' ? 'Khách Hàng Quốc Tế' : 'Global Client Collaboration'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'vi' ? 'Làm việc trực tiếp với khách hàng từ Nhật Bản, Úc và Đức.' : 'Direct stakeholder communication with Japan, Australia, and Germany.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
