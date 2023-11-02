import styles from './styles.module.scss';

type Menu = {
  text: string;
  link: string;
  blankTarget?: boolean;
};

type SubmenuProps = {
  menus: Menu[];
  bgColor?: string;
  textColor?: string;
  itemBgColor?: string;
};

const defaultTextColor = '#fff';
const defaultBgColor =
  'linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), #031e10';
const defaultItemBgColor =
  'linear-gradient(0deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.16) 100%), #031e10';

export function Submenu({
  menus,
  bgColor = defaultBgColor,
  textColor = defaultTextColor,
  itemBgColor = defaultItemBgColor,
}: SubmenuProps) {
  function isFirstItem(index: number) {
    return index === 0;
  }

  function isLastItem(index: number) {
    return index === menus.length - 1;
  }

  const bgColorIsNotEmpty = bgColor.length;
  const textColorIsNotEmpty = textColor.length;
  const itemBgColorIsNotEmpty = itemBgColor.length;

  return (
    <div
      className={styles.container}
      style={{ background: bgColorIsNotEmpty ? bgColor : defaultBgColor }}
    >
      {menus.map((menu, index) => (
        <a
          key={index}
          href={menu.link}
          target={menu.blankTarget ? '_blank' : ''}
        >
          <p
            style={{
              background: itemBgColorIsNotEmpty
                ? itemBgColor
                : defaultItemBgColor,
              color: textColorIsNotEmpty ? textColor : defaultTextColor,
            }}
            className={`
              ${styles.item}
              ${isLastItem(index) && styles.lastItem}
              ${isFirstItem(index) && styles.firstItem}
              font-workSans
            `}
          >
            {menu.text}
          </p>
        </a>
      ))}
    </div>
  );
}
