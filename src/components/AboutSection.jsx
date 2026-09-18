import { ABOUT_DATA } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Pill & Title */}
        <div className="mb-8">
          <div className="inline-block text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
            {ABOUT_DATA.pill}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1c1d]">
            {ABOUT_DATA.title}
          </h2>
        </div>

        {/* Big Glass Card */}
        <div
          id="about-card"
          className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle light reflection on card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-blue-500/[0.03] to-transparent pointer-events-none" />

          {/* Paragraphs */}
          <div className="space-y-6 text-neutral-600 text-base sm:text-lg leading-relaxed mb-12">
            {ABOUT_DATA.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* 4 Metadata Columns / Cards */}
          <div
            id="about-meta-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-black/[0.05]"
          >
            {ABOUT_DATA.meta.map((item, idx) => (
              <div
                key={idx}
                id={`meta-item-${idx}`}
                className="p-4 rounded-2xl bg-white/60 border border-black/[0.04] backdrop-blur-xs shadow-2xs hover:bg-white/80 transition-colors"
              >
                <div className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase mb-1.5">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-neutral-900 leading-snug">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
