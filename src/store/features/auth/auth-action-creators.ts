import { Dispatch } from 'redux';
import AuthService, { AuthResponseBody } from '../../../services/auth-service';
import { Crudentials } from '../../../types';
import { AuthActionType, AuthAction } from './auth-types';

import { AppAction } from '../../types';
import { createNavigationSetRedirectAction, navigationClearRedirectAction } from '../navigation/navigation-action-creators';

export const authLoadingAction: AuthAction = {
  type: AuthActionType.AUTH_LOADING,
};

export const authClearErrorAction: AuthAction = {
  type: AuthActionType.AUTH_CLEAR_ERROR,
};

export const authLogoutAction: AuthAction = {
  type: AuthActionType.AUTH_LOGOUT,
};

export const createAuthSuccessAction = (authResponseBody: AuthResponseBody): AuthAction => ({
  type: AuthActionType.AUTH_SUCCESS,
  payload: authResponseBody,
});

export const createAuthFailureAction = (error: string): AuthAction => ({
  type: AuthActionType.AUTH_FAILURE,
  payload: { error },
});

export const authenticate = async (
  dispatch: Dispatch<AppAction>,
  authCallback: () => Promise<AuthResponseBody>,
  redirect: string,
) => {
  dispatch(authLoadingAction);
  try {
    const authResponseBody = await authCallback();
    // await pause(2000);
    const authSuccessAction = createAuthSuccessAction(authResponseBody);
    // siunčiame Reducer'iui
    const navigationSetRedirectAction = createNavigationSetRedirectAction(redirect);
    dispatch(navigationSetRedirectAction);
    dispatch(authSuccessAction);
    dispatch(navigationClearRedirectAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const authFailureAction = createAuthFailureAction(errMsg);
    // siunčiame Reducer'iui
    dispatch(authFailureAction);
  }
};

export const createAuthenticateActionThunk = (token: string, redirect: string) => async (
  dispatch: Dispatch<AppAction>,
): Promise<void> => {
  // await pause(2000);
  await authenticate(dispatch, async () => AuthService.authenticate(token), redirect);
};

export const createLoginActionThunk = (
  crudentials: Crudentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, async () => AuthService.login(crudentials), redirect);
};
