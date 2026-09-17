import React, { useEffect, useState } from 'react';

const quickQuestions = [
  'Who is Kullayappa?',
  'What projects has he built?',
  'What technologies does he use?',
  'How can I contact him?',
  'What is his education?',
  'What is his GitHub?',
];

const answers = [
  {
    keywords: ['kullayappa', 'dudekula', 'about him', 'about you', 'who is'],
    answer: 'Kullayappa is a Computer Science & Engineering student from Penukonda, Andhra Pradesh, who builds practical web applications and AI-powered tools.',
  },
  {
    keywords: ['project', 'built', 'work', 'portfolio'],
    answer: 'Featured work includes GitHub Wrapped AI, PhishGuard Sentinel, and Bangalore Pincode Explorer. You can explore them in the Projects section or on his GitHub profile.',
  },
  {
    keywords: ['skill', 'technology', 'tech', 'stack', 'know', 'use'],
    answer: 'The main toolkit includes JavaScript, React, Node.js, Express.js, REST APIs, MongoDB, MySQL, Python, Git, Postman, and AI APIs.',
  },
  {
    keywords: ['education', 'study', 'college', 'degree', 'experience', 'intern'],
    answer: 'Kullayappa is pursuing a B.Tech in Computer Science & Engineering at Sanskrithi School of Engineering, expected in 2028. He also completed a Web Development internship at InAmigos Foundation.',
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'connect'],
    answer: 'You can use the contact form below, email dkullayappa848363@gmail.com, or connect on LinkedIn from the Contact section.',
  },
  {
    keywords: ['github', 'repository', 'repositories', 'source code', 'profile'],
    answer: 'Kullayappa’s GitHub profile is github.com/dkullayappa-8483. His repositories include GitHub Wrapped AI, PhishGuard Sentinel, and Bangalore Pincode Explorer.',
  },
  {
    keywords: ['linkedin', 'linked in', 'professional profile'],
    answer: 'You can connect with Kullayappa on LinkedIn at linkedin.com/in/dudekula-kullayappa-b39574339/.',
  },
  {
    keywords: ['college', 'school', 'institution', 'university', 'sanskrithi'],
    answer: 'Kullayappa studies at Sanskrithi School of Engineering in Puttaparthi, pursuing a B.Tech in Computer Science & Engineering with an expected graduation year of 2028.',
  },
  {
    keywords: ['location', 'live', 'from', 'place', 'city'],
    answer: 'Kullayappa is from Penukonda, Andhra Pradesh, India.',
  },
  {
    keywords: ['internship', 'intern', 'in amigos', 'work experience'],
    answer: 'He completed a Web Development internship at InAmigos Foundation in July 2026, strengthening his practical web development and collaboration skills.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    answer: 'Hi! I can help you learn about Kullayappa, his projects, skills, education, experience, and contact details.',
  },
];

const getAnswer = (question) => {
  const normalizedQuestion = question.toLowerCase();
  const match = answers.find(({ keywords }) => keywords.some((keyword) => normalizedQuestion.includes(keyword)));
  return match?.answer || 'I can answer questions about Kullayappa’s portfolio, GitHub projects, LinkedIn, college, skills, education, internship, location, and contact details. Please ask something related to his profile.';
};

const AskAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! Ask me anything essential about Kullayappa.' },
  ]);
  const [typingMessage, setTypingMessage] = useState(null);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!typingMessage) return undefined;

    if (typingMessage.visibleText.length >= typingMessage.fullText.length) {
      setMessages((current) => current.map((message, index) => (
        index === current.length - 1 ? { ...message, text: typingMessage.fullText } : message
      )));
      setTypingMessage(null);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setTypingMessage((current) => ({
        ...current,
        visibleText: current.fullText.slice(0, current.visibleText.length + 1),
      }));
    }, 18);

    return () => window.clearTimeout(timer);
  }, [typingMessage]);

  const askQuestion = (value = question) => {
    const trimmedQuestion = value.trim();
    if (!trimmedQuestion) return;
    const answer = getAnswer(trimmedQuestion);
    setMessages((current) => [
      ...current,
      { role: 'user', text: trimmedQuestion },
      { role: 'assistant', text: '' },
    ]);
    setTypingMessage({ fullText: answer, visibleText: '' });
    setQuestion('');
  };

  return (
    <div className={`fixed z-40 ${isOpen ? 'inset-x-0 bottom-0 md:inset-auto md:bottom-5 md:right-5' : `${isFooterVisible ? 'bottom-24' : 'bottom-5'} right-5`}`}>
      {isOpen && (
        <section className="mb-0 flex h-[calc(100dvh-5rem)] w-full flex-col overflow-hidden rounded-t-3xl border border-white/15 bg-[#0b172b] text-white shadow-2xl shadow-black/40 md:mb-3 md:h-[calc(100vh-7rem)] md:w-[min(400px,calc(100vw-2.5rem))] md:rounded-3xl" aria-label="Ask Kullayappa assistant">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#142640] to-[#0b172b] px-5 py-4">
            <div>
              <p className="text-sm font-black">Ask Kullayappa</p>
              <p className="mt-1 text-xs text-slate-400">Portfolio answers, right here.</p>
            </div>
            <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-300">Online</span>
          </div>
          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {messages.map((message, index) => {
              const isTyping = message.role === 'assistant' && index === messages.length - 1 && typingMessage;
              const messageText = isTyping ? typingMessage.visibleText : message.text;
              return (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed ${message.role === 'user' ? 'bg-[#c32642] text-white' : 'bg-white/10 text-slate-200'}`}>
                  {messageText}
                  {isTyping && <span className="ml-0.5 inline-block h-3 w-px bg-[#ef5267] align-middle" aria-hidden="true" />}
                </p>
              </div>
              );
            })}
          </div>
          <div className="border-t border-white/10 px-5 py-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Try asking</p>
            <div className="flex max-h-16 flex-wrap gap-2 overflow-y-auto">
            {quickQuestions.map((item) => (
              <button key={item} type="button" onClick={() => askQuestion(item)} className="rounded-full border border-white/15 bg-white/[.03] px-2.5 py-1.5 text-[10px] text-slate-300 hover:border-[#ef5267] hover:text-white">
                {item}
              </button>
            ))}
            </div>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); askQuestion(); }} className="flex gap-2 border-t border-white/10 bg-black/10 p-4">
            <input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask about Kullayappa..." aria-label="Ask about Kullayappa" className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[.06] px-3 py-2.5 text-xs text-white outline-none placeholder:text-slate-500 focus:border-[#ef5267]" />
            <button type="submit" className="rounded-xl bg-[#c32642] px-4 py-2.5 text-xs font-bold hover:bg-[#e13e59]">Ask</button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-label={isOpen ? 'Close Ask Kullayappa assistant' : 'Open Ask Kullayappa assistant'} className={`ml-auto flex items-center gap-2 rounded-full bg-[#c32642] px-4 py-3 text-xs font-black text-white shadow-lg shadow-black/30 hover:bg-[#e13e59] ${isOpen ? 'absolute right-4 top-4 p-3' : ''}`}>
        {isOpen ? (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <>
            Ask me
          </>
        )}
      </button>
    </div>
  );
};

export default AskAssistant;
