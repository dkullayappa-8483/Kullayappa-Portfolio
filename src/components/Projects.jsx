import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'GitHub Wrapped AI',
    category: 'ai',
    subtitle: 'AI-powered developer analytics',
    description: 'Generate an interactive, personalized year-in-review from GitHub activity with AI-assisted insights and a shareable experience.',
    technologies: ['JavaScript', 'AI APIs', 'GitHub API', 'Vercel'],
    liveUrl: 'https://github-wrapped-ai.vercel.app/',
    githubUrl: 'https://github.com/dkullayappa-8483/github-wrapped-ai',
    badge: 'Live Demo',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    icon: 'AI'
  },
  {
    id: 2,
    title: 'PhishGuard Sentinel',
    category: 'web',
    subtitle: 'Phishing detection and awareness',
    description: 'A practical security-focused web application that helps users inspect suspicious links and understand common phishing signals.',
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Render'],
    liveUrl: 'https://phishguard-sentinel-1.onrender.com/',
    githubUrl: 'https://github.com/dkullayappa-8483/phishguard-sentinel',
    badge: 'Live Demo',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    icon: 'PG'
  },
  {
    id: 3,
    title: 'Bangalore Pincode Explorer',
    category: 'web',
    subtitle: 'Location discovery tool',
    description: 'Explore Bangalore postal locations through a focused, easy-to-use interface backed by structured pincode data and search.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    githubUrl: 'https://github.com/dkullayappa-8483/Bangalore-Pincode-Explorer',
    badge: 'Open Source',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    icon: 'MAP'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="bg-[#05050a] py-24 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans border-t border-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Selected Projects</h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-lg">AI, security, and web applications built with JavaScript, Node.js, APIs, and cloud platforms.</p>
          </div>
          <div className="flex gap-2 bg-gray-900/80 p-1.5 rounded-full border border-gray-800 self-start md:self-auto">
            {['all', 'web', 'ai'].map((option) => (
              <button key={option} onClick={() => setFilter(option)} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${filter === option ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}>
                {option === 'all' ? 'All (3)' : option === 'web' ? 'Web Dev' : 'AI'}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900/50 border border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-[#ff2a2a]/50 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-colors group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-800 border border-gray-700/80 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{project.icon}</div>
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border ${project.badgeColor}`}>{project.badge}</span>
                </div>
                <span className="text-[11px] font-bold text-[#ff2a2a] uppercase tracking-wider block mb-1">{project.subtitle}</span>
                <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-3">{project.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-gray-800/60">
                  {project.technologies.map((tech) => <span key={tech} className="px-2.5 py-1 text-[10px] font-semibold rounded-md bg-white/5 border border-white/10 text-gray-300">{tech}</span>)}
                </div>
                <div className="flex items-center gap-3 pt-2">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 px-3 rounded-full bg-[#ff2a2a] text-white font-bold text-xs text-center hover:bg-red-600 transition-colors">Live Demo ↗</a>}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`py-2 px-4 rounded-full bg-gray-800 border border-gray-700 text-white font-bold text-xs text-center hover:bg-white hover:text-black transition-all ${!project.liveUrl ? 'w-full' : ''}`}>GitHub ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href="https://github.com/dkullayappa-8483" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-900/40 to-red-900/40 border border-purple-500/30 text-white font-bold text-sm hover:border-[#ff2a2a] transition-all duration-300 shadow-xl">Explore GitHub ↗</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
