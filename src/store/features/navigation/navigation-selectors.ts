import { RootState } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const selectRedirect = (state: RootState) => state.navigation.redirect;
