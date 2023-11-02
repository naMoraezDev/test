import styles from './styles.module.scss';

type PrevArrowButtonProps = {
  handlePrev: () => void;
};

export function PrevArrowButton({ handlePrev }: PrevArrowButtonProps) {
  return (
    <button className={styles.prevButton} onClick={handlePrev}>
      <svg
        width="50"
        height="50"
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="vuesax/linear/arrow-down">
          <g id="vuesax/linear/arrow-down_2">
            <g id="arrow-down">
              <path
                id="Vector"
                stroke="#525252"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M29.0938 35.2907L19.6111 26.7928C18.4912 25.7892 18.4912 24.147 19.6111 23.1434L29.0938 14.6455"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
}
