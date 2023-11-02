import { formatDailymotionSrc } from '@/utils/url';
import { Block } from '@/services/posts/types/post';

type VideoBlockProps = {
  block: Block;
};

export function VideoBlock({ block }: VideoBlockProps) {
  return (
    <div className="relative pb-[56.25%] h-0 rounded-normal overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={formatDailymotionSrc(block.attributesJSON.src)}
      />
    </div>
  );
}
