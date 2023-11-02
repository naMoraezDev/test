/* eslint-disable no-unused-expressions */
export const GTMPageView = (event: string, url?: string) => {
  interface PageEventProps {
    page?: string;
    event: string;
  }

  const pageEvent: PageEventProps = {
    page: url,
    event,
  };
  // @ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent);

  return pageEvent;
};

export const GTMPageEvent = (event: any) => {
  const pageEvent = {
    event,
  };
  // @ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent);
};

type GtmDataParams = {
  slug?: string;
  isPost: boolean;
  postSlug: string;
  isCategory: boolean;
};

export function getGtmData({
  slug,
  isPost,
  postSlug,
  isCategory,
}: GtmDataParams) {
  const gtmData = {
    betting: {
      name: `lance/${slug}`,
      section: slug,
      segment: 'geral',
    },
    'dicas-de-apostas': {
      name: `lance/resenha-de-apostas/${slug}`,
      section: slug,
      segment: 'geral',
    },
    'mais-noticias': {
      name: `lance/resenha-de-apostas/${slug}`,
      section: slug,
      segment: 'geral',
    },
    dicas: {
      name: 'lance/resenha-de-apostas/dicas',
      section: slug,
      segment: 'geral',
    },
    'dicas-de-apostas/category': {
      name: `home/resenha-de-apostas/${slug}`,
      section: slug,
      segment: 'geral',
    },
    'dicas-de-apostas/category/post': {
      name: `home/resenha-de-apostas/${slug}/${postSlug}.html`,
      section: slug,
      segment: 'geral',
    },
    'category/post': {
      name: `home/resenha-de-apostas/${slug}/${postSlug}.html`,
      section: slug,
      segment: 'geral',
    },
    error: {
      name: `home/resenha-de-apostas/erro${slug}`,
      section: 'erro',
      segment: 'geral',
    },
  };

  if (slug === 'resenha-de-apostas') {
    return gtmData.betting;
  }

  if (slug === 'dicas-de-apostas') {
    return gtmData['dicas-de-apostas'];
  }

  if (slug === 'mais-noticias') {
    return gtmData['mais-noticias'];
  }

  if (slug === 'palpites') {
    return gtmData['dicas'];
  }

  if (isCategory) {
    if (!isPost) {
      if (
        slug === 'basico' ||
        slug === 'estrategias' ||
        slug === 'lance-betting'
      ) {
        return gtmData['dicas-de-apostas/category'];
      }
    } else if (
      slug === 'basico' ||
      slug === 'estrategias' ||
      slug === 'lance-betting'
    ) {
      return gtmData['dicas-de-apostas/category/post'];
    } else {
      return gtmData['category/post'];
    }
  }

  if (slug === '404') {
    return gtmData['error'];
  }

  return gtmData['mais-noticias'];
}
