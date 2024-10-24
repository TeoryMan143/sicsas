import { cn } from '@/core/utils';
import React from 'react';

const FormInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'>
>(({ className, ...props }, ref) => {
  return (
    <>
      <label className='sr-only' htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input
        className={cn(
          'rounded-sm border border-black p-3 focus:placeholder:text-bright focus:outline-bright',
          className,
        )}
        {...props}
        ref={ref}
      />
    </>
  );
});

export default FormInput;
