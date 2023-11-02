import styles from './styles.module.scss';

export type AccordionSEOProps = {
  title: string;
  color?: string;
  content: string;
  defaultOpen?: boolean;
  bgColor?: string;
  titleColor?: string;
};

export function AccordionSEO({
  title,
  color,
  content,
  titleColor,
  defaultOpen,
  bgColor = '#f4f1ea',
}: AccordionSEOProps) {
  function formatLink(text: string): string {
    let newText = text;
    if (content.includes('<a')) {
      newText = text.replaceAll(
        '<a',
        `<a style=text-decoration:underline;font-weight:700;color:${
          color || '#007A18'
        };`,
      );
    }
    return newText;
  }

  return (
    <details
      open={defaultOpen}
      className={styles.item}
      data-testid="accordion-seo"
      style={{ backgroundColor: bgColor }}
    >
      <summary className={styles.itemTitle}>
        <p style={{ color: titleColor }}>{title}</p>

        <div className={styles.buttonCircle}>
          <svg
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 26 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2"
              stroke="#525252"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.20623 10.4551L12.4552 15.1964C12.957 15.7564 13.7781 15.7564 14.2799 15.1964L18.5288 10.4551"
            />
          </svg>
        </div>
      </summary>

      <div
        className={styles.itemContent}
        data-testid="accordion-seo-content"
        dangerouslySetInnerHTML={{ __html: formatLink(content) }}
      />
    </details>
  );
}
