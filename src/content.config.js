import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/blog-posts' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishDate: z.union([z.string(), z.date()]),
    description: z.string(),
    language: z.enum(['en', 'fr']),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    type: z.string(),
    status: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    links: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { posts, projects, pages };
