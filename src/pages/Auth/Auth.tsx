import { useAuth } from 'hooks';
import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import { routes } from 'utils/core/routes';

export const Auth = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (isAuth) navigate(routes.main);
  }, [navigate, isAuth]);

  return <div>Auth Page</div>;
};
