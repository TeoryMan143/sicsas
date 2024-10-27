import type React from 'react';
import MailIcon from '../icons/mail';
import MarkerIcon from '../icons/marker';
import PhoneIcon from '../icons/phone';
import WhatsappIcon from '../icons/whatsapp';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import SecTitle from '../ui/sec-title';
import { cn } from '@/core/utils';
import './style.css';
import { useEffect, useState } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import Copiable from '../copiable';
import ContactForm from './form';
import { CONTACT_INFO } from '@/core/data';

function ContactDialog() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className='
          text-pale inline-flex items-center gap-3 transition-colors
          hover:text-bright
        '
        >
          <PhoneIcon className='text-2xl' />
          Contactenos
        </button>
      </DialogTrigger>
      <DialogContent className='flex flex-col p-0 mx-1 border-0 overflow-x-hidden max-h-[80%]'>
        <DialogTitle className='sr-only'>Contáctanos</DialogTitle>
        <div className='bg-contact bg-cover relative'>
          <div className='bg-slate-900/60 h-full w-full absolute z-20' />
          <div className='relative z-30 mt-12 mb-6'>
            <SecTitle className='text-left overflow-visible inline-block relative ml-6 after:h-1.5 after:w-1/2 after:absolute after:top-9 after:left-0 after:bg-white'>
              Contáctanos
            </SecTitle>
            <ul className='mt-5 space-y-3'>
              {CONTACT_INFO.map(inf => (
                <ContactItem key={inf.title} {...inf} />
              ))}
            </ul>
          </div>
        </div>
        <div className='p-5 font-rubik'>
          <h3 className='text-bright text-2xl text-center mb-3'>
            Envíanos un mensaje
          </h3>
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ContactItem({
  title,
  icon,
  content,
  copy,
}: {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  copy: string;
}) {
  return (
    <li className='font-questrial text-lg'>
      <h3 className='ml-6 text-white'>{title}</h3>
      <Copiable addToClipboard={copy}>
        <div
          className={cn(
            `
              bg-white py-3 inline-flex pl-3 pr-4 items-center relative triangle group transition
              hover:translate-x-8 hover:bg-bright
              after:hover:border-t-bright
            `,
            {
              't-wsp': title == 'WhatsApp y Número celular',
              't-tefubi': title == 'Teléfono fijo' || title == 'Ubicación',
              't-mail': title == 'Correo electrónico',
            },
          )}
        >
          <div className='bg-white absolute h-full w-8 -left-8 transition-colors group-hover:bg-bright' />
          <div className='inline-flex gap-3 items-center group-hover:text-white'>
            <span className='text-2xl text-bright group-hover:text-white'>
              {icon}
            </span>
            <p
              className={cn({
                'text-sm': title == 'Correo electrónico',
              })}
            >
              {content}
            </p>
          </div>
        </div>
      </Copiable>
    </li>
  );
}

export default ContactDialog;
