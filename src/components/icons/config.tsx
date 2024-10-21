function ConfigIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 48 48'
      {...props}
    >
      <defs>
        <mask id='IconifyId192ac5d49968fb6760'>
          <g fill='none' strokeLinejoin='round' strokeWidth='4'>
            <path
              fill='#fff'
              stroke='#fff'
              d='M36.686 15.171a15.4 15.4 0 0 1 2.529 6.102H44v5.454h-4.785a15.4 15.4 0 0 1-2.529 6.102l3.385 3.385l-3.857 3.857l-3.385-3.385a15.4 15.4 0 0 1-6.102 2.529V44h-5.454v-4.785a15.4 15.4 0 0 1-6.102-2.529l-3.385 3.385l-3.857-3.857l3.385-3.385a15.4 15.4 0 0 1-2.529-6.102H4v-5.454h4.785a15.4 15.4 0 0 1 2.529-6.102l-3.385-3.385l3.857-3.857l3.385 3.385a15.4 15.4 0 0 1 6.102-2.529V4h5.454v4.785a15.4 15.4 0 0 1 6.102 2.529l3.385-3.385l3.857 3.857z'
            />
            <path
              fill='#000'
              stroke='#000'
              d='M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z'
            />
          </g>
        </mask>
      </defs>
      <path
        fill='currentColor'
        d='M0 0h48v48H0z'
        mask='url(#IconifyId192ac5d49968fb6760)'
      />
    </svg>
  );
}

export default ConfigIcon;
