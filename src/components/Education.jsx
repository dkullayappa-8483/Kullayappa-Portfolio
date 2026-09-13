import React from 'react';

const Education = () => (
  <section id="education" className="bg-[#0f0f18] py-20 px-6 md:px-12 w-full text-white border-t border-gray-900 relative overflow-hidden">
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="mb-16 text-left">
        <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">Education & Experience</div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3">Learning, building, growing</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl">My academic foundation and hands-on experience in web development.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="flex flex-col gap-8">
          <h3 className="text-xl font-extrabold text-purple-400 flex items-center gap-3 border-b border-gray-800 pb-3"><span>🎓</span> Academic Qualification</h3>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-colors shadow-lg">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 uppercase tracking-wider">Currently pursuing</span>
              <span className="text-xs text-gray-400 font-mono">Expected 2028</span>
            </div>
            <h4 className="text-lg font-black text-white mt-3">B.Tech Computer Science & Engineering</h4>
            <p className="text-xs font-semibold text-gray-300 mt-1">Sanskrithi School of Engineering, Puttaparthi</p>
            <p className="text-xs text-gray-400 mt-3 leading-relaxed">Building a strong foundation in programming, data structures, databases, web development, and software engineering.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-cyan-300">CGPA 7.7</span>
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-md bg-white/5 border border-white/10 text-purple-300">CSE</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold text-cyan-400 flex items-center gap-3 border-b border-gray-800 pb-3"><span>💼</span> Experience</h3>
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors shadow-lg">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">InAmigos Foundation</span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Completed</span>
            </div>
            <h4 className="text-lg font-black text-white">Web Development Intern</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">Built and refined web experiences while strengthening frontend fundamentals, API integration, and collaborative development practices.</p>
            <div className="mt-4 text-[11px] font-mono text-gray-500">📅 Completed July 2026</div>
          </div>
          <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-3">Problem Solving</h4>
            <p className="text-3xl font-black text-white">230<span className="text-cyan-400">+</span></p>
            <p className="text-xs text-gray-400 mt-1">Data Structures & Algorithms problems solved</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
