import React, { useState } from 'react';
import { allProjects } from '../data/cvData';
import { Language, ProjectInfo } from '../types';
import { 
  FolderGit2, 
  Sparkles, 
  Search, 
  Filter, 
  ChevronRight, 
  Globe2, 
  ExternalLink,
  Code,
  Layers,
  Smartphone,
  ShoppingCart,
  Building
} from 'lucide-react';

interface ProjectsShowcaseProps {
  lang: Language;
  onSelectProject: (project: ProjectInfo) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ lang, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: lang === 'vi' ? 'Tất Cả Dự Án' : 'All Projects', icon: FolderGit2 },
    { id: 'react', label: 'React / Next.js', icon: Code },
    { id: 'angular', label: 'Angular (SSR / RxJS)', icon: Layers },
    { id: 'mobile', label: lang === 'vi' ? 'Mobile / React Native' : 'Mobile / Native', icon: Smartphone },
    { id: 'ecommerce', label: lang === 'vi' ? 'E-Commerce / Marketplace' : 'E-Commerce', icon: ShoppingCart },
    { id: 'enterprise', label: lang === 'vi' ? 'Hệ Thống Doanh Nghiệp (RBAC)' : 'Enterprise / RBAC', icon: Building },
  ];

  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter =
      activeFilter === 'all' ||
      project.category === activeFilter ||
      (activeFilter === 'react' && (project.techStack.includes('ReactJS') || project.techStack.includes('React Native'))) ||
      (activeFilter === 'angular' && project.techStack.some(t => t.toLowerCase().includes('angular')));

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 lg:py-24 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'vi' ? 'Danh Mục Dự Án' : 'Portfolio Showcase'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {lang === 'vi' ? 'Các Dự Án Tiêu Biểu & Sản Phẩm Đã Bàn Giao' : 'Featured Projects & Delivered Solutions'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'vi'
              ? 'Chi tiết các sản phẩm web, portal quản trị, ứng dụng mobile và sàn thương mại điện tử đa quốc gia.'
              : 'Detailed breakdown of high-performance web applications, enterprise portals, live-streaming, and mobile apps.'}
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="project-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'vi' ? 'Tìm theo công nghệ (React, Angular, Cypress, WebRTC...)' : 'Search by technology (React, Angular, Cypress, WebRTC...)'}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  id={`project-filter-${tab.id}`}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeFilter === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top color highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Meta Top: Client & Domain */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
                    <span className="text-base">{project.clientFlag}</span>
                    <span>{project.clientOrigin}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800/90 px-2 py-0.5 rounded">
                    {project.company}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title[lang]}
                </h3>

                {/* Domain & Role */}
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {project.domain}
                  </span>
                  <span>•</span>
                  <span>{project.role[lang]}</span>
                </div>

                {/* Overview Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 line-clamp-3">
                  {project.overview[lang]}
                </p>
              </div>

              {/* Bottom: Tech Stack & CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/90 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono bg-slate-950 text-cyan-300 rounded border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-1">
                  <span>{lang === 'vi' ? 'Xem trách nhiệm & kiến trúc' : 'View responsibilities & stack'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-base font-medium">
              {lang === 'vi' ? 'Không tìm thấy dự án phù hợp với từ khóa.' : 'No projects matched your query.'}
            </p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-cyan-400 underline hover:text-cyan-300"
            >
              {lang === 'vi' ? 'Xóa bộ lọc' : 'Clear filters'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
