import { Slide } from '../../types';
import styles from './styles.module.scss';

type SlideCardProps = {
  slide: Slide;
  textColor?: string;
  tagBgColor?: string;
  tagTextColor?: string;
  gradientColor?: string;
};

const defaultTextColor = '#fff';
const defaultTagBgColor = '#ff0';
const defaultTagTextColor = '#181818';
const defaultGradientColor = '#031e10';

export function SlideCard({
  slide,
  textColor = defaultTextColor,
  tagBgColor = defaultTagBgColor,
  tagTextColor = defaultTagTextColor,
  gradientColor = defaultGradientColor,
}: SlideCardProps) {
  const textColorIsNotEmpty = textColor.length;
  const tagBgColorIsNotEmpty = tagBgColor.length;
  const tagTextColorIsNotEmpty = tagTextColor.length;
  const gradientColorIsNotEmpty = gradientColor.length;

  const imageGradient = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, ${
    gradientColorIsNotEmpty ? gradientColor : defaultGradientColor
  } 100%), url(${slide.imageUrl})`;

  return (
    <a href={slide.postUrl}>
      <div
        className={styles.container}
        style={{
          backgroundImage: imageGradient,
        }}
      >
        {slide.tag && (
          <div
            className={styles.tag}
            style={{
              backgroundColor: tagBgColorIsNotEmpty
                ? tagBgColor
                : defaultTagBgColor,
            }}
          >
            <span
              style={{
                color: tagTextColorIsNotEmpty
                  ? tagTextColor
                  : defaultTagTextColor,
              }}
            >
              {slide.tag}
            </span>
          </div>
        )}

        <p
          className={styles.title}
          style={{ color: textColorIsNotEmpty ? textColor : defaultTextColor }}
        >
          {slide.title}
        </p>
      </div>
    </a>
  );
}
