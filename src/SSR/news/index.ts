import { GetServerSideProps } from 'next';
import { treatImageUrl } from '@/utils/url';
import { Block } from '@/services/posts/types/post';
import {
  getMostReadPosts,
  getPost,
  getRecentPostsByCategory,
} from '@/services/posts';
import { NewsPageProps } from '@/types/news';
import { getGiftbox } from '@/services/giftbox';

export const getNewsServerSideProps =
  (): GetServerSideProps<NewsPageProps> => async context => {
    const { params, resolvedUrl } = context;

    const post = params?.post?.[0] || '';

    try {
      const [response, news, mostReadData, giftboxData] = await Promise.all([
        getPost({
          categorySlug: 'noticias',
          slug: post ? post.toString() : '',
          context,
        }),
        getRecentPostsByCategory({ slug: 'noticias', context }),
        getMostReadPosts({ context }),
        getGiftbox({ slug: 'resenha-de-apostas' }),
      ]);

      if (!response.data.slug) {
        return { notFound: true };
      }

      const mostRead = mostReadData.data.itens.map(mostReadPost => ({
        title: mostReadPost.title,
        slug: mostReadPost.slug,
      }));

      const postData: Block[] | { saveContent: string } = [
        {
          name: '',
          saveContent: response.data.title,
          attributesJSON: {} as any,
          innerBlocks: [] as any,
        },
        ...response.data.blocks.map(block => block),
      ];

      const categorySlug = response.data.category.slug;
      const postSlug = response.data.slug;
      const postTitle = response.data.title;
      const postDate = new Date(response.data.date)
        .toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })
        .replace(',', ' -');
      const postAuthor = response.data.author.name;
      const fullUrl = `${process.env.SITE_URL}/${categorySlug}/${postSlug}`;

      const newsPostsData = news.data.itens.map(newsPost => ({
        slug: newsPost.slug,
        title: newsPost.title,
        imageUrl: newsPost.extraFields.image.sourceUrl,
        customCategory: newsPost.customFields.customCategory,
      }));

      let imageBlockUrl: string | undefined = '';
      let imageBlockHref: string | undefined = '';

      if (response.data.blocks[0].name === 'core/image') {
        imageBlockUrl = response.data.blocks[0].attributesJSON.url;
        imageBlockHref = response.data.blocks[0].attributesJSON.href;
      }

      if (
        response.data.blocks[0].name === 'custom-block/top-page-inline-odds' ||
        response.data.blocks[1].name === 'core/image'
      ) {
        imageBlockUrl = response.data.blocks[1].attributesJSON.url;
        imageBlockHref = response.data.blocks[1].attributesJSON.href;
      }

      const imageDescription = response.data.blocks.filter(
        block => block.name === 'core/image',
      )[0]?.attributesJSON.caption;

      const postSubtitle = response.data.extraFields.subtitle;

      let videoEmbedSrc = null;

      const videoEmbedMatch = response.data.extraFields.embed?.match(
        /[^'"]*dailymotion.com[^'"]*/,
      );

      if (videoEmbedMatch) {
        videoEmbedSrc = videoEmbedMatch;
      }

      const postImage = response.data.extraFields.image;

      const seoImages = response.data.blocks
        .filter(block => block.name === 'core/image')
        .map(image => treatImageUrl(image.attributesJSON.url || ''));

      const seoDates = {
        published: response.data.date,
        modified: response.data.modified,
      };

      const { pageInfo } = news.data;

      let relatedPosts: {
        date: string;
        slug: string;
        image: string;
        title: string;
        subtitle: string;
      }[];

      if (response.data.extraFields.relatedPosts) {
        relatedPosts = response.data.extraFields.relatedPosts.map(
          relatedPost => ({
            slug: relatedPost.slug,
            title: relatedPost.title,
            subtitle: relatedPost.extraFields.subtitle,
            date: `${new Date(relatedPost.date).toLocaleDateString('pt-BR', {
              day: '2-digit',
            })} de ${
              new Date(relatedPost.date)
                .toLocaleDateString('pt-BR', {
                  month: 'long',
                })
                .charAt(0)
                .toUpperCase() +
              new Date(relatedPost.date)
                .toLocaleDateString('pt-BR', {
                  month: 'long',
                })
                .slice(1)
            }`,
            image: relatedPost.extraFields.image.sourceUrl,
          }),
        );
      } else {
        const recentPosts = await getRecentPostsByCategory({
          slug: categorySlug,
          limit: 4,
          context,
        });

        relatedPosts = recentPosts.data.itens.map(iten => ({
          slug: iten.slug,
          title: iten.title,
          subtitle: iten.extraFields.subtitle,
          date: `${new Date(iten.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
          })} de ${
            new Date(iten.date)
              .toLocaleDateString('pt-BR', {
                month: 'long',
              })
              .charAt(0)
              .toUpperCase() +
            new Date(iten.date)
              .toLocaleDateString('pt-BR', {
                month: 'long',
              })
              .slice(1)
          }`,
          image: iten.extraFields.image.sourceUrl,
        }));
      }

      const topScreenInlineOddsBlock = response.data.blocks.find(
        block => block.name === 'custom-block/top-page-inline-odds',
      );

      const topScreenInlineOdds =
        topScreenInlineOddsBlock?.attributesJSON.response || [];

      const topScreenInlineOddsLinkUrl =
        topScreenInlineOddsBlock?.attributesJSON.url || '';

      return {
        props: {
          fullUrl,
          mostRead,
          seoDates,
          postSlug,
          postDate,
          postData,
          pageInfo,
          seoImages,
          postImage,
          postTitle,
          postAuthor,
          giftboxData,
          relatedPosts,
          postSubtitle,
          categorySlug,
          imageBlockUrl,
          videoEmbedSrc,
          newsPostsData,
          imageBlockHref,
          pageType: 'news',
          title: 'Notícias',
          topScreenInlineOdds,
          titleElementType: 'p',
          topScreenInlineOddsLinkUrl,
          imageDescription: imageDescription || '',
        },
      };
    } catch (e: any) {
      const status = e.response?.status;

      if (status === 301) {
        return {
          redirect: {
            destination: e.response.data?.redirect_url,
            statusCode: 301,
          },
        };
      }

      if (status === 404 && !/\.html(\.amp)?(\?.*|$)/.test(resolvedUrl)) {
        const destination = resolvedUrl.replace(
          /(\.amp)?(\?.*|$)/,
          '.html$1$2',
        );

        return {
          redirect: {
            destination,
            statusCode: 301,
          },
        };
      }

      return { notFound: true };
    }
  };
