import { Sculpture } from '../types';
import ApiService, { formatError } from './api-service';

const fetchSculptures = async (): Promise<Sculpture[]> => {
  try {
    const { data } = await ApiService.get<{ sculptures: Sculpture[] }>('/api/sculptures?populate=categories');
    return data.sculptures;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const deleteSculpture = async (id: string, token: string) => {
  try {
    const { data } = await ApiService.delete<{ sculpture: Sculpture }>(`/api/sculptures/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data.sculpture;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const createNewSculpture = async (formData: FormData, token: string) => {
  try {
    const { data } = await ApiService.post<{ formData: FormData }>(
      'api/sculptures/',
      formData,
      {
        headers: {
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data.formData;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const updateSculpture = async (sculpture: Sculpture, token: string) => {
  try {
    const { data } = await ApiService.patch<{ sculpture: Sculpture }>(
      `api/sculptures/${sculpture.id}`,
      {
        title: sculpture.title,
        year: sculpture.year,
        dimensions: sculpture.dimensions,
        image: sculpture.image,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.sculpture;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const SculptureService = {
  fetchSculptures,
  deleteSculpture,
  createNewSculpture,
  updateSculpture,
};

export default SculptureService;
