import { treatUri } from '@/utils/url';
import { Post } from '@/types/category';
import { Posts } from '@/services/posts/types/posts';
import { CategoryHighlights } from '@/services/category/types/categoryHighlights';

export function getPageTitle(category: string) {
  switch (category) {
    case 'basico':
      return 'Aprenda o básico';
    case 'estrategias':
      return 'Desenvolva habilidades';
    default:
      return 'Aposte na Lance!Betting';
  }
}

export function getHighlightsTitle(category: string) {
  switch (category) {
    case 'basico':
      return 'Principais dicas para apostar';
    case 'estrategias':
      return 'Principais estratégias';
    default:
      return 'Destaques';
  }
}

export function getListSectionTitle(category: string) {
  switch (category) {
    case 'basico':
      return 'Confira todas as dicas';
    case 'estrategias':
      return 'Confira todas as estratégias';
    default:
      return 'Tudo sobre a Lance! Betting';
  }
}

export function getCategoryDescription(category: string) {
  switch (category) {
    case 'basico':
      return 'Primeiras dicas para iniciar nas apostas esportivas';
    case 'estrategias':
      return 'Estratégias para dominar as apostas';
    default:
      return 'Conheça tudo sobre a casa de apostas';
  }
}

export function formatPostsData(postsData: Posts) {
  const formattedData = postsData.data.itens.map(iten => ({
    slug: iten.slug,
    title: iten.title,
    subtitle: iten.extraFields.subtitle,
    imageUrl: iten.extraFields.image.sourceUrl,
  }));

  return formattedData;
}

export function formatHighlightsData(categoryHighlights: CategoryHighlights) {
  let formattedData: Post[] = [];

  const hasHighlightBlocks =
    categoryHighlights.data.homeFields.bettingInternalCatFeaturedBlocks;

  if (hasHighlightBlocks) {
    const highlight1 =
      categoryHighlights.data.homeFields.bettingInternalCatFeaturedBlocks
        .featuredBlock1.featuredPost[0];

    const highlight2 =
      categoryHighlights.data.homeFields.bettingInternalCatFeaturedBlocks
        .featuredBlock2.featuredPost[0];

    const highlight3 =
      categoryHighlights.data.homeFields.bettingInternalCatFeaturedBlocks
        .featuredBlock3.featuredPost[0];

    const highlight4 =
      categoryHighlights.data.homeFields.bettingInternalCatFeaturedBlocks
        .featuredBlock4.featuredPost[0];

    formattedData = [
      {
        title: highlight1.title,
        subtitle: highlight1.extraFields.subtitle,
        imageUrl: highlight1.extraFields.image.sourceUrl,
        slug: treatUri(highlight1.uri).slug.split('.')[0],
      },
      {
        title: highlight2.title,
        subtitle: highlight2.extraFields.subtitle,
        imageUrl: highlight2.extraFields.image.sourceUrl,
        slug: treatUri(highlight2.uri).slug.split('.')[0],
      },
      {
        title: highlight3.title,
        subtitle: highlight3.extraFields.subtitle,
        imageUrl: highlight3.extraFields.image.sourceUrl,
        slug: treatUri(highlight3.uri).slug.split('.')[0],
      },
      {
        title: highlight4.title,
        subtitle: highlight4.extraFields.subtitle,
        imageUrl: highlight4.extraFields.image.sourceUrl,
        slug: treatUri(highlight4.uri).slug.split('.')[0],
      },
    ];
  }

  return formattedData;
}
