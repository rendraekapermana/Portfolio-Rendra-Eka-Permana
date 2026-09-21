import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
              PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1a1c1d]">
              Selected Projects
            </h2>
          </div>
          <p className="text-neutral-500 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            A showcase of recent digital products built from concept to deployment with meticulous attention to detail.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS_DATA.map((project) => {
            const isImageLeft = project.layout === 'image-left';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:border-black/10 group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    isImageLeft ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="text-[11px] font-bold tracking-wider text-[#0071e3] uppercase mb-2.5">
                      {project.num} · {project.category}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1c1d] mb-4 group-hover:text-[#0071e3] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-md bg-neutral-100/90 text-neutral-600 text-xs font-medium border border-black/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Link */}
                    <div>
                      <button
                        id={`btn-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="group/link inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[#0071e3] transition-colors cursor-pointer"
                      >
                        <span>{project.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 text-neutral-600 group-hover/link:text-[#0071e3]" />
                      </button>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="rounded-2xl overflow-hidden bg-neutral-50 border border-black/[0.06] shadow-xs group-hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden"
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.02] transition-colors pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
