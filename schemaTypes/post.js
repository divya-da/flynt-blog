export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Content ──────────────────────────────────────
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      group: 'content',
    },
    {
      name: 'authorBio',
      title: 'Author Bio',
      type: 'text',
      group: 'content',
      rows: 2,
      description: 'Short bio shown on the post. Helps establish expertise (E-E-A-T).',
    },
    {
      name: 'authorUrl',
      title: 'Author URL',
      type: 'url',
      group: 'content',
      description: 'Link to author LinkedIn or bio page.',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
    },
    {
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      group: 'content',
      description: 'Leave blank if the post has not been updated since publishing.',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Client Acquisition', value: 'client-acquisition' },
          { title: 'Recruiting', value: 'recruiting' },
          { title: 'Sales', value: 'sales' },
          { title: 'GTM', value: 'gtm' },
          { title: 'Product', value: 'product' },
        ],
        layout: 'tags',
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      group: 'content',
      rows: 3,
      description: 'Short summary shown on the blog index. Also used as meta description fallback.',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines.',
          validation: Rule => Rule.required(),
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },

    // ── SEO ──────────────────────────────────────────
    {
      name: 'seoTags',
      title: 'SEO Tags (Keywords)',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'High-intent keywords for this post (6–10). Used in meta keywords tag.',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Overrides the post title in <title> and OG tags. Keep under 60 characters.',
      validation: Rule => Rule.max(60).warning('Over 60 characters may be truncated in search results.'),
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Meta description shown in search results. Keep under 160 characters.',
      validation: Rule => Rule.max(160).warning('Over 160 characters may be truncated in search results.'),
    },
  ],
  preview: {
    select: { title: 'title', media: 'coverImage', subtitle: 'publishedAt' },
  },
}
