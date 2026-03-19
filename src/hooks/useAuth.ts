import { getAuthTokenFromLocalStorage } from 'utils/workWithLocalStorage';

export const useAuth = () => {
  const isAuth = !!getAuthTokenFromLocalStorage();

  return { isAuth };
};
