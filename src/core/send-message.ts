import { ActionError } from 'astro:actions';
import MessageEmail from 'emails/message';
import type { Message } from './message-squema';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';

const user = import.meta.env.EMAIL_USER;

const trans = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
});

export async function sendMessage({ email, message, name, subject }: Message) {
  try {
    trans.sendMail({
      from: `"Contacto Página" <${user}>`,
      to: ['seguridadindustrialcardenas@gmail.com'],
      subject,
      html: await render(MessageEmail({ name, email, message })),
    });
  } catch (e: any) {
    console.log(e.message);
    throw new ActionError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Error al enviar el correo',
    });
  }

  return true;
}
