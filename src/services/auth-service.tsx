import { Crudentials, User } from '../types';
import ApiService, { formatError } from './api-service';

export type AuthResponseBody = {
  user: User,
  token: string,
};

export const login = async (crudentials: Crudentials): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/login', crudentials);
    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

export const authenticate = async (token: string): Promise<AuthResponseBody> => {
  try {
    const response = await ApiService.post<AuthResponseBody>('/api/auth/authenticate', {}, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const AuthService = {
  login,
  authenticate,
};

export default AuthService;
