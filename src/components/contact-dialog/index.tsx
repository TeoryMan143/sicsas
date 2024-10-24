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

const CONTACT_INFO = [
  {
    icon: <WhatsappIcon />,
    content: (
      <>
        316 423 7947
        <br />
        316 423 7948
      </>
    ),
    title: 'WhatsApp y Número celular',
  },
  {
    icon: <PhoneIcon />,
    content: '602 3991097',
    title: 'Teléfono fijo',
  },
  {
    icon: <MailIcon />,
    content: 'seguridadindustrialcardenas@gmail.com',
    title: 'Correo electrónico',
  },
  {
    icon: <MarkerIcon />,
    content: 'Cali, Valle - Colombia',
    title: 'Ubicación',
  },
];

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
      <DialogContent className='flex flex-col p-0 mx-1 border-0'>
        <DialogTitle className='sr-only'>Contáctanos</DialogTitle>
        <div className='bg-contact bg-cover pt-12 relative'>
          <SecTitle className='text-left overflow-visible inline-block relative ml-6 after:h-1.5 after:w-1/2 after:absolute after:top-9 after:left-0 after:bg-white'>
            Contáctanos
          </SecTitle>
          <ul className='mt-5 space-y-3'>
            {CONTACT_INFO.map(inf => (
              <ContactItem key={inf.title} {...inf} />
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ContactItem({
  title,
  icon,
  content,
}: {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <li className='font-questrial text-lg'>
      <h3 className='ml-6 text-white'>{title}</h3>
      <div
        className={cn(
          'bg-white py-3 inline-flex gap-5 pl-3 pr-4 items-center relative triangle',
          {
            't-wsp': title == 'WhatsApp y Número celular',
            't-tefubi': title == 'Teléfono fijo' || title == 'Ubicación',
            't-mail': title == 'Correo electrónico',
          },
        )}
      >
        <span className='text-2xl text-bright'>{icon}</span>
        <p
          className={cn({
            'text-sm': title == 'Correo electrónico',
          })}
        >
          {content}
        </p>
      </div>
    </li>
  );
}

export default ContactDialog;
