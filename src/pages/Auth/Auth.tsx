import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { routes } from 'utils/core/routes';

export const Auth = ({ isAuth = false }: { isAuth?: boolean }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate(routes.main);
  }, [isAuth, navigate]);

  return <div>Auth Page</div>;
};
