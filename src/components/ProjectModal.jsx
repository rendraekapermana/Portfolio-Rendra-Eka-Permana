import { X, ExternalLink, Sparkles, CheckCircle2, Layers } from "lucide-react";

export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-elevated rounded-3xl p-6 sm:p-8 bg-white/95 shadow-2xl border border-white/90 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0071e3] text-xs font-semibold tracking-wide uppercase mb-3">
            <span>
              {project.num} · {project.category}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">
            {project.title}
          </h2>
          {project.role && (
            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Role:{" "}
              <span className="text-neutral-700 font-semibold">
                {project.role}
              </span>
              {project.timeline && ` · ${project.timeline}`}
            </p>
          )}
        </div>

        {/* Mockup Image */}
        <div className="rounded-2xl overflow-hidden border border-black/8 shadow-xs bg-neutral-100 mb-6 max-h-[380px] flex items-center justify-center">
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[380px]"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
            Overview
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Architecture / Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0071e3]" />
              <span>Key Architectural Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50/80 border border-black/[0.04] text-xs sm:text-sm text-neutral-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-neutral-500" />
            <span>Technologies Used</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg bg-neutral-100/90 text-neutral-700 text-xs font-medium border border-black/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/[0.06]">
          <span className="text-xs text-neutral-400">
            Internal Production Showcase · 2026
          </span>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-black/10 hover:bg-neutral-100 text-neutral-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() =>
                window.open(project.url, "_blank", "noopener, noreferrer")
              }
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0071e3] hover:bg-[#005bb5] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Launch Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
