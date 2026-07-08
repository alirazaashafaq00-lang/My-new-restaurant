
import { forwardRef, ButtonHTMLAttributes } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => (
    <button ref={ref} className={className} {...props}>
      {children}
    </button>
  )
);
Button.displayName = 'Button';
