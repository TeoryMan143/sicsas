import { LINKS_DATA } from '@/core/data';
import { cn } from '@/core/utils';
import ContactDialog from '../contact-dialog';

function MainNav({ path }: { path: string }) {
  return (
    <nav className='hidden lg:inline-block'>
      {path}
      <ul className='flex gap-16'>
        {LINKS_DATA.map(({ href, text }) => (
          <li
            key={href}
            className={cn('hover:text-pale  transition-colors', {
              'text-bright': path === href,
            })}
          >
            <a className='inline-block' href={href}>
              {text}
            </a>
          </li>
        ))}
        <li className='hover:text-pale transition-colors'>
          <ContactDialog desktop />
        </li>
      </ul>
    </nav>
  );
}
export default MainNav;
