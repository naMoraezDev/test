import { treatUri } from './url';
import { NewsType } from '@/types/home';
import { Home, SliderBlock } from '@/services/homes/types/home';

export function formatCarouselData(sliderBlocks: SliderBlock[]) {
  const formattedData = sliderBlocks.map(block => {
    const isCustomBlock = block.sliderBlock.custom === 'custom';

    return {
      title: isCustomBlock
        ? block.sliderBlock.title
        : block.sliderBlock.featuredPost[0].title,
      subtitle: isCustomBlock
        ? block.sliderBlock.subtitle
        : block.sliderBlock.featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock
        ? block.sliderBlock.image?.sourceUrl
        : block.sliderBlock.featuredPost[0].extraFields.image.sourceUrl,
      uri: block.sliderBlock.featuredPost[0].uri,
    };
  });

  return formattedData;
}

export function formatNewsData(homeBettingData: Home) {
  const formattedData: NewsType[] = [];

  Object.entries(homeBettingData.data.homeFields.featuredBlocks5).forEach(
    ([, value]) => {
      const isCustomBlock = value.custom === 'custom';

      formattedData.push({
        slug: value.featuredPost[0].slug,
        title: isCustomBlock
          ? value.subtitle
          : value.featuredPost[0].extraFields.subtitle,
        subtitle: isCustomBlock ? value.title : value.featuredPost[0].title,
        imageUrl: isCustomBlock
          ? value.image?.sourceUrl
          : value.featuredPost[0].extraFields.image.sourceUrl,
        categorySlug: '',
      });
    },
  );

  return formattedData;
}

export function formatEducationalData(homeBettingData: Home) {
  const formatterEducationalData =
    homeBettingData.data.homeFields.sliderSecondaryBlocks.map(item => {
      const isCustomBlock = item.sliderBlock.custom === 'custom';

      return {
        slug: item.sliderBlock.featuredPost[0].slug,
        title: isCustomBlock
          ? item.sliderBlock.title
          : item.sliderBlock.featuredPost[0].title,
        subtitle: isCustomBlock
          ? item.sliderBlock.subtitle
          : item.sliderBlock.featuredPost[0].extraFields.subtitle,
        categorySlug: treatUri(item.sliderBlock.featuredPost[0].uri).category,
        imageUrl: isCustomBlock
          ? item.sliderBlock.image?.sourceUrl
          : item.sliderBlock.featuredPost[0].extraFields.image.sourceUrl,
      };
    });

  return formatterEducationalData;
}
