import { Dispatch } from 'react';
import { AppAction, RootState } from '../../types';
import {
  SculpturesAction,
  SculptureActionType,
} from './sculpture-types';
import { CreateSculpture, Sculpture } from '../../../types';
import SculptureService from '../../../services/scultures-api-service';

export const createfetchSculpturesLoadingAction: SculpturesAction = ({
  type: SculptureActionType.FETCH_SCULPTURES_LOADING,
});

export const createFecthSculpturesSuccessAction = (sculptures: Sculpture[]): SculpturesAction => ({
  type: SculptureActionType.FETCH_SCULPTURES_SUCCESS,
  payload: { sculptures },
});

export const createFecthSculpturesFailureAction = (error: string): SculpturesAction => ({
  type: SculptureActionType.FETCH_SCULPTURES_FAILURE,
  payload: { error },
});

export const sculpturesClearErrorAction: SculpturesAction = ({
  type: SculptureActionType.SCULPTURES_CLEAR_ERROR,
});

export const createfetchSculpturesAction = async (dispatch: Dispatch<AppAction>) => {
  dispatch(createfetchSculpturesLoadingAction);
  try {
    const sculpturesItems = await SculptureService.fetchSculptures();
    dispatch(createFecthSculpturesSuccessAction(sculpturesItems));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthSculpturesFailureAction = createFecthSculpturesFailureAction(errMsg);
    dispatch(fecthSculpturesFailureAction);
  }
};

export const createNewSculptureAction = (sculpture: CreateSculpture) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await SculptureService.createNewSculpture(sculpture, token);
  createfetchSculpturesAction(dispatch);
};

export const createUpdateSculptureAction = (sculpture: Sculpture) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await SculptureService.updateSculpture(sculpture, token);
  createfetchSculpturesAction(dispatch);
};

export const createDeleteSculptureAction = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await SculptureService.deleteSculpture(id, token);
  createfetchSculpturesAction(dispatch);
};
