import { RootState } from '../../types';

export const selectSculpturesLoading = (state: RootState) => state.sculptures.loading;

export const selectSculptures = (state: RootState) => state.sculptures.sculptures;

export const selectSculpturesError = (state: RootState) => state.sculptures.error;
