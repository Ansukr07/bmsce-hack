# BMSCE Hack

Modern college website with:
- React + Vite frontend
- Node.js + Express backend
- 3D campus tour
- Chatbot with ready-made answers for common campus queries

## Overview

This repo contains two deployable apps:
- `client`: Public website UI (Vercel-friendly)
- `server`: API backend for programs, events, faculty, testimonials, and chatbot (Railway-friendly)

The chatbot supports suggested prompts and common campus queries with clear, ready-made responses.

## Current Highlights

### Chatbot Reliability
- Suggested/sample prompts return deterministic ready-made answers.
- Common intents (greeting, admissions, departments, placements, fees, hostel, library, contact) return ready-made responses.
- Responses can include contextual image cards.
- Unknown questions receive intent-based page guidance (for example, direct users to `/admissions`, `/academics`, `/placement`, `/campus-life`, `/research`).

### 3D Campus Tour UX
- Dedicated route at `/campus-tour`.
- Immersive loading overlay shown before tour appears.
- Minimum loading-screen duration to avoid abrupt blank-to-load transitions.
- Progress text and animated loading bar keep users engaged while 3D assets initialize.

### Deployment Readiness
- Frontend API base uses environment variable `VITE_API_URL` with `/api` fallback.
- Backend has proper `start` script.
- Root-level `railway.json` ensures Railway builds/starts from `server` in this monorepo.

## Tech Stack

Frontend:
- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Axios

Backend:
- Node.js
- Express 5
- Mongoose
- CORS
- Dotenv

## Repository Structure

```text
.
├─ client/
│  ├─ src/
│  ├─ public/
│  │  └─ college360/
│  └─ package.json
├─ server/
│  ├─ controllers/
│  ├─ routes/
│  ├─ models/
│  ├─ data/
│  ├─ server.js
│  └─ package.json
└─ railway.json
```

## Local Development

### Prerequisites
- Node.js 18+
- npm

### 1) Clone and install

```bash
git clone https://github.com/Ansukr07/bmsce-hack.git
cd bmsce-hack

cd client
npm install

cd ../server
npm install
```

### 2) Configure environment variables

Server (`server/.env`):
```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Client (`client/.env`, optional for local backend):
```env
VITE_API_URL=http://localhost:5000/api
```

### 3) Run both apps

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npm run dev
```

## API Base URL Behavior

In frontend, API base is:
- `import.meta.env.VITE_API_URL` if provided
- otherwise `/api`

For production, always set `VITE_API_URL` to your backend domain + `/api`.

Example:
```env
VITE_API_URL=https://your-backend-domain/api
```

## Deployment Guide

### Backend on Railway

1. Create Railway project and service from this repo.
2. Ensure service is exposed and domain is generated.
3. `railway.json` already configures build/start for monorepo:
   - build: `cd server && npm install`
   - start: `cd server && npm start`
4. Add Railway Variables:
   - `MONGO_URI` (required)
   - `NODE_ENV=production` (recommended)

Test endpoint:
- `POST https://your-railway-domain/api/chatbot/query`

### Frontend on Vercel

1. Deploy `client` app.
2. Set environment variable in Vercel:
   - `VITE_API_URL=https://your-railway-domain/api`
3. Redeploy.

Without this variable, frontend may call Vercel `/api` and get 404 for chatbot requests.

## Security Notes

- Never commit real credentials in `.env` files.
- If any MongoDB URI/password was exposed, rotate it immediately in Atlas and update all environments.
- Keep production secrets only in Railway/Vercel environment variables.

## Useful Commands

Frontend:
```bash
cd client
npm run dev
npm run build
npm run preview
```

Backend:
```bash
cd server
npm start
```

## Troubleshooting

### Chatbot returns 404 on deployed frontend
Cause:
- Frontend calling its own host `/api/...` instead of backend

Fix:
- Set `VITE_API_URL` on Vercel to Railway backend `/api` URL and redeploy

### Railway build says it cannot detect app
Cause:
- Monorepo root detection issue

Fix:
- Keep `railway.json` at repo root (already included)

### Suggested prompts still fail
Check:
- You deployed latest frontend build from `main`
- Browser cache cleared (hard refresh)

## Additional Ideas

- Add role-based chatbot personalization (student, parent, faculty) with tailored quick actions.
- Introduce in-chat deep links that open exact sections (for example, admissions eligibility block, placement stats cards).
- Add multilingual chatbot support (English + Kannada + Hindi) with language auto-detection.
- Build an AI-powered admission checklist generator based on selected program and category.
- Add a placement analytics dashboard with year-wise trends and recruiter highlights.
- Implement push notifications for events, deadlines, and admission milestones.
- Add downloadable campus-tour snapshots and guided tour paths for labs, library, and hostels.
- Integrate chatbot conversation analytics to surface unanswered queries and content gaps.
- Add a lightweight CMS/admin panel for updating FAQ answers and suggested prompts without code changes.
- Add accessibility enhancements: keyboard-first chatbot controls, high-contrast mode, and screen-reader optimized responses.
- Add a virtual campus assistant mode that recommends next actions based on the current page context.
- Add a "compare departments" experience for courses, labs, placements, and research exposure.
- Add a smart search bar that auto-suggests pages, FAQs, and forms from one input.
- Add lead-capture forms with counselor callback scheduling for admissions queries.
- Add alumni spotlight stories with filters by domain, company, and graduation year.

## License

ISC
