import { useAuth } from 'hooks';
import { useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { routes } from 'utils/core/routes';

export const ProtectedRoute = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isAuth) {
      navigate(routes.auth);
    }
  }, [isAuth, navigate]);

  return <Outlet />;
};
