import { RootState } from '../../types';

export const selectSculpturesLoading = (state: RootState) => state.sculptures.loading;

export const selectSculptures = (state: RootState) => state.sculptures.sculptures;

export const selectSculptureById = (id?: string) => (state: RootState) => (id
  ? state.sculptures.sculptures.find((sculpture) => id === sculpture.id)
  : undefined);

export const selectSculpturesError = (state: RootState) => state.sculptures.error;
