import Copiable from '../copiable';
import { CONTACT_DATA } from './contact-data';
import './styles.css';

function ContactInfo() {
  return (
    <ul
      className='contact-c hidden gap-8 bg-pale py-3 pl-4 text-white
    lg:flex'
    >
      {CONTACT_DATA.map(({ icon: Icon, content, copy }) => (
        <Copiable addToClipboard={copy} key={copy}>
          <li className='flex gap-3 items-center justify-cente cursor-pointer'>
            <Icon />
            <span className='font-questrial text-sm'>{content}</span>
          </li>
        </Copiable>
      ))}
    </ul>
  );
}
export default ContactInfo;
