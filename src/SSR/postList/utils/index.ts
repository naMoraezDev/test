import { PostListType } from '@/types/postList';
import { Posts } from '@/services/posts/types/posts';

export function getPostsSlug(type: PostListType) {
  if (type === 'news') {
    return 'noticias';
  }

  if (type === 'casino') {
    return 'noticias';
  }

  return 'dicas';
}

export function getReturnSlug(type: PostListType) {
  if (type === 'news') {
    return 'mais-noticias';
  }

  if (type === 'casino') {
    return 'cassino';
  }

  return 'palpites';
}

export function getReturnTitle(type: PostListType) {
  if (type === 'news') {
    return 'Mais noticias';
  }

  if (type === 'casino') {
    return 'Cassino';
  }

  return 'Palpites';
}

export function formatPostsData(response: Posts) {
  const formattedData = response.data.itens.map(post => ({
    slug: post.slug,
    title: post.title,
    date: new Date(post.date)
      .toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })
      .replace(',', ' -'),
    category: post.customFields.customCategory,
    imageUrl: post.extraFields.image.sourceUrl,
  }));

  return formattedData;
}

export function getLimit(type: PostListType) {
  if (type === 'news' || type === 'tips') {
    return 10;
  }

  return 8;
}
