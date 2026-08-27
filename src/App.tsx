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

  // Sync title and SEO meta with language
  useEffect(() => {
    const isVi = lang === 'vi';
    document.documentElement.lang = isVi ? 'vi' : 'en';

    const title = isVi
      ? 'Trần Khắc Điều (Dieu Tran Khac) — Senior Frontend Software Developer | Portfolio & CV'
      : 'Dieu Tran Khac (Trần Khắc Điều) — Senior Frontend Software Developer | Portfolio & CV';
    document.title = title;

    const description = isVi
      ? 'Portfolio & CV chính thức của Trần Khắc Điều (Dieu Tran Khac) - Senior Frontend Software Developer với hơn 5 năm kinh nghiệm ReactJS, Next.js, Angular, React Native, TypeScript.'
      : 'Official Portfolio & CV of Dieu Tran Khac - Senior Frontend Software Developer with 5+ years of experience in ReactJS, Next.js, Angular, React Native, TypeScript.';

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OG title & description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
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
