const AUTH_TOKEN = 'auth-token';

export const getAuthTokenFromLocalStorage = () => localStorage.getItem(AUTH_TOKEN);
