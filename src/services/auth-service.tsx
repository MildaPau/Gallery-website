import AuthenticateService, { AuthResponseBody } from './auth-api-service';
import { Crudentials } from '../types';
import { isResponseError } from './api-service';

export type AuthPromise = (crudential: Crudentials) => Promise<AuthResponseBody>;

namespace AuthService {

  export const login: AuthPromise = async (crudentials: Crudentials) => {
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
}

export default AuthService;
