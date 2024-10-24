import { cn } from '@/core/utils';
import React from 'react';

const FormTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <>
      <label className='sr-only' htmlFor={props.id}>
        {props.placeholder}
      </label>
      <textarea
        className={cn(
          'rounded-sm border border-black p-3 focus:placeholder:text-bright focus:outline-bright h-24',
          className,
        )}
        {...props}
        ref={ref}
      />
    </>
  );
});

export default FormTextArea;
