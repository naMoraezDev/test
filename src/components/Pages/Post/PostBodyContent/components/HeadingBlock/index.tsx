import { MutableRefObject } from 'react';
import { Block } from '@/services/posts/types/post';

type HeadingBlockProps = {
  block: Block;
  index: number;
  refObject: MutableRefObject<HTMLDivElement[]>;
};

export function HeadingBlock({ block, index, refObject }: HeadingBlockProps) {
  return (
    <h2
      ref={e => (e ? (refObject.current[index] = e) : null)}
      className="
        text-heading-3-desk-lg text-primary-green font-workSans
        desk-md:text-heading-2-desk-sm
        tab:text-heading-2-tab
        mob:text-heading-2-mob
        mob-sm:text-heading-3-mob-sm
      "
    >
      {block.attributesJSON.content}
    </h2>
  );
}
