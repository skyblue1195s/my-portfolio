import React from 'react';
import { employmentHistories } from '../data/cvData';
import { Language, ProjectInfo } from '../types';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Building2, 
  Sparkles, 
  Check,
  ExternalLink,
  Code2
} from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
  onSelectProject: (project: ProjectInfo) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang, onSelectProject }) => {
  return (
    <section id="experience" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Lịch Sử Làm Việc' : 'Career Progression'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {lang === 'vi' ? 'Kinh Nghiệm Làm Việc Chuyên Nghiệp' : 'Professional Work Experience'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'vi'
              ? 'Hành trình hơn 5 năm cống hiến tại các công ty công nghệ hàng đầu, phụ trách các sản phẩm trọng yếu cho đối tác quốc tế.'
              : 'Over 5+ years of delivering mission-critical web and mobile applications for global enterprises.'}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 lg:ml-40 space-y-12">
          
          {employmentHistories.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-sm shadow-cyan-500/50" />

              {/* Company & Role Header Card */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-7 shadow-xl hover:border-slate-700 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          {lang === 'vi' ? 'Hiện tại' : 'Current Role'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-cyan-300 mt-1">
                      {exp.role[lang]}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period[lang]}
                    </span>
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Company Overview Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {exp.summary[lang]}
                </p>

                {/* Delivered Projects Inside Company */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    {lang === 'vi' ? 'Các dự án tiêu biểu thực hiện tại công ty:' : 'Key Delivered Projects:'}
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {exp.projects.map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => onSelectProject(proj)}
                        className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all cursor-pointer group/proj flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-medium text-cyan-400 flex items-center gap-1">
                              <span>{proj.clientFlag}</span>
                              <span>{lang === 'vi' ? 'Khách hàng' : 'Client'}: {proj.clientOrigin}</span>
                            </span>
                            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                              {proj.domain}
                            </span>
                          </div>

                          <h4 className="text-sm font-bold text-white mt-2 group-hover/proj:text-cyan-300 transition-colors line-clamp-2">
                            {proj.title[lang]}
                          </h4>

                          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                            {proj.overview[lang]}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {proj.techStack.slice(0, 3).map((tech, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {proj.techStack.length > 3 && (
                              <span className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded">
                                +{proj.techStack.length - 3}
                              </span>
                            )}
                          </div>

                          <span className="text-xs text-cyan-400 font-medium flex items-center gap-0.5 group-hover/proj:translate-x-1 transition-transform">
                            <span>{lang === 'vi' ? 'Chi tiết' : 'Details'}</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
