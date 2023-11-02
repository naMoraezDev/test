import styles from './styles.module.scss';

type NextArrowButtonProps = {
  handleNext: () => void;
};

export function NextArrowButton({ handleNext }: NextArrowButtonProps) {
  return (
    <div className={styles.nextButton} onClick={handleNext}>
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
                d="M20.9062 35.2907L30.3889 26.7928C31.5088 25.7892 31.5088 24.147 30.3889 23.1434L20.9062 14.6455"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
