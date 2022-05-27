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

const createNewItem = async ({
  title, year, dimensions, img,
}: CreateSculpture) => {
  const { data } = await ApiService.post<Sculpture>('/sculptures/', {
    title, year, dimensions, img,
  });
  return data;
};

const ShopService = {
  fetchItems,
  deleteItem,
  createNewItem,
};

export default ShopService;
