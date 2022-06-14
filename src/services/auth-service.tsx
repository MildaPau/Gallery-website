import AuthenticateService, { AuthResponseBody } from './auth-api-service';
import { Crudentials } from '../types';
import ApiService, { isResponseError } from './api-service';

export const login = async (crudentials: Crudentials): Promise<AuthResponseBody> => {
  try {
    const response = await AuthenticateService.fetchUsers(crudentials);
    return response.data;
  } catch (err) {
    if (isResponseError(err)) {
      throw new Error(err.response.data.error);
    }
    console.log('Neprognozuota klaida');
    throw (err);
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
    if (isResponseError(err)) {
      throw new Error(err.response.data.error);
    }
    console.log('Neprognozuota klaida');
    throw (err);
  }
};

const AuthService = {
  login,
  authenticate,
};

export default AuthService;
