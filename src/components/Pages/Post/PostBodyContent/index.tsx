import styles from './styles.module.css';
import { getTwitterEmbed } from '@/utils/embeds';
import { filterIframeElement } from '@/utils/url';
import { Fragment, MutableRefObject } from 'react';
import { ImageBlock } from './components/ImageBlock';
import { VideoBlock } from './components/VideoBlock';
import Dugout from '@/components/Global/Embeds/Dugout';
import { CMSButton } from '@/components/temp/CMSButton';
import { HeadingBlock } from './components/HeadingBlock';
import { Block, Odd } from '@/services/posts/types/post';
import SingleMatch from '@/components/Global/SingleMatch';
import { ParagraphBlock } from './components/ParagraphBlock';
import { InlineOddsBlock } from './components/InlineOddsBlock';
import { Quadrado_4 } from '@/components/GoogleAds/AdsTemplates/Quadrado_4';
import { AdsPlaceholder } from '@/components/GoogleAds/AdsPlaceholder';

type PostBodyContentProps = {
  postData: Block[];
  isTipsPage: boolean;
  topScreenInlineOdds: Odd[];
  refObject: MutableRefObject<HTMLDivElement[]>;
};

export function PostBodyContent({
  postData,
  refObject,
  isTipsPage,
  topScreenInlineOdds,
}: PostBodyContentProps) {
  return (
    <div
      className={`
        ${styles.links}
        flex flex-col gap-40 mb-56
        tab:mb-40
        mob:mb-32
        mob-sm:mb-40
      `}
    >
      {postData.map((block, index) => {
        return (
          <Fragment key={index}>
            {isTipsPage && index === Math.round(postData.length / 2) && (
              <div
                className="
                  w-full h-[250px] hidden justify-center
                  mob:flex
                "
              >
                <div className="w-[300px] h-[250px] relative flex justify-center items-center animate-adsSkeleton overflow-hidden">
                  <Quadrado_4 />

                  <AdsPlaceholder />
                </div>
              </div>
            )}

            {block.name === 'create-block/inline-odds' && (
              <InlineOddsBlock block={block} />
            )}

            {block.name === 'core/paragraph' && (
              <ParagraphBlock
                block={block}
                index={index}
                refObject={refObject}
              />
            )}

            {block.name === 'core/heading' && (
              <HeadingBlock block={block} index={index} refObject={refObject} />
            )}

            {block.name === 'core/image' && (
              <ImageBlock
                block={block}
                index={index}
                topScreenInlineOdds={topScreenInlineOdds}
              />
            )}

            {block.name === 'core/video' && <VideoBlock block={block} />}

            {block.name === 'custom-block/gutenberg-button' &&
              block.attributesJSON.btnData?.label && (
                <CMSButton
                  href={block.attributesJSON.url}
                  variant={block.attributesJSON.btnData?.value}
                >
                  {block.attributesJSON.text}
                </CMSButton>
              )}

            {block.name === 'custom-block/odds-single-match' && (
              <SingleMatch content={block} />
            )}

            {block.name === 'core/embed' && (
              <div className="mb-40 w-full flex justify-center">
                {block.attributesJSON.providerNameSlug === 'twitter' &&
                  getTwitterEmbed(block.attributesJSON.url as string)}
              </div>
            )}

            {block.name === 'core/html' &&
              block.saveContent.includes('dugout') && (
                <Dugout saveContent={block.saveContent} />
              )}

            {block.name === 'core/html' &&
              (block.saveContent.includes('twitter') ||
                block.saveContent.includes('instagram')) && (
                <div className="w-full flex justify-center">
                  <div
                    className="
                      w-[500px]
                      desk-sm:w-[400px]
                      mob:w-full
                    "
                    dangerouslySetInnerHTML={{
                      __html: block.saveContent,
                    }}
                  />
                </div>
              )}

            {block.name === 'core/html' &&
              block.saveContent.includes('youtube') && (
                <div className="relative pb-[56.25%] h-0 rounded-normal overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={filterIframeElement(block.saveContent, 'src')}
                  />
                </div>
              )}

            {block.name === 'core/html' &&
              block.saveContent.includes('facebook') && (
                <div className="flex justify-center">
                  <iframe
                    className="desk-sm:w-full"
                    loading="lazy"
                    src={filterIframeElement(block.saveContent, 'src')}
                    width={filterIframeElement(block.saveContent, 'width')}
                    height={filterIframeElement(block.saveContent, 'height')}
                  />
                </div>
              )}
          </Fragment>
        );
      })}
    </div>
  );
}
