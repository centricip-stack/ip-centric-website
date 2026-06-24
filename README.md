# IP Centric Systems — Corporate Website

A modern, multi-page corporate marketing website for an enterprise IT consulting
firm. Built with **React 18 + Vite 6 + TypeScript + Tailwind CSS v4** and
**React Router**, with a working contact form (Web3Forms) that needs no backend.

## Quick start

**Requirements:** Node.js 18+ and npm

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Connect the contact form (one step)

The contact form sends submissions to your email via [Web3Forms](https://web3forms.com)
— no server or account required.

1. Go to https://web3forms.com and enter the email address where you want to
   receive messages.
2. Copy the **access key** they email you.
3. Copy `.env.example` to `.env` and paste your key:
   ```
   VITE_WEB3FORMS_KEY=your-access-key-here
   ```
4. Restart `npm run dev` (or set the variable in your host's env settings).

Until a key is added, the form validates input and shows a friendly
"not connected yet" message instead of failing silently.

## Project structure

```
ip-centric-website/
├── public/
│   └── images/            logo.png, hero-video.mp4, team-placeholder.svg
├── src/
│   ├── data/              site.ts, services.ts, partners.ts, testimonials.ts
│   ├── components/        Navbar, Footer, ServiceCard, Marquee, ContactForm,
│   │                      NetworkCanvas, PageHeader, Reveal, Seo, ScrollToTop, Logo
│   ├── pages/             Home, Services, About, Clients, Contact, Legal, NotFound
│   ├── hooks/             useReveal.ts
│   ├── App.tsx            routes + layout
│   ├── main.tsx           entry (BrowserRouter)
│   ├── index.css          Tailwind + design tokens
│   └── vite-env.d.ts      env + CSS module types
├── index.html
├── vercel.json            SPA routing rewrite (Vercel)
├── netlify.toml           build + SPA routing (Netlify)
├── public/_redirects      SPA routing (Netlify static)
└── .env.example
```

## Editing content

All copy lives in `src/data/`:

- **Contact details** (email, phone, address, map) → `src/data/site.ts`
- **Services** → `src/data/services.ts`
- **Partners / clients** → `src/data/partners.ts`
- **Testimonials** → `src/data/testimonials.ts`
- **Brand colors & fonts** → the `@theme` block in `src/index.css`

## Before you launch

- [ ] Add your Web3Forms key (above)
- [ ] Verify contact details in `src/data/site.ts`
- [ ] Replace the team photo: drop `team.jpg` in `public/images/` and point the
      two `<img>` tags in `Home.tsx` / `About.tsx` at it
- [ ] Replace the placeholder Privacy Policy / Terms text in `src/pages/Legal.tsx`
- [ ] Point the footer social links (`src/data/site.ts`) at your real profiles

## Deploy

Run `npm run build` and host the `dist/` folder anywhere static:

- **Vercel / Netlify** — connect the repo; routing configs are already included.
- **Any static host / Nginx** — serve `dist/` and add a fallback so all routes
  return `index.html` (see `DOCUMENTATION.md` for the Nginx snippet).
