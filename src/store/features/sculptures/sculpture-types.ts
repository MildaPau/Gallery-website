import { Sculpture } from '../../../types';

export type SculpturesState = {
  sculptures: Sculpture[],
  loading: boolean,
  error: string | null,
};

export enum SculptureActionType {
  FETCH_SCULPTURES_LOADING = 'FETCH_SCULPTURES_LOADING',
  FETCH_SCULPTURES_SUCCESS = 'FETCH_SCULPTURES_SUCCESS',
  FETCH_SCULPTURES_FAILURE = 'FETCH_SCULPTURES_FAILURE',
  SCULPTURES_CLEAR_ERROR = 'SCULPTURES_CLEAR_ERROR',
}

export type FetchSculpturesLoadingAction = {
  type: SculptureActionType.FETCH_SCULPTURES_LOADING,
};

export type FetchSculpturesSuccessAction = {
  type: SculptureActionType.FETCH_SCULPTURES_SUCCESS,
  payload: {
    sculptures: Sculpture[],
  }
};
export type FetchSculpturesFailureAction = {
  type: SculptureActionType.FETCH_SCULPTURES_FAILURE,
  payload: {
    error: string,
  }
};

export type SculpturesClearErrorAction = {
  type: SculptureActionType.SCULPTURES_CLEAR_ERROR,
};

export type SculpturesAction =
  FetchSculpturesLoadingAction |
  FetchSculpturesSuccessAction |
  FetchSculpturesFailureAction |
  SculpturesClearErrorAction;
