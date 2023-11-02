import { Text } from '@/components/UI/Text';
import Image, { StaticImageData } from 'next/image';

type PostInfoProps = {
  postDate: string;
  postAuthor: string;
  readingTime: number;
  clockIcon: StaticImageData;
};

export function PostInfo({
  postDate,
  clockIcon,
  postAuthor,
  readingTime,
}: PostInfoProps) {
  return (
    <div
      className="
        flex gap-8 items-center my-24
        desk-sm:mt-16
        mob:my-12 m
        mob-sm:my-8
      "
    >
      <Text className="text-gray2" variant="text-sm">
        {postDate}
      </Text>

      <div className="w-[1px] h-[16px] bg-gray3" />

      <Text className="text-gray2" variant="text-sm">
        por {postAuthor}
      </Text>

      <div className="w-[1px] h-[16px] bg-gray3" />

      <div className="flex items-center gap-8">
        <Image
          priority
          width={24}
          height={24}
          src={clockIcon}
          alt="icone de relogio"
          className="
            w-24 h-24
            tab:w-[14px] tab:h-[14px]
            mob:w-[20px] mob:h-[20px]
            mob-sm:w-[14px] mob-sm:h-[14px]
          "
        />

        <Text className="text-gray2" variant="text-sm">
          {readingTime} min de leitura
        </Text>
      </div>
    </div>
  );
}
