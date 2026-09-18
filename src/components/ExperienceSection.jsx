import { EXPERIENCES_DATA } from '../data/portfolioData';

export function ExperienceSection() {
  const workExperiences = EXPERIENCES_DATA.filter((e) => e.category === 'work');
  const orgExperiences = EXPERIENCES_DATA.filter((e) => e.category === 'organizational');

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
            BACKGROUND
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1c1d]">
            Experience & Roles
          </h2>
        </div>

        {/* WORK EXPERIENCE GROUP */}
        <div className="mb-14">
          <div className="mb-8 flex items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#0071e3]" />
              <span className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
                WORK EXPERIENCE
              </span>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 space-y-8 ml-3">
            {workExperiences.map((exp, idx) => (
              <div key={exp.id} id={`exp-${exp.id}`} className="relative group">
                {/* Node dot on the timeline line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full border-2 border-white ring-2 transition-all ${
                    idx === 0
                      ? 'bg-[#0071e3] ring-[#0071e3]/30'
                      : 'bg-neutral-300 ring-neutral-200 group-hover:bg-[#0071e3] group-hover:ring-[#0071e3]/30'
                  }`}
                />

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0071e3] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-semibold tracking-wider text-[#0071e3] sm:text-neutral-500 uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-neutral-500 font-medium mb-3">
                    {exp.organization} · {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-neutral-100/90 text-neutral-600 text-[11px] font-medium border border-black/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ORGANIZATIONAL EXPERIENCE GROUP */}
        <div>
          <div className="mb-8 flex items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-neutral-400" />
              <span className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
                ORGANIZATIONAL EXPERIENCE
              </span>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-200 space-y-8 ml-3">
            {orgExperiences.map((exp) => (
              <div key={exp.id} id={`exp-${exp.id}`} className="relative group">
                {/* Node dot on the timeline line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-3.5 h-3.5 rounded-full bg-neutral-300 ring-2 ring-neutral-200 border-2 border-white group-hover:bg-[#0071e3] group-hover:ring-[#0071e3]/30 transition-all" />

                {/* Experience Card */}
                <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md hover:border-black/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0071e3] transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-neutral-500 font-medium mb-3">
                    {exp.organization} · {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-neutral-100/90 text-neutral-600 text-[11px] font-medium border border-black/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
