import { cn } from '@/core/utils';

function FormButton(props: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        'bg-pale rounded-sm text-white text-lg py-3 transition hover:bg-bright active:scale-95',
        props.className,
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
export default FormButton;
