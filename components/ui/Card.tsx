import { forwardRef, HTMLAttributes } from 'react';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
Card.displayName = 'Card';

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  )
);
CardBody.displayName = 'CardBody';
