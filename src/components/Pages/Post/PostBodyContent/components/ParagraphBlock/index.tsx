import { MutableRefObject } from 'react';
import { Block } from '@/services/posts/types/post';

type ParagraphBlockProps = {
  block: Block;
  index: number;
  refObject: MutableRefObject<HTMLDivElement[]>;
};

export function ParagraphBlock({
  block,
  index,
  refObject,
}: ParagraphBlockProps) {
  return (
    <div
      ref={e => (e ? (refObject.current[index] = e) : null)}
      dangerouslySetInnerHTML={{
        __html: block.saveContent,
      }}
      className="text-news-paragraph-desk-lg"
    />
  );
}
