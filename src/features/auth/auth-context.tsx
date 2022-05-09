import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crudentials, User } from '../../types';
import useLocalStorage from '../../hooks/use-local-storage-state';
import AuthService from './auth-service';
import pause from '../../helpers/pause';

export type AuthContextType = {
  user: null | User,
  loggedIn: boolean,
  error: string | null,
  loading: boolean,
  clearError: VoidFunction,
  login: (crudentials: Crudentials, next: string) => void,
  logout: VoidFunction,
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useLocalStorage<AuthContextType['loggedIn']>('loggedIn', false);
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [error, setError] = useState<AuthContextType['error']>(null);
  const [loading, setLoading] = useState<AuthContextType['loading']>(false);

  const login: AuthContextType['login'] = async (crudentials: Crudentials, next) => {
    if (error) {
      setError(null);
    }
    try {
      setLoading(true);
      await pause(3000);
      const loggedInUser = await AuthService.login(crudentials);
      setLoggedIn(true);
      setUser(loggedInUser);
      navigate('admin');
    } catch (err) {
      const { message } = (err as Error);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const logout: AuthContextType['logout'] = () => {
    setLoggedIn(false);
    navigate('/');
  };

  const clearError: AuthContextType['clearError'] = () => {
    setError(null);
  };

  const providerValue = useMemo(() => ({
    user,
    loggedIn,
    error,
    loading,
    clearError,
    login,
    logout,
  }), [loggedIn, user, error, loading]);

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
