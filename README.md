# Portfolio

React 19 + Vite + Tailwind CSS 4 + Framer Motion + React Router.

## Run
```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
npm run lint
```

## Customize
- Personal details & links: `src/data/site.js` (leave `linkedin` empty to hide it, or add your URL)
- Projects: `src/data/projects.js` · Skills: `src/data/skills.js` · Certificates: `src/data/certificates.js`
- Contact form: copy `.env.example` to `.env` and set `VITE_FORMSPREE_ID` to receive messages directly.
- Images live in `public/images/{projects,certificates}`. Add `image: "/images/projects/<name>.png"` to a project once you have a screenshot.

## Deploy
`vercel.json` already rewrites all routes to `index.html` for client-side routing.
