import clsx from 'clsx';
import type { ReactNode, ElementType } from 'react';

const sizeStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
} as const;

type HeadingProps<E extends ElementType = 'h2'> = {
  as?: E;
  size?: keyof typeof sizeStyles;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'size'>;

export function Heading<E extends ElementType = 'h2'>({
  as,
  size,
  children,
  className,
  ...rest
}: HeadingProps<E>) {
  const Tag = (as ?? 'h2') as ElementType;
  const styleKey = size ?? as ?? 'h2';

  return (
    <Tag
      className={clsx(
        sizeStyles[styleKey as keyof typeof sizeStyles],
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
