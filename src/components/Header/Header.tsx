import { LogoIcon } from 'assets/icons';
import { useAuth } from 'hooks';
import { Link } from 'react-router';
import { routes } from 'utils/core/routes';

import { Actions, NavList } from './components';
import { NAV_LIST_WITH_AUTH, NAV_LIST_WITHOUT_AUTH } from './Header.constants';
import styles from './Header.module.scss';

export const Header = () => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link to={routes.main} className="header__logo">
          <LogoIcon />
        </Link>
        <NavList items={isAuth ? NAV_LIST_WITHOUT_AUTH : NAV_LIST_WITH_AUTH} />
      </div>
      <Actions isAuth={isAuth} />
    </header>
  );
};
