import React from 'react';
import stackImage from '../assets/profile-portrait.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-[#8f1d35] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 text-white">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-white/10 mb-4">
                <img 
                  src={stackImage} 
                  alt="Dudekula Kullayappa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge Details */}
              <div className="text-center">
                <h4 className="text-lg font-black text-white uppercase tracking-wider">Dudekula Kullayappa</h4>
                    <p className="text-xs font-bold text-[#ef5267] uppercase tracking-widest mt-0.5">CSE Student & Developer</p>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>ID: DK-8483</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Bio & Info List */}
        <div className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-xs font-black tracking-widest uppercase mb-4">
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Hi, I'm Dudekula Kullayappa
          </h2>

          <p className="text-[#000] font-black text-xl mb-3 uppercase tracking-wide">
            Computer Science & Engineering Student | Building useful web and AI experiences
          </p>

          <p className="text-sm md:text-base font-medium mb-4 leading-relaxed text-red-100 max-w-3xl">
            I'm a B.Tech Computer Science & Engineering student at Sanskrithi School of Engineering, Puttaparthi, expected to graduate in 2028 with a CGPA of 7.7.
          </p>

          <p className="text-sm md:text-base font-medium mb-4 leading-relaxed text-red-100 max-w-3xl">
            I specialize in <strong className="text-black font-black">JavaScript, Node.js, Express.js, REST APIs, Python, and databases</strong> — building efficient, user-friendly applications and AI-assisted tools that solve real-world problems.
          </p>

          <p className="text-sm md:text-base font-medium mb-8 leading-relaxed text-red-100 max-w-3xl">
            I have solved 230+ DSA problems and completed a Web Development Internship at InAmigos Foundation in July 2026. I enjoy learning in public, shipping projects, and collaborating on open-source ideas.
          </p>

          {/* Grid Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">Degree</span>
              <span className="text-sm font-bold text-white">B.Tech CSE · Expected 2028</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">Location</span>
              <span className="text-sm font-bold text-white">Penukonda, Andhra Pradesh, India</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">Email</span>
              <a href="mailto:dkullayappa848363@gmail.com" className="text-sm font-bold text-white hover:underline">dkullayappa848363@gmail.com</a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">Phone / WhatsApp</span>
              <a href="tel:+919550148363" className="text-sm font-bold text-white hover:underline">+91 9550148363</a>
            </div>
          </div>

          {/* GitHub CTA Banner */}
          <a 
            href="https://github.com/dkullayappa-8483"
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-between bg-black text-white p-5 rounded-2xl border border-white/20 hover:bg-gray-950 transition-all duration-300 group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sm font-black">GH</div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Explore real-world repositories</div>
                <div className="text-base font-black text-white group-hover:text-[#ef5267] transition-colors">github.com/dkullayappa-8483 ↗</div>
              </div>
            </div>
            <div className="hidden sm:flex px-4 py-2 rounded-full bg-white/10 text-xs font-bold text-white group-hover:bg-[#ff2a2a]">
              Follow
            </div>
          </a>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
