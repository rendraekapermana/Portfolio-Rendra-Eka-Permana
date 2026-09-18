import { ArrowRight, Code2, Clock } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export function HeroSection({ onExploreClick, onContactClick }) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Subtle ambient light wells in background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] ambient-well-blue pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] ambient-well-cyan pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top Eyebrow Pill */}
        <div
          id="hero-eyebrow"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-black/[0.06] shadow-2xs mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#0071e3] ring-4 ring-[#0071e3]/15" />
          <span className="text-[11px] font-semibold tracking-wider text-neutral-600 uppercase">
            {HERO_DATA.pillText}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1
          id="hero-headline"
          className="text-4xl sm:text-6xl md:text-[68px] font-bold tracking-tight text-[#1a1c1d] leading-[1.1] mb-6"
        >
          {HERO_DATA.greeting} <span className="text-[#1a1c1d]">{HERO_DATA.name}</span>
        </h1>

        {/* Subtitle / Bio */}
        <p
          id="hero-subtitle"
          className="max-w-2xl text-base sm:text-lg text-neutral-600 font-normal leading-relaxed mb-12"
        >
          {HERO_DATA.tagline}
        </p>

        {/* Profile Card Cluster with Floating Specular Pills */}
        <div id="hero-profile-cluster" className="relative my-4 mb-14">
          {/* Subtle back illumination glow */}
          <div className="absolute -inset-4 bg-radial from-blue-500/10 via-sky-400/5 to-transparent blur-2xl rounded-full -z-10" />

          {/* Floating Pill: Top-Left (Web Development) */}
          <div
            id="badge-web-dev"
            className="absolute -top-3 -left-6 sm:-left-12 z-20 hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-medium text-neutral-700 shadow-xs"
          >
            <Code2 className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Web Development</span>
          </div>

          {/* Floating Pill: Top-Right (Available for Opportunities) */}
          <div
            id="badge-status"
            className="absolute -top-3 -right-6 sm:-right-16 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-[11px] font-medium text-neutral-700 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Opportunities</span>
          </div>

          {/* Floating Pill: Bottom-Left (Location & Year) */}
          <div
            id="badge-location"
            className="absolute -bottom-3 -left-4 sm:-left-10 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-pill text-[11px] font-medium text-neutral-700 shadow-xs"
          >
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span>Indonesia · 2026</span>
          </div>

          {/* Main Portrait Frame */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-1.5 bg-white/90 backdrop-blur-xl border border-white/95 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-neutral-100 relative">
              <img
                src={HERO_DATA.profileImage}
                alt="Rendra portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              {/* Inner specular glass rim */}
              <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-black/5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div id="hero-actions" className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#005bb5] text-white text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer"
          >
            <span>{HERO_DATA.primaryCta}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 hover:bg-white text-neutral-800 border border-black/8 hover:border-black/15 text-sm font-semibold shadow-2xs transition-all duration-200 cursor-pointer"
          >
            <span>{HERO_DATA.secondaryCta}</span>
          </button>
        </div>

        {/* Scroll Cue Indicator */}
        <div id="hero-scroll-indicator" className="flex flex-col items-center gap-2 text-neutral-400">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}
