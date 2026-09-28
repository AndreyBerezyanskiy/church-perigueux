# Église Baptiste Évangélique de Périgueux

Multilingual church website with a separate Sanity Studio application.

## Structure

- The repository root contains the Next.js website.
- `studio/` contains the independent Sanity Studio application.
- Sanity Content Lake stores published content and drafts.
- French (`fr`) is the primary locale. Ukrainian, English, and Russian are also supported.

Keeping Studio separate prevents its editor and CLI dependencies from becoming part of the website runtime while keeping both applications in one repository.

## Requirements

- Node.js 22.19 or newer
- npm 10 or newer
- A Sanity project with a `production` dataset

## Website setup

Copy `.env.example` to `.env.local` and add the Sanity project values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

`SANITY_API_READ_TOKEN` is only required later for authenticated draft previews. It must never use the `NEXT_PUBLIC_` prefix.

Install and run the website:

```bash
npm install
npm run dev
```

The website is available at `http://localhost:3000`.

## Studio setup

Create or select a project at [sanity.io/manage](https://sanity.io/manage). Copy `studio/.env.example` to `studio/.env.local`:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

Then run Studio:

```bash
cd studio
npm install
npm run dev
```

Studio is available at `http://localhost:3333`. The first launch may ask you to sign in to Sanity and authorize the project.

Content schemas are intentionally added incrementally. The initial setup only defines the shared environment, locales, and translation infrastructure.

## Quality checks

Website:

```bash
npm run check
npm run test:coverage
npm run build
```

Studio:

```bash
cd studio
npm run check
npm run build
```

New application logic should be accompanied by tests. Coverage thresholds are enforced for the foundational configuration code and will expand with the content layer.
