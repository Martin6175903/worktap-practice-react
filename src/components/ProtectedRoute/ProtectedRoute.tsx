import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { routes } from 'utils/core/routes';

type ProtectedRouteProps = {
  isAuth?: boolean;
};

export const ProtectedRoute = ({ isAuth = false }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(routes.auth);
    }
  }, [isAuth, navigate]);

  return <Outlet />;
};
