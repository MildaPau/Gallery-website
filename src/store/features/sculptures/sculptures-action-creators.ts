import { Dispatch } from 'react';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  SculpturesAction,
  SculptureActionType,
} from './sculpture-types';
import { Sculpture } from '../../../types';
import pause from '../../../helpers/pause';

const API_SERVER = process.env.REACT_APP_API_SERVER;

export const createfetchSculpturesLoadingAction: SculpturesAction = ({
  type: SculptureActionType.FETCH_SCULPTURES_LOADING,
});

const createFecthSculpturesSuccessAction = (sculptures: Sculpture[]): SculpturesAction => ({
  type: SculptureActionType.FETCH_SCULPTURES_SUCCESS,
  payload: { sculptures },
});

const createFecthSculpturesFailureAction = (error: string): SculpturesAction => ({
  type: SculptureActionType.FETCH_SCULPTURES_FAILURE,
  payload: { error },
});

export const sculpturesClearErrorAction: SculpturesAction = ({
  type: SculptureActionType.SCULPTURES_CLEAR_ERROR,
});

export const createfetchSculpturesAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(createfetchSculpturesLoadingAction);

  try {
    const { data } = await axios.get<Sculpture[]>(`${API_SERVER}/sculptures`);
    await pause(2000);
    const fecthSculpturesSuccessAction = createFecthSculpturesSuccessAction(data);
    dispatch(fecthSculpturesSuccessAction);
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthSculpturesFailureAction = createFecthSculpturesFailureAction(errMsg);
    dispatch(fecthSculpturesFailureAction);
  }
};

export const creatNewSculptureAction: SculpturesAction = ({
  type: SculptureActionType.NEW_SCULPTURE,
});

export const deleteSculptureAction = (id: string): SculpturesAction => ({
  type: SculptureActionType.DELETE_SCULPTURE,
  payload: { id },
});
