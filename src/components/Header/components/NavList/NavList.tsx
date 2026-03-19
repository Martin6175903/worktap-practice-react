import { NAV_LIST_WITH_AUTH, NAV_LIST_WITHOUT_AUTH } from '../../Header.constants';
import { NavItem } from '../NavItem';
import styles from './NavList.module.scss';

type NavListProps = {
  items: typeof NAV_LIST_WITHOUT_AUTH | typeof NAV_LIST_WITH_AUTH;
};

export const NavList = ({ items }: NavListProps) => {
  return (
    <nav className={styles.header__nav}>
      <ul className={styles['header__nav-list']}>
        {items.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
};
