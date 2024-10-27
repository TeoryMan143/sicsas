import MailIcon from '../icons/mail';
import MarkerIcon from '../icons/marker';
import PhoneIcon from '../icons/phone';
import WhatsappIcon from '../icons/whatsapp';

export const CONTACT_DATA = [
  {
    icon: WhatsappIcon,
    content: '316 423 7947 / 316 423 7948',
    title: 'WhatsApp y Número celular',
    copy: '3164237947',
  },
  {
    icon: PhoneIcon,
    content: '602 3991097',
    title: 'Teléfono fijo',
    copy: '6023991097',
  },
  {
    icon: MailIcon,
    content: 'seguridadindustrialcardenas@gmail.com',
    title: 'Correo electrónico',
    copy: 'seguridadindustrialcardenas@gmail.com',
  },
  {
    icon: MarkerIcon,
    content: 'Cali, Valle - Colombia',
    title: 'Ubicación',
    copy: 'Cali, Valle - Colombia',
  },
] as const;
