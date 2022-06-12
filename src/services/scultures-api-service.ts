import { CreateSculpture, Sculpture } from '../types';
import ApiService from './api-service';

const fetchItems = async (): Promise<Sculpture[]> => {
  const { data } = await ApiService.get<Sculpture[]>('/sculptures');
  return data;
};

const deleteItem = async (id: string) => {
  const { data } = await ApiService.delete<Sculpture>(`/sculptures/${id}`);
  return data;
};

const createNewItem = async (sculpture: CreateSculpture) => {
  const { data } = await ApiService.post<Sculpture>('/sculptures/', sculpture);
  return data;
};

const updateItem = async (sculpture: Sculpture) => {
  const { data } = await ApiService.patch<Sculpture>(`/sculptures/${sculpture.id}`, sculpture);
  return data;
};

const SculptureService = {
  fetchItems,
  deleteItem,
  createNewItem,
  updateItem,
};

export default SculptureService;
