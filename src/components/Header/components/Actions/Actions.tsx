import { routes } from '../../../../utils/core/routes';
import { Button } from '../../../Button';
import styles from './Actions.module.scss';

type ActionsProps = {
  isAuth: boolean;
};

export const Actions = ({ isAuth }: ActionsProps) => {
  return (
    <div>
      {isAuth ? (
        <div>Auth true</div>
      ) : (
        <div className={styles.auth}>
          <Button title="Регистрация" link={routes.auth} className={styles.authButton} />
          <Button
            title="Войти"
            variant="secondary"
            link={routes.auth}
            className={styles.authButton}
          />
        </div>
      )}
    </div>
  );
};
