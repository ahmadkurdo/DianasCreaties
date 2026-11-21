# Sanity CMS setup

The website reads published cakes and workshops from a public Sanity dataset. The Sanity Studio is the private editor for creating, updating, publishing, and deleting catalog items.

## Connect a Sanity project

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage) and create a public dataset named `production`.
2. Copy `.env.example` to `.env` and replace `your_project_id` with the project ID. Keep the dataset public so the browser can read published content. Never put a Sanity write token in a `VITE_` variable.
3. In the Sanity project API settings, allow the website origins (at least `http://localhost:5173` and the production domain) for CORS. Browser credentials are not required for public reads.
4. Start the website with `npm run dev` and the editor with `npm run cms`. The Studio runs at `http://localhost:3333/studio` and requires signing in with an authorized Sanity account.
5. Import the sample entries once with `npx sanity dataset import studio/seed.ndjson production`. They are marked as sample content and can be edited or deleted in the Studio.
6. In production, set `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET` in the hosting environment before building the website. For Docker, pass them as build arguments, for example `docker build --build-arg VITE_SANITY_PROJECT_ID=your_project_id --build-arg VITE_SANITY_DATASET=production -t dianas-creaties .`.

Only published documents appear on the website. Content changes are fetched from Sanity at runtime; no website rebuild is needed for routine edits.