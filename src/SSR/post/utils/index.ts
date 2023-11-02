import { Post } from '@/services/posts/types/post';

export function formatPostDate(response: Post) {
  const formattedData = new Date(response.data.date).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  );

  return formattedData;
}

export function formatRelatedPostDate(date: string) {
  const formattedData = `${new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
  })} de ${
    new Date(date)
      .toLocaleDateString('pt-BR', {
        month: 'long',
      })
      .charAt(0)
      .toUpperCase() +
    new Date(date)
      .toLocaleDateString('pt-BR', {
        month: 'long',
      })
      .slice(1)
  }`;

  return formattedData;
}
