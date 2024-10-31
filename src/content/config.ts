import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z
      .string()
      .refine(
        url => RegExp('^/img/servs/.*.webp$').test(url),
        'Invalid service image url',
      ),
  }),
});

export const collections = {
  services,
};
