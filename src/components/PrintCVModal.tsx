import React from 'react';
import { personalDetails, skillCategories, employmentHistories, educations, languages, allProjects } from '../data/cvData';
import { Language } from '../types';
import { Printer, X, Download, MapPin, Phone, Mail, Globe2, Briefcase, GraduationCap } from 'lucide-react';

interface PrintCVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const PrintCVModal: React.FC<PrintCVModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="print-cv-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        id="print-cv-modal-container"
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating action bar (Hidden when actually printing) */}
        <div className="no-print sticky top-0 z-10 bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Printer className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm">
              {lang === 'vi' ? 'Bản Xem Trước In & Xuất PDF CV' : 'Print & PDF Export Preview'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="execute-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-lg shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'vi' ? 'In hoặc Lưu thành file PDF' : 'Print or Save as PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Formal CV Paper Document (Clean, High-Contrast, Printable) */}
        <div id="printable-cv-document" className="p-8 sm:p-12 space-y-8 bg-white text-slate-900 font-sans text-sm leading-normal">
          
          {/* Top Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                {personalDetails.fullName}
              </h1>
              <p className="text-lg font-bold text-cyan-700 mt-1">
                {personalDetails.title.en}
              </p>
              <p className="text-xs text-slate-600 max-w-xl mt-2 leading-relaxed">
                {personalDetails.summary.en}
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-xs space-y-1.5 text-slate-700 sm:text-right shrink-0">
              <p className="font-semibold">{personalDetails.location}</p>
              <p className="font-mono">{personalDetails.phone}</p>
              <p className="font-mono text-cyan-800">{personalDetails.email}</p>
              <p>LinkedIn: linkedin.com/in/dieu-tran-khac</p>
              <p>Skype: live:khacdieu1195</p>
            </div>
          </div>

          {/* Two-Column Printable Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Main Column: Employment History & Projects */}
            <div className="md:col-span-8 space-y-6">
              
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-700" />
                  <span>Employment History</span>
                </h2>

                <div className="space-y-6">
                  {employmentHistories.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-slate-900 text-sm">
                          {exp.role.en} at {exp.company}, {exp.location}
                        </h3>
                        <span className="text-xs font-mono text-slate-600 uppercase font-semibold">
                          {exp.period.en}
                        </span>
                      </div>

                      {/* Projects under this company */}
                      <div className="space-y-3 pl-3 border-l-2 border-slate-200">
                        {exp.projects.map((proj) => (
                          <div key={proj.id} className="space-y-1 text-xs">
                            <p className="font-bold text-slate-800">
                              Project: {proj.title.en}
                            </p>
                            <p className="text-slate-600">
                              <span className="font-semibold">Client:</span> {proj.clientOrigin} | <span className="font-semibold">Tech:</span> {proj.techStack.join(', ')}
                            </p>
                            <p className="font-semibold text-slate-700">Main responsibilities:</p>
                            <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                              {proj.responsibilities.en.map((r, rIdx) => (
                                <li key={rIdx} className="leading-tight">{r}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="pt-2">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-700" />
                  <span>Education</span>
                </h2>

                <div className="space-y-3 text-xs">
                  {educations.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-slate-900">{edu.degree.en}</p>
                        <p className="text-slate-600">{edu.institution}, {edu.location}</p>
                      </div>
                      <span className="font-mono text-slate-500 font-medium">{edu.period}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar Column: Skills, Languages, Hobbies */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Skills */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
                  Key Skills
                </h2>
                <div className="space-y-2 text-xs">
                  <div>
                    <p className="font-bold text-slate-800 mb-1">Frameworks & Libraries:</p>
                    <p className="text-slate-600 leading-relaxed">
                      ReactJS, Angular (2-17+), NextJS, React Native, Redux, Three.js, jQuery, Storybook
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-1">Styling & UI:</p>
                    <p className="text-slate-600 leading-relaxed">
                      HTML5, CSS3, SASS/SCSS, Tailwind CSS, Material UI (MUI), Ant Design, Bootstrap, Responsive Design
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-1">Testing & QA:</p>
                    <p className="text-slate-600 leading-relaxed">
                      Cypress (E2E & Automation), Katalon Studio, Unit Testing, Code Review, Debugging
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-1">DevOps & Project Tools:</p>
                    <p className="text-slate-600 leading-relaxed">
                      Azure, Kubernetes (K8s), Docker, Git, Postman, Jira, Trello, Backlog, Scrum/Agile
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-800 mb-1">Professional Strengths:</p>
                    <p className="text-slate-600 leading-relaxed">
                      Teamwork, Self-Management, Problem Solving, International Client Communication
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Languages
                </h2>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <p><span className="font-bold">English:</span> Professional Working Proficiency</p>
                  <p><span className="font-bold">Vietnamese:</span> Native Speaker</p>
                </div>
              </div>

              {/* Hobbies */}
              <div>
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                  Hobbies
                </h2>
                <p className="text-xs text-slate-600">
                  Walking, Travel, Gaming & Technology Exploration
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
