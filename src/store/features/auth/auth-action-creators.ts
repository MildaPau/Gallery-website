import { Dispatch } from 'redux';
import AuthService, { AuthPromise } from './auth-service';
import pause from '../../../helpers/pause';
import { Crudentials, User } from '../../../types';
import { AuthActionType, AuthAction, } from './auth-types';

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

export const createAuthSuccessAction = (user: User, redirect: string): AuthAction => ({
  type: AuthActionType.AUTH_SUCCESS,
  payload: { user, redirect },
});

export const createAuthFailureAction = (error: string): AuthAction => ({
  type: AuthActionType.AUTH_FAILURE,
  payload: { error },
});

export const authenticate = async (
  dispatch: Dispatch<AppAction>,
  authCallback: AuthPromise,
  authCallbackArgs: Parameters<AuthPromise>,
  redirect: string,
) => {
  // siunčiame Reducer'iui
  dispatch(authLoadingAction);
  try {
    const user = await authCallback(...authCallbackArgs);
    await pause(3000);
    const authSuccessAction = createAuthSuccessAction(user, redirect);
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

export const createLoginAction = (
  crudentials: Crudentials,
  redirect: string,
) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await authenticate(dispatch, AuthService.login, [crudentials], redirect);
};
