import axios from 'axios';
import { Crudentials, TemporaryAdmin, User } from '../../../types';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

const API_SERVER = process.env.REACT_APP_API_SERVER;

namespace AuthService {

  export const login: AuthPromise = async ({ email, password }: Crudentials): Promise<User> => {
    const { data: tempAdmin } = await axios
      .get<TemporaryAdmin[]>(`${API_SERVER}/admin?email=${email}`);

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
