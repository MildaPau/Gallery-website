import { Crudentials, User } from '../types';
import ApiService from './api-service';

export type AuthResponseBody = {
  user: User,
  token: string,
};

const fetchUsers = async (crudentials: Crudentials) => {
  const response = await ApiService.post<AuthResponseBody>('/api/auth/login', crudentials);
  return response;
};

const AuthenticateService = {
  fetchUsers,
};

export default AuthenticateService;
