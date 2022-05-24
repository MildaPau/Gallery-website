import { Dispatch } from 'react';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  SculpturesAction,
} from './types';
import { Sculpture } from '../../../types';
import pause from '../../../helpers/pause';

export const createfetchSculpturesLoadingAction: SculpturesAction = ({
  type: 'FETCH_SCULPTURES_LOADING',
});

const createFecthSculpturesSuccessAction = (sculptures: Sculpture[]): SculpturesAction => ({
  type: 'FETCH_SCULPTURES_SUCCESS',
  payload: { sculptures },
});

const createFecthSculpturesFailureAction = (error: string): SculpturesAction => ({
  type: 'FETCH_SCULPTURES_FAILURE',
  payload: { error },
});

export const sculpturesClearErrorAction: SculpturesAction = ({
  type: 'SCULPTURES_CLEAR_ERROR',
});

export const createfetchSculpturesAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  dispatch(createfetchSculpturesLoadingAction);

  try {
    const { data } = await axios.get<Sculpture[]>('http://localhost:8001/sculptures');
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
  type: 'NEW_SCULPTURE',
});

export const deleteSculptureAction = (id: string): SculpturesAction => ({
  type: 'DELETE_SCULPTURE',
  payload: { id },
});
