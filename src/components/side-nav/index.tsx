import { cn } from '@/core/utils';
import BoxIcon from '../icons/box';
import ConfigIcon from '../icons/config';
import HomeIcon from '../icons/home';
import PersonIcon from '../icons/person';
import { useState } from 'react';
import './style.css';
import ContactDialog from '../contact-dialog';

const LINKS_DATA = [
  {
    href: '/',
    icon: <HomeIcon />,
    text: 'Inicio',
  },
  {
    href: '/about-us',
    icon: <PersonIcon />,
    text: 'Quiénes somos',
  },
  {
    href: '/services',
    icon: <ConfigIcon />,
    text: 'Servicios',
  },
  {
    href: '/products',
    icon: <BoxIcon />,
    text: 'Productos',
  },
] as const;

function SideNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={cn('fixed h-dvh w-dvw bg-slate-600/50 z-[100] hidden', {
          'inline-block': open,
        })}
        onClick={() => setOpen(false)}
      />
      <button
        className='text-detail text-3xl absolute left-8 bottom-1/2 translate-y-1/2 side-nav'
        onClick={() => setOpen(true)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 16 16'
        >
          <path
            fill='currentColor'
            fillRule='evenodd'
            d='M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      <nav
        className={cn(
          'fixed inline rounded-xl py-10 pl-7 pr-12 bg-white shadow-lg top-3 z-[150] left-0 -translate-x-full transition-transform',
          {
            'translate-x-0': open,
          },
        )}
      >
        <ul className='flex flex-col gap-6'>
          {LINKS_DATA.map(({ href, icon, text }, i) => (
            <li key={i}>
              <NavLink href={href} icon={icon}>
                {text}
              </NavLink>
            </li>
          ))}
          <li>
            <ContactDialog />
          </li>
        </ul>
      </nav>
    </>
  );
}

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      className='
      text-pale inline-flex items-center gap-3 transition-colors
      hover:text-bright
    '
      href={href}
    >
      <span className='text-2xl'>{icon}</span> {children}
    </a>
  );
}

export default SideNav;
