import { Posts } from '@/services/posts/types/posts';

export function formaPostListData(postsData: Posts) {
  const formattedData = postsData.data.itens.map(item => ({
    slug: item.slug,
    title: item.title,
    subtitle: item.extraFields.subtitle,
    imageUrl: item.extraFields.image.sourceUrl,
  }));

  return formattedData;
}
