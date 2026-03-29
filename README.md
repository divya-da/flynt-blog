# Flynt Blog — Sanity Studio

Sanity Studio for the [Flynt](https://tryflynt.ai) blog. This is the content management interface where blog posts are written and published. Content is stored in Sanity's cloud and fetched by the `flynt-website` Astro site at build time.

## Details

| | |
|---|---|
| **Project ID** | `m90jbgeh` |
| **Dataset** | `flynt-blog` |
| **Studio URL** | https://flynt.sanity.studio/ |
| **Website repo** | [divya-da/flynt-website](https://github.com/divya-da/flynt-website) |

## Local development

Requires Node.js >= 20.19.

```bash
npm install
npm run dev
```

Studio runs at http://localhost:3333.

## Deploy

```bash
npx sanity deploy
```

Deploys to https://flynt.sanity.studio/

## Schema

### Blog Post (`post`)

| Field | Type | Notes |
|---|---|---|
| `title` | string | Required |
| `slug` | slug | Auto-generated from title. Required. |
| `publishedAt` | datetime | Controls post ordering |
| `excerpt` | text | Short summary shown on blog index |
| `coverImage` | image | Optional cover image with hotspot |
| `body` | block array | Rich text — supports headings, images, blockquotes |

## How content reaches the website

1. Write and publish a post in this Studio
2. Content saves to Sanity's cloud (`m90jbgeh` / `flynt-blog`)
3. `flynt-website` fetches posts via `@sanity/client` during `npm run build`
4. Deploy `flynt-website` to make new posts live on tryflynt.ai

## CORS origins configured

- `http://localhost:4321` (local Astro dev)
- `https://tryflynt.ai` (production)
- `https://flynt.sanity.studio` (hosted Studio)
