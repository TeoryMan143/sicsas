import { z } from 'astro:schema';

export const messageSquema = z.object({
  name: z.string().min(1, 'Falta nombre').trim(),
  email: z.string().email('Correo inválido').min(1, 'Falta correo').trim(),
  subject: z.string().min(1, 'Falta asunto').trim(),
  message: z.string().min(1, 'Falta mensaje').trim(),
});

export type Message = z.infer<typeof messageSquema>;
