import styles from './styles.module.scss';

type TextSliderProps = {
  textSliderRedirectUrl?: string;
};

export function TextSlider({ textSliderRedirectUrl }: TextSliderProps) {
  const renderTextSlide = (totalItems: number) => {
    const textArray = [];

    for (let i = 0; i < totalItems; i += 1) {
      textArray.push('LANCE!BETTING');
    }

    return textArray.map((item, index) => (
      <p
        key={`lance-text-carousel-${index}`}
        className={`${index % 2 === 0 ? styles.greenText : styles.blueText} ${
          styles.text
        }`}
      >
        {item}
      </p>
    ));
  };

  return (
    <a href={textSliderRedirectUrl} target="_blank">
      <div className={styles.container}>
        <div className={styles.slideGroup}>{renderTextSlide(14)}</div>

        <div className={styles.slideGroup}>{renderTextSlide(14)}</div>
      </div>
    </a>
  );
}
