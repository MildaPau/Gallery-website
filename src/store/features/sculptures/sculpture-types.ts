import { CreateSculpture, Sculpture } from '../../../types';

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
  NEW_SCULPTURE = 'NEW_SCULPTURE',
  UPDATE_SCULPTURE = 'UPDATE_SCULPTURE',
  DELETE_SCULPTURE = 'DELETE_SCULPTURE',
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

export type CreatNewSculptureAction = {
  type: SculptureActionType.NEW_SCULPTURE,
  payload: {
    sculpture: CreateSculpture;
  }
};

export type CreatUpdateSculptureAction = {
  type: SculptureActionType.UPDATE_SCULPTURE,
  payload: {
    sculpture: Sculpture;
  }
};

export type DeleteSculptureAction = {
  type: SculptureActionType.DELETE_SCULPTURE,
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
  CreatUpdateSculptureAction |
  DeleteSculptureAction;
