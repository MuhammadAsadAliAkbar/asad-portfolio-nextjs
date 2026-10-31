# Asad Portfolio (Next.js)

Vite + React Router se **Next.js 16 (App Router)** me convert kiya gaya portfolio.

## Run
```bash
npm install
cp .env.example .env.local   # values fill karein
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Env variables
| Vite (purana)         | Next.js (naya)                 |
| --------------------- | ------------------------------ |
| `VITE_API_URL`        | `NEXT_PUBLIC_API_URL`          |
| `VITE_PUSHER_KEY`     | `NEXT_PUBLIC_PUSHER_KEY`       |
| `VITE_PUSHER_CLUSTER` | `NEXT_PUBLIC_PUSHER_CLUSTER`   |

## Structure
```
src/app/layout.jsx            -> index.html + main.jsx (metadata, global CSS, theme init)
src/app/page.jsx              -> route "/"          (PortfolioHome)
src/app/dashboard/page.jsx    -> route "/dashboard" (PortfolioDashboard)
src/app/globals.css           -> purani src/index.css
src/components, src/css, src/data -> same as original
public/assets                 -> purani src/assets (images, notification.mp3)
```

## Conversion notes
- `react-router-dom` hata diya; routes ab file-based hain. `vercel.json` rewrite ki zaroorat nahi.
- Saare components `"use client"` hain (state/effects/framer-motion use karte hain).
- Image/mp3 imports ab `/assets/...` public paths hain.
- `localStorage` reads (Navbar, Footers, PortfolioHome) mount ke baad hote hain (SSR safe).
- `GoogleMapPremium` (Leaflet) `next/dynamic` + `ssr: false` se load hota hai.
