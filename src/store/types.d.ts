import { ThunkDispatch } from 'redux-thunk';
import { User } from '../types';

export type State = {
  sculptures: Sculpture[],
  cart: CartItem[],
  auth: {
    user: User | null,
    error: string | null,
    loading: boolean,
  },
  redirect: string | null,
};

export type CreatNewSculptureAction = {
  type: 'NEW_SCULPTURE',
};

export type DeleteSculptureAction = {
  type: 'DELETE_SCULPTURE',
  payload: {
    id: string,
  }
};

export type AuthSuccessAction = {
  type: 'AUTH_SUCCESS',
  payload: {
    user: User,
    redirect: string,
  }
};

export type AuthFailureAction = {
  type: 'AUTH_FAILURE',
  payload: {
    error: string,
  }
};

export type AuthLoadingAction = {
  type: 'AUTH_LOADING',
};

export type AuthClearErrorAction = {
  type: 'AUTH_CLEAR_ERROR',
};

export type ClearRedirectAction = {
  type: 'CLEAR_REDIRECT',
};

export type AuthLogoutAction = {
  type: 'AUTH_LOGOUT',
};

export type Action =
  CreatNewSculptureAction |
  DeleteSculptureAction |
  AuthSuccessAction |
  AuthFailureAction |
  AuthLoadingAction |
  AuthClearErrorAction |
  ClearRedirectAction |
  AuthLogoutAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
