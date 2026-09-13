import React from 'react';

const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
const skillsList = [
  ['JavaScript', 'javascript'], ['HTML5', 'html5'], ['CSS3', 'css3'], ['Node.js', 'nodejs'],
  ['Express.js', 'express'], ['REST APIs', null], ['MongoDB', 'mongodb'], ['MySQL', 'mysql'],
  ['EJS', null], ['Python', 'python'], ['Java', 'java'], ['Git & GitHub', 'github'],
  ['Postman', 'postman'], ['VS Code', 'vscode'], ['Google AI Studio', null], ['AI APIs', null],
  ['Render', null], ['Vercel', 'vercel'],
];

const Skills = () => (
  <section id="skills" className="relative w-full overflow-hidden border-t border-gray-100 bg-white px-6 py-20 font-sans md:px-12">
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="mb-12">
        <div className="mb-3 inline-block rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gray-500">Skills &amp; Technologies</div>
        <h2 className="mb-2 text-3xl font-black tracking-tight text-gray-900 md:text-5xl">Technologies I Work With</h2>
        <p className="max-w-xl text-sm text-gray-500 md:text-base">A practical toolkit spanning programming, full-stack web development, AI APIs, databases, and deployment.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skillsList.map(([name, icon]) => (
          <div key={name} className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm transition-colors hover:border-[#c32642]/50 hover:shadow-md">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 p-2 text-xs font-black text-gray-700 group-hover:bg-[#fff1f3]">
              {icon ? <img src={devicon(icon)} alt="" className="h-7 w-7 object-contain" /> : <span>{name === 'REST APIs' ? 'API' : name === 'AI APIs' ? 'AI' : name === 'Google AI Studio' ? '✦' : name.slice(0, 2).toUpperCase()}</span>}
            </div>
            <h4 className="text-xs font-bold text-gray-900">{name}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
