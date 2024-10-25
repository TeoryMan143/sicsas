import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  services,
};
