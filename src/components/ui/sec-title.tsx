import { cn } from '@/core/utils';

function SecTitle({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      {...props}
      className={cn('text-white font-bold text-2xl text-center', className)}
    >
      {children}
    </h2>
  );
}
export default SecTitle;
