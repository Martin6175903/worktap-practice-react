import { Link } from 'react-router';

import { NAV_LIST_WITH_AUTH, NAV_LIST_WITHOUT_AUTH } from '../../Header.constants';
import styles from './NavItem.module.scss';

type NavItemProps = {
  item: (typeof NAV_LIST_WITH_AUTH)[number] | (typeof NAV_LIST_WITHOUT_AUTH)[number];
};

export const NavItem = ({ item }: NavItemProps) => {
  return (
    <li>
      <Link className={styles.navItemLink} to={item.link}>
        {item.title}
      </Link>
    </li>
  );
};
