import classNames from 'classnames';
import { Link } from 'react-router';

import styles from './Button.module.scss';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  link?: string;
  className?: string;
};

export const Button = ({ variant = 'primary', title, link, className }: ButtonProps) => {
  const classNameResult = classNames(styles.button, styles[variant], className);

  if (link) {
    return (
      <Link className={classNameResult} to={link}>
        {title}
      </Link>
    );
  }

  return <button className={classNameResult}>{title}</button>;
};
