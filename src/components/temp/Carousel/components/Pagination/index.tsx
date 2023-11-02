import { Slide } from '../../types';
import styles from './styles.module.scss';

type PaginationProps = {
  slides: Slide[];
  activeIndex: number;
};

export function Pagination({ activeIndex, slides }: PaginationProps) {
  function getBulletClasses(index: number) {
    const isActive = activeIndex === index;

    if (isActive) {
      return `${styles.bullet} ${styles.active}`;
    }

    return styles.bullet;
  }

  return (
    <div className={styles.container}>
      {slides.map((_slide, index) => (
        <div key={index} className={getBulletClasses(index)} />
      ))}
    </div>
  );
}
