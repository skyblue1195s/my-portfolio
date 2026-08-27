import React from 'react';
import { ProjectInfo, Language } from '../types';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Calendar, 
  Globe2, 
  Layers, 
  Code2, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectInfo | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 pr-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <span>{project.clientFlag}</span>
            <span>{lang === 'vi' ? 'Khách hàng' : 'Client'}: {project.clientOrigin}</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">
            {project.company}
          </span>
          {project.time && (
            <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">
              {project.time}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 text-xs font-medium">
            {project.domain}
          </span>
        </div>

        {/* Project Title & Role */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight">
            {project.title[lang]}
          </h3>
          <p className="text-sm font-semibold text-cyan-400 mt-2">
            {lang === 'vi' ? 'Vai trò:' : 'Role:'} {project.role[lang]}
          </p>
        </div>

        {/* Overview */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
            {lang === 'vi' ? 'Tổng Quan Dự Án' : 'Project Overview'}
          </h4>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.overview[lang]}
          </p>
        </div>

        {/* Key Responsibilities */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'vi' ? 'Nhiệm Vụ & Đóng Góp Cốt Lõi' : 'Key Responsibilities & Contributions'}</span>
          </h4>
          <ul className="space-y-2.5">
            {project.responsibilities[lang].map((resp, rIdx) => (
              <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            {lang === 'vi' ? 'Công Nghệ Sử Dụng' : 'Technologies & Tools Applied'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-800 text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {lang === 'vi' ? 'Dữ liệu trích xuất chuẩn xác từ CV cá nhân' : 'Accredited from verified CV records'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            {lang === 'vi' ? 'Đóng' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
