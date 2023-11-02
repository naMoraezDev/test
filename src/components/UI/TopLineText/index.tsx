import { Text } from '../Text';
import { ReactNode } from 'react';

type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type TopLineTextProps = {
  color?: string;
  topLine?: boolean;
  element?: Element;
  children: ReactNode;
  className?: string;
};

export function TopLineText({
  children,
  topLine = true,
  element = 'h2',
  color = 'primary-green',
  className,
}: TopLineTextProps) {
  return (
    <div>
      {topLine && (
        <div
          className={`
          w-[31px] h-4 mb-8 bg-${color}
          mob:w-[20px] mob:h-[2px]
        `}
        />
      )}

      <Text variant="h2" element={element} className={`text-${color} ${className}`}>
        {children}
      </Text>
    </div>
  );
}
