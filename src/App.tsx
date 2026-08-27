import React, { useState, useEffect } from 'react';
import { Language, ProjectInfo } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { EducationAndMore } from './components/EducationAndMore';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PrintCVModal } from './components/PrintCVModal';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  // Sync title with language
  useEffect(() => {
    document.title = lang === 'vi' 
      ? 'Trần Khắc Điệu (Dieu Tran Khac) — Frontend Software Developer' 
      : 'Dieu Tran Khac — Senior Frontend Software Developer CV';
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-cyan-500 selection:text-white flex flex-col">
      {/* Navigation Header */}
      <Header
        lang={lang}
        setLang={setLang}
        onPrintClick={() => setIsPrintModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onPrintClick={() => setIsPrintModalOpen(true)}
        />

        {/* Skills Section with Filter Matrix */}
        <SkillsSection lang={lang} />

        {/* Career & Experience Timeline */}
        <ExperienceTimeline
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Projects Showcase with Search & Filters */}
        <ProjectsShowcase
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Education, Languages & Hobbies */}
        <EducationAndMore lang={lang} />

        {/* Contact & Recruitment Connect */}
        <ContactSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / PDF Export Modal */}
      <PrintCVModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
