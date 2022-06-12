import { Dispatch } from 'react';
import { AppAction } from '../../types';
import {
  SculpturesAction,
  SculptureActionType,
} from './sculpture-types';
import { CreateSculpture, Sculpture } from '../../../types';
import SculptureService from '../../../services/scultures-api-service';
import pause from '../../../helpers/pause';

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
    const sculpturesItems = await SculptureService.fetchItems();
    await pause(2000);
    dispatch(createFecthSculpturesSuccessAction(sculpturesItems));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthSculpturesFailureAction = createFecthSculpturesFailureAction(errMsg);
    dispatch(fecthSculpturesFailureAction);
  }
};

export const createNewSculptureAction = (sculpture: CreateSculpture) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await SculptureService.createNewItem(sculpture);
  const sculpturesItems = await SculptureService.fetchItems();
  dispatch(createFecthSculpturesSuccessAction(sculpturesItems));
};

export const createUpdateSculptureAction = (sculpture: Sculpture) => async (dispatch: Dispatch<AppAction>): Promise<void> => {
  await SculptureService.updateItem(sculpture);
  const sculpturesItems = await SculptureService.fetchItems();
  dispatch(createFecthSculpturesSuccessAction(sculpturesItems));
};

export const createDeleteSculptureAction = (id: string) => async (dispatch: Dispatch<AppAction>) => {
  await SculptureService.deleteItem(id);
  const sculpturesItems = await SculptureService.fetchItems();
  dispatch(createFecthSculpturesSuccessAction(sculpturesItems));
};
