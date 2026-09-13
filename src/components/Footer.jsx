import React from 'react';

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#050b18] px-6 py-7 text-sm text-slate-400 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 Dudekula Kullayappa</p>
      <div className="flex gap-5">
        <a href="#home" className="transition hover:text-[#ef5267]">Back to top ↑</a>
        <a href="https://github.com/dkullayappa-8483" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ef5267]">GitHub</a>
        <a href="https://www.linkedin.com/in/dudekula-kullayappa-b39574339/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ef5267]">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export default Footer;
