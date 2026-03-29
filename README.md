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

Use the deploy script to push schema changes to the hosted Studio:

```bash
./deploy.sh
```

Deploys to https://flynt.sanity.studio/

Run this whenever you change anything in `schemaTypes/` — e.g. adding a new field, reordering fields, updating validation rules.

## Schema

### Blog Post (`post`)

The schema has two tabs in the Studio: **Content** and **SEO**.

#### Content tab

| Field | Type | Notes |
|---|---|---|
| `title` | string | Required |
| `slug` | slug | Auto-generated from title. Required. |
| `author` | string | Post author name |
| `publishedAt` | datetime | Controls ordering. Post won't appear on site until this date. |
| `categories` | array | Tags: Client Acquisition, Recruiting, Sales, GTM, Product |
| `excerpt` | text | Short summary shown on blog index. Fallback meta description. |
| `coverImage` | image | Optional cover image with hotspot. Alt text required. |
| `body` | block array | Rich text — supports headings, inline images (with alt + caption), blockquotes |

#### SEO tab

| Field | Type | Notes |
|---|---|---|
| `seoTitle` | string | Overrides `<title>` tag. Max 60 chars. |
| `seoDescription` | text | Meta description. Max 160 chars. Falls back to excerpt. |

## How content reaches the website

1. Write and publish a post in this Studio
2. Content saves to Sanity's cloud (`m90jbgeh` / `flynt-blog`)
3. `flynt-website` fetches posts via `@sanity/client` during `npm run build`
4. Deploy `flynt-website` to make new posts live on tryflynt.ai

## CORS origins configured

- `http://localhost:4321` (local Astro dev)
- `https://tryflynt.ai` (production)
- `https://flynt.sanity.studio` (hosted Studio)
