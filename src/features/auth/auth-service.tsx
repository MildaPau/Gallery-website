import axios from 'axios';
import { Crudentials, TemporaryAdmin, User } from '../../types';

namespace AuthService {

  export const login = async ({ email, password }: Crudentials): Promise<User> => {
    const { data: tempAdmin } = await axios.get<TemporaryAdmin[]>(`http://localhost:8000/admin?email=${email}`);
    if (tempAdmin.length === 0) {
      throw new Error('User with such email was not found');
    }

    const [tempUser] = tempAdmin;

    if (tempUser.password !== password) {
      throw new Error('Passwords do not match');
    }

    return {
      id: tempUser.id,
      name: tempUser.name,
      surname: tempUser.surname,
      email: tempUser.email,
      img: tempUser.img,
    };
  };

}

export default AuthService;
