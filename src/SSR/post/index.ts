import { GetServerSideProps } from 'next';
import { treatImageUrl } from '@/utils/url';
import { getGiftbox } from '@/services/giftbox';
import { Block } from '@/services/posts/types/post';
import { PostPageProps, RelatedPost } from '@/types/post';
import { formatPostDate, formatRelatedPostDate } from './utils';
import { getPost, getRecentPostsByCategory } from '@/services/posts';

export const getPostServerSideProps =
  (): GetServerSideProps<PostPageProps> => async context => {
    const { params, resolvedUrl } = context;

    const post = params?.post?.[0] as string;
    const index = params?.post?.[1] as string;
    const category = params?.category as string;

    try {
      const [postResponse, giftboxData] = await Promise.all([
        getPost({
          context,
          slug: post as string,
          categorySlug: category as string,
        }),
        getGiftbox({ slug: 'resenha-de-apostas' }),
      ]);

      if (postResponse.status === 404) {
        return { notFound: true };
      }

      const response = postResponse;

      if (!response.data.slug) {
        return { notFound: true };
      }

      const postData: Block[] | { saveContent: string } = [
        {
          name: '',
          innerBlocks: [] as any,
          attributesJSON: {} as any,
          saveContent: response.data.title,
        },
        ...response.data.blocks.map(block => block),
      ];

      const postSlug = response.data.slug;
      const postTitle = response.data.title;
      const postDate = formatPostDate(response);
      const { readingTime } = response.data.seo;
      const postAuthor = response.data.author.name;
      const categoryName = response.data.category.name;
      const categorySlug = response.data.category.slug;
      const fullUrl = `${process.env.SITE_URL}/${categorySlug}/${postSlug}`;

      let relatedPosts: RelatedPost[];

      if (response.data.extraFields.relatedPosts) {
        relatedPosts = response.data.extraFields.relatedPosts
          .map(relatedPost => ({
            slug: relatedPost.slug,
            title: relatedPost.title,
            subtitle: relatedPost.extraFields.subtitle,
            date: formatRelatedPostDate(relatedPost.date),
            image: relatedPost.extraFields.image.sourceUrl,
          }))
          .slice(0, 3);
      } else {
        const recentPosts = await getRecentPostsByCategory({
          slug: categorySlug,
        });

        relatedPosts = recentPosts.data.itens
          .map(iten => ({
            slug: iten.slug,
            title: iten.title,
            subtitle: iten.extraFields.subtitle,
            date: formatRelatedPostDate(iten.date),
            image: iten.extraFields.image.sourceUrl,
          }))
          .slice(0, 3);
      }

      let imageBlockUrl: string = '';
      let imageBlockHref: string = '';
      let imageBlockCaption: string = '';

      if (response.data.blocks[0].name === 'core/image') {
        imageBlockUrl = response.data.blocks[0].attributesJSON.url as string;
        imageBlockHref = response.data.blocks[0].attributesJSON.href as string;
        imageBlockCaption = response.data.blocks[0].attributesJSON
          .caption as string;
      }

      if (
        response.data.blocks[0].name === 'custom-block/top-page-inline-odds' ||
        response.data.blocks[1].name === 'core/image'
      ) {
        imageBlockUrl = response.data.blocks[1].attributesJSON.url as string;
        imageBlockHref = response.data.blocks[1].attributesJSON.href as string;
        imageBlockCaption = response.data.blocks[1].attributesJSON
          .caption as string;
      }

      const postSubtitle = response.data.extraFields.subtitle;

      let videoEmbedSrc = null;

      const videoEmbedMatch = response.data.extraFields.embed?.match(
        /[^'"]*dailymotion.com[^'"]*/,
      );

      if (videoEmbedMatch) {
        videoEmbedSrc = videoEmbedMatch;
      }

      const headings = postData.filter(iten => iten.name === 'core/heading');

      const initialSelectedIndex = postData.indexOf(
        postData[postData.indexOf(headings[Number(index) - 1])],
      );

      const postImage = response.data.extraFields.image;

      const seoImages = response.data.blocks
        .filter(block => block.name === 'core/image')
        .map(image => treatImageUrl(image.attributesJSON.url || ''));

      const seoDates = {
        published: response.data.date,
        modified: response.data.modified,
      };

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
          seoDates,
          postSlug,
          postDate,
          postData,
          seoImages,
          postImage,
          postTitle,
          postAuthor,
          giftboxData,
          readingTime,
          postSubtitle,
          relatedPosts,
          categoryName,
          categorySlug,
          imageBlockUrl,
          videoEmbedSrc,
          imageBlockHref,
          pageType: 'post',
          imageBlockCaption,
          topScreenInlineOdds,
          initialSelectedIndex,
          titleElementType: 'p',
          title: 'Dicas de Apostas',
          topScreenInlineOddsLinkUrl,
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
