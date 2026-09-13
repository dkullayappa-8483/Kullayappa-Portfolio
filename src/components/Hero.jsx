import React from 'react';
import portrait from '../assets/profile-portrait.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#071225] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(180,31,53,.34),transparent_34%),linear-gradient(120deg,#050b18_0%,#0a1930_55%,#260d1a_100%)]" />
      <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#c32642]/20 blur-3xl" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-12 px-6 pb-16 pt-28 md:flex-row md:items-center md:px-12">
        <div className="max-w-2xl flex-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-[.2em] text-emerald-300">Available for work</span>
          </div>
          <h1 className="mb-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I’m <span className="text-[#ef5267]">Dudekula Kullayappa</span>
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
            Computer Science &amp; Engineering student building practical web applications and AI-powered solutions with modern JavaScript and backend technologies.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a href="mailto:dkullayappa848363@gmail.com?subject=Hiring Inquiry - Dudekula Kullayappa" className="rounded-full bg-[#c32642] px-7 py-3 text-sm font-bold shadow-lg shadow-[#c32642]/20 transition hover:-translate-y-0.5 hover:bg-[#e13e59]">HIRE ME</a>
            <a href="#projects" className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-sm font-bold backdrop-blur transition hover:bg-white hover:text-[#071225]">Projects</a>
            <a href="https://github.com/dkullayappa-8483" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-7 py-3 text-sm font-bold text-white/80 transition hover:bg-white/10">GitHub ↗</a>
          </div>
          <div className="flex max-w-md gap-8 border-y border-white/10 py-4">
            <div><strong className="text-2xl">3</strong><span className="block text-[10px] uppercase tracking-wider text-white/55">Featured projects</span></div>
            <div><strong className="text-2xl">230+</strong><span className="block text-[10px] uppercase tracking-wider text-white/55">DSA problems</span></div>
            <div><strong className="text-2xl">20+</strong><span className="block text-[10px] uppercase tracking-wider text-white/55">Technologies</span></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] border border-[#ef5267]/30 rotate-3" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/40">
            <img src={portrait} alt="Dudekula Kullayappa" className="aspect-[4/5] w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071225] via-[#071225]/80 to-transparent p-6 pt-20">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#ef5267]">Developer profile</p>
              <p className="mt-1 text-lg font-bold">Web · Backend · AI integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
