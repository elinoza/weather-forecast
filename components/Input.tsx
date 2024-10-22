import React from 'react';
import { cn } from '../lib/utils/cn';

type InputProps = {
  id?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full focus:outline-none bg-transparent text-neutral-200 placeholder:text-neutral-500 placeholder:text-sm',
        className
      )}
      {...props}
    />
  );
});

export default Input;
