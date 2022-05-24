import { Sculpture } from '../../../types';

export type SculpturesState = {
  sculptures: Sculpture[],
  loading: boolean,
  error: string | null,
};

export type FetchSculpturesLoadingAction = {
  type: 'FETCH_SCULPTURES_LOADING',
};

export type FetchSculpturesSuccessAction = {
  type: 'FETCH_SCULPTURES_SUCCESS',
  payload: {
    sculptures: Sculptures[],
  }
};
export type FetchSculpturesFailureAction = {
  type: 'FETCH_SCULPTURES_FAILURE',
  payload: {
    error: string,
  }
};

export type SculpturesClearErrorAction = {
  type: 'SCULPTURES_CLEAR_ERROR',
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

export type SculpturesAction =
  FetchSculpturesLoadingAction |
  FetchSculpturesSuccessAction |
  FetchSculpturesFailureAction |
  SculpturesClearErrorAction |
  CreatNewSculptureAction |
  DeleteSculptureAction;
