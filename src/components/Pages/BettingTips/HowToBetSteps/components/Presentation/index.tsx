import { Text } from '@/components/UI/Text';
import { TopLineText } from '@/components/UI/TopLineText';

export function Presentation() {
  return (
    <>
      <TopLineText>Como apostar na Lance!Betting</TopLineText>

      <Text
        variant="subtitle"
        className="
          mt-24 text-gray1
          desk-sm:mt-[11px]
          tab:mt-[7px]
          mob-sm:mt-0
        "
      >
        Simplifique suas apostas com o nosso guia prático
      </Text>
    </>
  );
}
