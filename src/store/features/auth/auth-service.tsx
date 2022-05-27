import AuthenticateService from '../../../services/auth-api-service';
import { Crudentials, User } from '../../../types';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

namespace AuthService {

  export const login: AuthPromise = async ({ email, password }: Crudentials): Promise<User> => {
    const tempAdmin = await AuthenticateService.fetchUsers(email);

    if (tempAdmin.length === 0) {
      throw new Error('User with such email was not found');
    }

    const [tempUser] = tempAdmin;

    if (tempUser.password !== password) {
      throw new Error('Passwords do not match');
    }

    return {
      id: tempUser.id,
      email: tempUser.email,
    };
  };
}

export default AuthService;
