



import { defineCollection, z } from "astro:content";

const veer = defineCollection({
  schema: z.object({
    name: z.string(),
    slug: z.string(), // Make sure slug is required
    relation: z.string(),
    shortDescription: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  "veer": veer,
};
