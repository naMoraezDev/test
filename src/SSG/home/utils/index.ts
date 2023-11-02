import { treatUri } from '@/utils/url';
import { formatDate } from '@/utils/dates';
import { Posts } from '@/services/posts/types/posts';

export function formatMoreNewsData(postsData: Posts) {
  const formattedData = postsData.data.itens.map(item => ({
    slug: item.slug,
    title: item.title,
    date: formatDate(item.date),
    subtitle: item.customFields.customCategory,
    imageUrl: item.extraFields.image.sourceUrl,
  }));

  return formattedData;
}

export function formatGuessesData(gessesData: Posts) {
  const formatterGuessesData = gessesData.data.itens.map(item => {
    const hasCustomTitle = item.customFields?.customTitle;
    const hasCustomCategory = item.customFields?.customCategory;
    const hasCustomSubtitle = item.customFields?.customSubtitle;

    return {
      slug: item.slug,
      title: hasCustomTitle ?? item.title,
      matchDate: item.extraFields.matchDate,
      categorySlug: treatUri(item.uri).category,
      imageUrl: item.extraFields.image?.sourceUrl,
      category: hasCustomCategory ?? item.category.name,
      subtitle: hasCustomSubtitle ?? item.extraFields.subtitle,
    };
  });

  return formatterGuessesData;
}
