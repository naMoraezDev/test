export const imageLoader = ({ src, width }: any) =>
  `https://lncimg.lance.com.br/cdn-cgi/image/width=${width},quality=75,format=webp/${src.replace(
    'https://lncimg.lance.com.br/',
    '',
  )}`;

export const treatUri = (uri: string) => {
  const completeSlug = uri.slice(33);
  const categoryWithSlug = completeSlug.split('/');

  if (categoryWithSlug.length > 2) {
    return {
      isRoot: false,
      slug: categoryWithSlug[2],
      category: categoryWithSlug[1],
    };
  }

  return {
    isRoot: true,
    slug: categoryWithSlug[1],
    category: categoryWithSlug[0],
  };
};

export function treatImageUrl(url: string) {
  return `https://lncimg.lance.com.br/cdn-cgi/image/width=1920,quality=75,format=webp/${url.replace(
    'https://lncimg.lance.com.br/',
    '',
  )}`;
}

export function formatDailymotionSrc(source?: string) {
  return source
    ?.split(' ')
    .find(src => src.includes('dailymotion'))
    ?.split(';')[1]
    .split('&')[0];
}

export function filterIframeElement(content: string, element: string) {
  return content
    .split(' ')
    .find(el => el.includes(element))
    ?.split('"')[1];
}
