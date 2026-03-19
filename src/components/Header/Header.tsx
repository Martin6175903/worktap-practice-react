import { Logo } from '../../assets/icons';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="header__logo">
        <Logo />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__list-item">Биржа</li>
          <li className="nav__list-item">Ворки</li>
          <li className="nav__list-item">Конкурсы</li>
          <li className="nav__list-item">Создать ворк</li>
          <li className="nav__list-item">Создать заказ</li>
        </ul>
      </nav>
    </header>
  );
};
