# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

TypeScript errors are intentionally bypassed in `next.config.mjs` (`ignoreBuildErrors: true`). There is no test suite configured.

## Architecture

Single-page marketing website for a Brazilian law firm (Gutierrez, Ribeiro & Mazzetto). All content is rendered in `/app/page.tsx` as sequential sections with anchor-based navigation and scroll-spy active state detection.

**Request flow for contact form:**
1. `components/contact-form.tsx` — validates with React Hook Form + Zod, triggers reCAPTCHA v3
2. POST to `/pages/api/send-email.ts` — verifies reCAPTCHA token against Google (score > 0.5), then calls `lib/send-email.ts`
3. `lib/mailer.ts` — Nodemailer SMTP transporter sends HTML email to `CLIENT_EMAIL_ADDRESS`

**Key directories:**
- `components/sections/` — one file per page section (hero, about, services, team, contact)
- `lib/` — mailer setup, email sending wrapper, `cn()` utility (clsx + tailwind-merge)
- `hooks/` — `use-mobile.ts` (responsive breakpoint), `use-toast.ts`
- `pages/api/` — only one API route: `send-email.ts`

## Styling

Tailwind CSS 4 with CSS custom properties defined in `app/globals.css`:
- `--primary`: dark navy `#01053b`
- `--secondary`: gold `#d4a24a`
- `--tertiary`: white `#fbfffe`

Use `bg-primary`, `text-secondary`, etc. — these map to the CSS vars via Tailwind.

## Environment Variables

Required in `.env`:

```
CLIENT_EMAIL_ADDRESS=   # Recipient for form submissions
EMAIL_FROM=             # Sender address shown in email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=   # Exposed to browser
RECAPTCHA_SECRET_KEY=             # Server-only
```
