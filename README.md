# Arise — volunteer site

A website for Arise, the AI-enhanced STEM Story Lab: storytelling + hands-on
science activities for elementary schools and libraries in Taipei. Includes a
volunteer sign-up form wired to a small backend.

## What's inside

```
frontend/          Static site — HTML, CSS, JS (no build step)
  index.html
  styles.css
  script.js
backend/            Node/Express server
  server.js         Serves the frontend + a volunteer signup API
  package.json
  data/
    volunteers.json  Signups are stored here as JSON
```

## Run it locally

1. Put your Firebase service account key at `backend/serviceAccountKey.json`
   (Firebase console → Project settings → Service accounts → Generate new
   private key). This file is gitignored — never commit it.
2. Install and start:

```bash
cd backend
npm install
npm start
```

Then open **http://localhost:8080** — the backend serves the frontend
directly, so you only need to run one thing.

Signups submitted through the form are saved to a `volunteers` collection in
your Firestore database. You can also fetch them at
`GET http://localhost:8080/api/volunteers`.

## What you'll want to customize before launch

- **Copy**: the mission, program steps, and footer text are real drafts, not
  lorem ipsum — read through and adjust the voice/specifics to match Arise.
- **Stats section** (`#impact` in `index.html`): the numbers (12 schools, 480
  kids, etc.) are placeholders. Swap in real figures, or remove the section
  until you have them.
- **Email**: `hello@arisestorylab.org` in the footer is a placeholder —
  replace with your real contact address.
- **Logo**: the header/footer mark is a simple inline SVG (leaf + atom)
  inspired by your logo. Swap in the real Arise logo file if you'd like exact
  brand matching — happy to help wire that in.

## Data storage

Signups are stored in Firestore, in a `volunteers` collection, one document
per signup with a server-generated timestamp. No manual setup needed beyond
creating the database and dropping in the service account key — the app
creates the collection automatically on the first signup.

## Deploying

Any host that runs Node works — Render, Railway, Fly.io, a small VM, or
Cloud Run if you want to stay inside GCP. Since the backend serves the
frontend too, it's a single deployable service: push the `backend/` and
`frontend/` folders together and run `npm start` (set the `PORT` env var if
your host requires it).

If you'd rather host the frontend separately (e.g. GitHub Pages or Netlify),
just update the `fetch('/api/volunteers', ...)` URL in `script.js` to point
at wherever the backend ends up running, and enable CORS in `server.js`.
