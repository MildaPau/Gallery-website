import { Dispatch } from 'redux';
import AuthService from '../features/auth/auth-service';
import pause from '../helpers/pause';
import { Crudentials, User } from '../types';
import {
  CreatNewSculptureAction,
  DeleteSculptureAction,
  AuthSuccessAction,
  AuthFailureAction,
  AuthLoadingAction,
  AuthClearErrorAction,
  AuthLogoutAction,
  ClearRedirectAction,
  Action,
} from './types';

export const creatNewSculptureAction: CreatNewSculptureAction = ({
  type: 'NEW_SCULPTURE',
});

export const deleteSculptureAction = (id: string): DeleteSculptureAction => ({
  type: 'DELETE_SCULPTURE',
  payload: { id },
});

export const createAuthSuccessAction = (user: User, redirect: string): AuthSuccessAction => ({
  type: 'AUTH_SUCCESS',
  payload: { user, redirect },
});

export const createAuthFailureAction = (error: string): AuthFailureAction => ({
  type: 'AUTH_FAILURE',
  payload: { error },
});

export const authLoadingAction: AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export const authClearErrorAction: AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export const authLogoutAction: AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

export const clearRedirectAction: ClearRedirectAction = {
  type: 'CLEAR_REDIRECT',
};

export const createLoginAction = (
  crudentials: Crudentials,
  redirect: string,
) => async (dispatch: Dispatch<Action>): Promise<void> => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await AuthService.login(crudentials);
    await pause(3000);
    const authSuccessAction = createAuthSuccessAction(user, redirect);
    // siunčiame Reducer'iui
    dispatch(authSuccessAction);
    dispatch(clearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};
