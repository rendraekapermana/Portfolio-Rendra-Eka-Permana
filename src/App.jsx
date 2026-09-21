import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ToastNotification } from './components/ToastNotification';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9f9fb] text-[#1a1c1d] relative selection:bg-[#0071e3]/15 selection:text-[#0059b5]">
      {/* Top Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Sections */}
      <main>
        <HeroSection
          onExploreClick={scrollToWork}
          onContactClick={scrollToContact}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <ContactSection onNotify={(msg) => setToastMessage(msg)} />
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-black/[0.05] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-white border border-black/8 flex items-center justify-center font-bold text-[9px] text-neutral-700">
              R
            </div>
            <span>© 2026 Rendra. Bridging architectural rigor with human-centered liquid interfaces.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </footer>

      {/* Toast Notification */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
