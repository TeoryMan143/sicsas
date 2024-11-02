import { z } from 'astro:schema';

export const messageSquema = z.object({
  name: z.string().min(1, 'Falta nombre'),
  email: z.string().email('Correo inválido').min(1, 'Falta correo'),
  subject: z.string().min(1, 'Falta asunto'),
  message: z.string().min(1, 'Falta mensaje'),
});

export type Message = z.infer<typeof messageSquema>;
