import { TemporaryAdmin } from '../types';
import ApiService from './api-service';

const fetchUsers = async (email: string): Promise<TemporaryAdmin[]> => {
  const { data } = await ApiService.get<TemporaryAdmin[]>(`/admin?email=${email}`);
  return data;
};

const AuthenticateService = {
  fetchUsers,
};

export default AuthenticateService;
