# Kullayappa Portfolio

Personal developer portfolio for **Dudekula Kullayappa**, a Computer Science & Engineering student and web developer from Penukonda, Andhra Pradesh.

The site presents Kullayappa's background, technical skills, education, projects, and contact details in a responsive dark portfolio experience. It uses a static portrait-based hero, a custom favicon, and a calm interface with minimal motion.

## Highlights

- Responsive hero section with profile information and project links
- About section with profile card, education, location, and contact details
- Practical expertise areas covering web applications, Node.js APIs, databases, and AI integrations
- Technology grid with JavaScript, Node.js, Express.js, REST APIs, MongoDB, MySQL, Python, Java, Git, Postman, VS Code, and deployment tools
- Featured projects:
  - [GitHub Wrapped AI](https://github-wrapped-ai.vercel.app/)
  - [PhishGuard Sentinel](https://phishguard-sentinel-1.onrender.com/)
  - [Bangalore Pincode Explorer](https://github.com/dkullayappa-8483/Bangalore-Pincode-Explorer)
- Contact form backed by a Vercel serverless function and Resend
- Compact footer with GitHub, LinkedIn, and email links

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Framer Motion
- Resend API
- Vercel serverless functions

## Run locally

```bash
git clone https://github.com/dkullayappa-8483/Kullayappa-Portfolio.git
cd Kullayappa-Portfolio
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Create a local `.env` file when testing the contact endpoint:

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=your-inbox@example.com
RESEND_FROM=Portfolio contact <onboarding@resend.dev>
```

Never commit `.env` or expose `RESEND_API_KEY` in frontend code. The included `.env.example` is safe to copy and edit.

## Production build

```bash
npm run build
```

## Deploy on Vercel

Import the repository into Vercel with the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

Add these environment variables in the Vercel project settings:

```text
RESEND_API_KEY
CONTACT_EMAIL
RESEND_FROM
```

The form sends requests to `/api/contact`, which forwards them to Resend without exposing the API key in the browser. A verified sending domain is recommended for production email delivery. Resend's `onboarding@resend.dev` sender is intended for testing and may have recipient restrictions.

## Contact

- Email: [dkullayappa848363@gmail.com](mailto:dkullayappa848363@gmail.com)
- Phone: [+91 9550148363](tel:+919550148363)
- GitHub: [dkullayappa-8483](https://github.com/dkullayappa-8483)
- LinkedIn: [Dudekula Kullayappa](https://www.linkedin.com/in/dudekula-kullayappa-b39574339/)

© 2026 Dudekula Kullayappa
