import AuthenticateService from './auth-api-service';
import { Crudentials, User } from '../types';
import { isResponseError } from './api-service';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

namespace AuthService {

  export const login: AuthPromise = async (crudentials: Crudentials) => {
    try {
      const response = await AuthenticateService.fetchUsers(crudentials);
      console.log(response.data);
      return response.data.user;
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
