function PlaceholderIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      {...props}
    >
      <path
        fill='currentColor'
        d='M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M48 208V59.31L196.69 208ZM59.31 48H208v148.7Z'
      />
    </svg>
  );
}

export default PlaceholderIcon;