# Sentinel AI

AI-assisted citizen grievance redressal platform, built by **Team Cognova** for **MPOnline Hackathon 2026**
(problem statement: *AI Innovation for Public Services & Citizen-Centric Governance*).

**Live demo:** https://sentinal-ai-tau.vercel.app

A citizen reports a civic problem in their own language (English, Hindi or Hinglish) with photos and GPS. Sentinel AI
translates and understands it, assigns a category, severity and priority, routes it to a department, sets a response
deadline (SLA), and lets the citizen track it with a ticket ID until it is resolved.

## Features

- Complaint submission with text, GPS location and up to 5 evidence images (JPEG, PNG, WEBP, 5 MB each)
- AI triage: language detection, English translation, category, severity, priority, confidence score
  (OpenAI, then Gemini, then a local rules engine as fallback)
- 10 complaint categories mapped to departments, with SLA response windows by priority
  (Critical 30 min, High 4 h, Medium 24 h, Low 72 h)
- Ticket tracking, status workflow (Pending, Under Review, Assigned, In Progress, Resolved)
- Audit log, timeline and status log for every ticket
- Role-based access: citizen, officer, worker, admin
- Live updates with Socket.IO; SMS, WhatsApp and voice notifications through Twilio (integration, testing in progress)
- Ward-level analytics, trend-spike alerts and maps

## Tech stack

| Layer | Technology |
|---|---|
| Front end | React, TypeScript, Vite, Tailwind CSS, Leaflet, Recharts |
| Back end | Node.js, Express, JWT, bcrypt, helmet, rate limiting |
| Database | MongoDB with Mongoose |
| AI | OpenAI, Google Gemini, local rules engine |
| Real time | Socket.IO |
| Media | Cloudinary |
| Messaging | Twilio |
| Hosting | Vercel (front end), Render (API) |

## Run locally

1. Install Node.js 18 or newer and MongoDB (or use a MongoDB Atlas URI).
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your own values. Never commit `.env`.
4. Start the API: `npm run dev:backend`
5. Start the web app (new terminal): `npm run dev`

## Environment variables

See `.env.example` for the full list: `MONGODB_URI`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`,
`BACKEND_URL`, `VITE_API_BASE_URL`, `VITE_GOOGLE_MAPS_API_KEY`, Cloudinary keys, AI keys and Twilio settings.

## Project structure

```
src/        React app (pages, components, API clients, utilities)
backend/    Express API (routes, controllers, services, models, sockets)
api/        Vercel serverless entry for the API
```

## Team

Rajshree Sharma (frontend), Rohan Kanade (backend), Palak Tripathi (API), Sonali Tripathi (database, documentation, presentation).
