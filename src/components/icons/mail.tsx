function MailIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='0.88em'
      height='1em'
      viewBox='0 0 14 16'
      className={className}
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9L1 4h12zM1 5.5l4 3l-4 3v-6zM2 12l3.5-3L7 10.5L8.5 9l3.5 3H2zm11-.5l-4-3l4-3v6z'
        fill='currentColor'
      />
    </svg>
  );
}

export default MailIcon;
