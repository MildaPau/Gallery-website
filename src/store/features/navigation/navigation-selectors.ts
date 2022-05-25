import { RootState } from '../../types';

const selectRedirect = (state: RootState) => state.navigation.redirect;

export default selectRedirect;
