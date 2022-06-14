import AuthenticateService, { AuthResponseBody } from './auth-api-service';
import { Crudentials } from '../types';
import ApiService, { formatError } from './api-service-new';

export const login = async (crudentials: Crudentials): Promise<AuthResponseBody> => {
  try {
    const response = await AuthenticateService.fetchUsers(crudentials);
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
