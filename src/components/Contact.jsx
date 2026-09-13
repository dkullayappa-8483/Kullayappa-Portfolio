import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = ({ target }) => setFormData((current) => ({ ...current, [target.name]: target.value }));
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('Sending your message…');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const responseText = await response.text();
      let result = {};
      if (responseText) {
        try {
          result = JSON.parse(responseText);
        } catch {
          throw new Error('The contact service returned an invalid response.');
        }
      }
      if (!response.ok) throw new Error(result.error || 'Unable to send message.');
      setFormStatus('Thanks — your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus(error.message || 'The message could not be sent right now. Please try again shortly.');
    }
  };

  return (
    <section id="contact" className="bg-[#071225] px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#ef5267]">Contact</p>
          <h2 className="mb-5 text-4xl font-black md:text-5xl">Let’s build something useful.</h2>
          <p className="mb-8 max-w-md leading-relaxed text-slate-300">Have a project, opportunity, or idea in mind? Send a short note and I’ll get back to you.</p>
          <div className="space-y-3 text-sm">
            <a href="mailto:dkullayappa848363@gmail.com" className="block text-slate-200 hover:text-[#ef5267]">dkullayappa848363@gmail.com</a>
            <a href="tel:+919550148363" className="block text-slate-200 hover:text-[#ef5267]">+91 9550148363</a>
            <a href="https://www.linkedin.com/in/dudekula-kullayappa-b39574339/" target="_blank" rel="noopener noreferrer" className="block text-slate-200 hover:text-[#ef5267]">LinkedIn ↗</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[.06] p-6 shadow-2xl md:p-8">
          <label className="mb-5 block text-sm font-semibold">Name
            <input name="name" value={formData.name} onChange={handleChange} required autoComplete="name" className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ef5267]" />
          </label>
          <label className="mb-5 block text-sm font-semibold">Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" className="mt-2 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ef5267]" />
          </label>
          <label className="mb-6 block text-sm font-semibold">Message
            <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#ef5267]" />
          </label>
          <button type="submit" disabled={formStatus === 'Sending your message…'} className="rounded-full bg-[#c32642] px-7 py-3 text-sm font-bold transition hover:bg-[#e13e59] disabled:cursor-wait disabled:opacity-60">Send message ↗</button>
          {formStatus && <p role="status" className={`mt-4 text-sm ${formStatus.startsWith('Thanks') ? 'text-emerald-300' : 'text-slate-300'}`}>{formStatus}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
