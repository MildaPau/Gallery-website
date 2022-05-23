import axios from 'axios';
import { Crudentials, TemporaryAdmin, User } from '../../../types';

export type AuthPromise = (crudential: Crudentials) => Promise<User>;

namespace AuthService {

  export const login: AuthPromise = async ({ email, password }: Crudentials): Promise<User> => {
    const { data: tempAdmin } = await axios
      .get<TemporaryAdmin[]>(`http://localhost:8000/admin?email=${email}`);

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

  export const register: AuthPromise = async ({ email, password }: Crudentials) => {
    const { data: tempAdmin } = await axios.get<TemporaryAdmin[]>('http://localhost:8000/admin');

    const userExists = tempAdmin.map((x) => x.email).includes(email);
    if (userExists) {
      throw new Error('Toks vartotojas jau egzistuoja. Pasirinkite kitą el. paštą');
    }

    const { data: createdTempAdmin } = await axios.post('http://localhost:8000/admin', { email, password });

    const createdAdmin: User = {
      id: createdTempAdmin.id,
      email: createdTempAdmin.email,
    };

    return createdAdmin;
  };

  export const checkEmailAvailability = async (email: string): Promise<boolean> => {
    const { data: tempAdmin } = await axios.get<TemporaryAdmin[]>('http://localhost:8000/admin');
    const emails = tempAdmin.map((x) => x.email);

    return !emails.includes(email);
  };
}

export default AuthService;
