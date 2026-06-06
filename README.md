# Itika Bhattacharjee — Portfolio

A "Live Risk Terminal" portfolio: a dark, dashboard-style site that mirrors the real-time
financial risk interfaces Itika builds at JP Morgan Chase. Built with **React + Vite**.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Edit your content

All copy lives in **`src/data.js`** — profile, metrics, experience, skills, projects,
education, achievements. Change text there and the UI updates.

### Swap your social links

Open `src/data.js` and replace the two placeholder URLs:

```js
github: 'https://github.com/your-github',
linkedin: 'https://linkedin.com/in/your-linkedin',
```

## Deploy

The `dist/` folder is static — drop it on **Vercel**, **Netlify**, or **GitHub Pages**.
On Vercel/Netlify just point them at this repo; build command `npm run build`, output `dist`.

## Structure

```
src/
  data.js              ← all editable content
  index.css            ← design system + styles
  App.jsx              ← page assembly
  hooks.js             ← count-up, clock, scroll helpers
  components/
    TickerBar, Navbar, Hero, Metrics, About, Experience,
    Skills, Projects, Education, Contact, Footer, CustomCursor, Reveal
```

## Highlights

- Live scrolling skill ticker + boot-sequence terminal hero
- Typewriter tagline, live clock, animated metric counters & sparklines
- Scroll-reveal sections, animated skill bars & risk gauges
- Custom blend-mode cursor, cursor-tracked project glows
- Fully responsive, respects `prefers-reduced-motion`
