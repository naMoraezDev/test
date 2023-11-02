import { Text } from '@/components/UI/Text';

type Slide = {
  uri: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
};

type SlideTextProps = {
  slides: Slide[];
  showText: boolean;
  currentIndex: number;
};

export function SlideText({ slides, currentIndex, showText }: SlideTextProps) {
  if (showText) {
    return (
      <div className="animate-fade z-50">
        <Text
          element="h2"
          color="white"
          variant="h1"
          className="
            max-w-[620px]
            desk-md:max-w-[370px]
            tab:max-w-[280px]
        "
        >
          {slides[currentIndex].title}
        </Text>

        <Text
          color="white"
          variant="subtitle"
          className="
            mt-64 max-w-[607px]
            desk-md:mt-[13px] desk-md:max-w-[391.38px]
            tab:max-w-[305.29px]
            mob:max-w-[353px]
            mob-sm:max-w-[234px]
        "
        >
          {slides[currentIndex].subtitle}
        </Text>
      </div>
    );
  }

  return <></>;
}
