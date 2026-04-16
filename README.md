This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Notion Competition Sync Pipeline

`data/competition-data.ts` can be auto-generated from a Notion database.

1. Add these variables to `.env`:

```bash
NOTION_TOKEN=secret_xxx
NOTION_COMPETITIONS_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Optional:

```bash
NOTION_SYNC_INTERVAL_MS=60000
NOTION_COMPETITIONS_FILTER_JSON={"property":"Published","checkbox":{"equals":true}}
NOTION_COMPETITIONS_SORTS_JSON=[{"property":"Title","direction":"ascending"}]
NOTION_DEFAULT_IMAGE_URL=https://images.unsplash.com/photo-1446776811953-b23d57bd21aa
```

2. Run a one-time sync:

```bash
npm run sync:competitions
```

3. Run continuous polling (updates file when Notion changes):

```bash
npm run sync:competitions:watch
```

4. Run in cloud every 5 minutes (works even when your laptop is off):

- The workflow file `.github/workflows/notion-competition-sync.yml` is configured to run every 5 minutes.
- Add these GitHub Actions repository secrets:
  - `NOTION_TOKEN`
  - `NOTION_COMPETITIONS_DATABASE_ID`
- Push to GitHub; then the action will sync `data/competition-data.ts` and auto-commit changes.

Notes:
- The script queries all pages from the configured Notion database and rewrites `data/competition-data.ts`.
- `rules` is written as a multiline template string when needed.
- For production automation, run the sync command in CI on a schedule and commit updates.
