import React from 'react';

const expertise = [
  {
    index: '01',
    label: 'BUILD',
    title: 'Web applications',
    text: 'Responsive interfaces and server-rendered experiences built with JavaScript, HTML5, CSS3, and EJS.',
    accent: 'from-rose-500 to-orange-300',
  },
  {
    index: '02',
    label: 'CONNECT',
    title: 'Backend & APIs',
    text: 'Practical Node.js and Express.js services with REST APIs, validation, and maintainable application logic.',
    accent: 'from-cyan-400 to-blue-500',
  },
  {
    index: '03',
    label: 'STORE',
    title: 'Useful data systems',
    text: 'MongoDB and MySQL data models, queries, and integrations that keep products reliable and easy to extend.',
    accent: 'from-amber-300 to-rose-400',
  },
  {
    index: '04',
    label: 'AUGMENT',
    title: 'AI-powered features',
    text: 'Thoughtful AI API integrations that turn ordinary web products into faster, more useful tools.',
    accent: 'from-violet-400 to-fuchsia-400',
  },
];

const Expertise = () => (
  <section id="expertise" className="relative overflow-hidden bg-[#071225] px-6 py-24 text-white md:px-12">
    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#c32642]/15 blur-3xl" />
    <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#ef5267]">What I bring</p>
          <h2 className="text-4xl font-black leading-tight md:text-6xl">From first idea to a working product.</h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-slate-300 md:text-base">
          A practical, product-minded approach to building digital experiences that are clear, useful, and ready to grow.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {expertise.map((item) => (
          <article
            key={item.index}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[.06] p-7 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[.1] md:p-9"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`} />
            <div className="mb-12 flex items-center justify-between">
              <span className="font-mono text-sm text-white/40">{item.index}</span>
              <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold tracking-[.2em] text-white/60">{item.label}</span>
            </div>
            <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">{item.text}</p>
            <span className="mt-8 block font-mono text-xs text-white/30 transition-colors group-hover:text-[#ef5267]">01 / 04</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Expertise;
