import { Data } from '@/services/homes/types/bettingTipsHome';
import { treatUri } from '@/utils/url';

function isCustomBlock(custom: string) {
  return custom === 'custom';
}

export function getHowToBetPostsData(data: Data) {
  const formattedData = {
    block1: {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock1
        .featuredPost[0].slug,
      title: data.homeFields.bettingEduFeaturedBlocks.featuredBlock1.title,
      subtitle:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock1.subtitle,
      imageUrl:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock1.image.sourceUrl,
    },
    block2: {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock2
        .featuredPost[0].slug,
      title: data.homeFields.bettingEduFeaturedBlocks.featuredBlock2.title,
      subtitle:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock2.subtitle,
      imageUrl:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock2.image.sourceUrl,
    },
    block3: {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock3
        .featuredPost[0].slug,
      title: data.homeFields.bettingEduFeaturedBlocks.featuredBlock3.title,
      subtitle:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock3.subtitle,
      imageUrl:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock3.image.sourceUrl,
    },
    block4: {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock4
        .featuredPost[0].slug,
      title: data.homeFields.bettingEduFeaturedBlocks.featuredBlock4.title,
      subtitle:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock4.subtitle,
      imageUrl:
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock4.image.sourceUrl,
    },
  };

  return formattedData;
}

export function getBasicPostsData(data: Data) {
  const formattedDataArray = [
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock5
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock5
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock5
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock5
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock5.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock6
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock6
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock6
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock6
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock6.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock7
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock7
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock7
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock7
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock7.featuredPost[0]
          .uri,
      ).category,
    },
  ];

  return formattedDataArray;
}

export function getStrategiesPostsData(data: Data) {
  const formattedDataArray = [
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock8
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock8
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock8
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock8
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock8.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock9
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock9
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock9
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock9
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock9.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock10
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock10
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock10
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock10
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock10.featuredPost[0]
          .uri,
      ).category,
    },
  ];

  return formattedDataArray;
}

export function getLanceBettingPostsData(data: Data) {
  const formattedDataArray = [
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock11
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock11
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock11
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock11
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock11.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock12
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock12
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock12
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock12
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock12.featuredPost[0]
          .uri,
      ).category,
    },
    {
      slug: data.homeFields.bettingEduFeaturedBlocks.featuredBlock13
        .featuredPost[0].slug,
      title: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.title
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock13
            .featuredPost[0].title,
      subtitle: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.subtitle
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock13
            .featuredPost[0].extraFields.subtitle,
      imageUrl: isCustomBlock(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.custom,
      )
        ? data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.image
            .sourceUrl
        : data.homeFields.bettingEduFeaturedBlocks.featuredBlock13
            .featuredPost[0].extraFields.image.sourceUrl,
      category: treatUri(
        data.homeFields.bettingEduFeaturedBlocks.featuredBlock13.featuredPost[0]
          .uri,
      ).category,
    },
  ];

  return formattedDataArray;
}
