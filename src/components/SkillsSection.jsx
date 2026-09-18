import { SKILLS_DATA } from '../data/portfolioData';

// Authentic brand icons for technology logos
function TechIcon({ name }) {
  switch (name) {
    case 'React':
      return (
        <svg className="w-5 h-5 text-[#00D8FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Laravel':
      return (
        <svg className="w-5 h-5 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8L12 11.8 5.2 8 12 4.2zM5 9.8l6 3.4v6.8l-6-3.4V9.8zm8 10.2v-6.8l6-3.4v6.8l-6 3.4z" />
        </svg>
      );
    case 'JavaScript':
      return (
        <div className="w-5 h-5 rounded bg-[#F7DF1E] text-black font-extrabold text-[10px] flex items-center justify-center tracking-tighter">
          JS
        </div>
      );
    case 'Node.js':
      return (
        <svg className="w-5 h-5 text-[#539E43]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l10 5.8v11.6L12 25.2 2 19.4V7.8L12 2zm0 2.4L4 9v9.2l8 4.6 8-4.6V9l-8-4.6z" />
        </svg>
      );
    case 'Express':
      return (
        <div className="w-5 h-5 rounded bg-neutral-900 text-white font-bold text-[9px] flex items-center justify-center tracking-tight">
          ex
        </div>
      );
    case 'MongoDB':
      return (
        <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C11.5 2 10.5 4 10.5 7c0 5 3.5 8 1.5 13.5C14 17 17 13 17 8c0-4-3.5-6-5-6zm0 18.5c-.3 0-.5.2-.5.5 0 1 .5 1.5.5 1.5s.5-.5.5-1.5c0-.3-.2-.5-.5-.5z" />
        </svg>
      );
    case 'Supabase':
      return (
        <svg className="w-5 h-5 text-[#3ECF8E]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 2L3 14.5h8.5L9.5 22 21 9.5h-7.5L13.5 2z" />
        </svg>
      );
    case 'Tailwind CSS':
      return (
        <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-2.7 0-4.3 1.3-4.9 4 .9-1.3 2-1.8 3.4-1.4.8.2 1.4.8 2 1.5C13.6 11.2 15 12.7 18 12.7c2.7 0 4.3-1.3 4.9-4-.9 1.3-2 1.8-3.4 1.4-.8-.2-1.4-.8-2-1.5C16.4 7.5 15 6 12 6zM6 12.7c-2.7 0-4.3 1.3-4.9 4 .9-1.3 2-1.8 3.4-1.4.8.2 1.4.8 2 1.5 1.1 1.1 2.5 2.6 5.5 2.6 2.7 0 4.3-1.3 4.9-4-.9 1.3-2 1.8-3.4 1.4-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.5-2.6-5.5-2.6z" />
        </svg>
      );
    default:
      return null;
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
            CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1c1d] mb-4">
            Tools I work with.
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
            An ecosystem selected for architectural resilience, strict type safety, and real-time frontend polish.
          </p>
        </div>

        {/* 2-Column Grid matching the screenshot */}
        <div
          id="skills-grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {SKILLS_DATA.map((skill, idx) => (
            <div
              key={skill.name}
              id={`skill-card-${idx}`}
              className="glass-card p-5 rounded-2xl flex items-center justify-between group hover:border-blue-500/30 hover:shadow-md transition-all duration-200 cursor-default"
            >
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-[#0071e3] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-neutral-500 font-normal">
                  {skill.subtitle}
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-white/90 border border-black/6 shadow-2xs flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                <TechIcon name={skill.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
