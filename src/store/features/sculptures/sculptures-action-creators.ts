import { Dispatch } from 'react';
import axios from 'axios';
import { AppAction } from '../../types';
import {
  FetchSculpturesSuccessAction,
  SculpturesAction,
} from './types';
import { Sculpture } from '../../../types';
import pause from '../../../helpers/pause';

export const createfetchSculpturesLoadingAction: SculpturesAction = ({
  type: 'FETCH_SCULPTURES_LOADING',
});

const createFecthSculpturesSuccessAction = (sculptures: Sculpture[]): FetchSculpturesSuccessAction => ({
  type: 'FETCH_SCULPTURES_SUCCESS',
  payload: { sculptures },
});

export const createfetchSculpturesAction = async (dispatch: Dispatch<AppAction>): Promise<void> => {
  alert('Daromas Siuntimas ....');
  dispatch(createfetchSculpturesLoadingAction);

  const { data } = await axios.get<Sculpture[]>('http://localhost:8000/sculptures');
  await pause(2000);
  const fecthSculpturesSuccessAction = createFecthSculpturesSuccessAction(data);
  dispatch(fecthSculpturesSuccessAction);
};

export const creatNewSculptureAction: SculpturesAction = ({
  type: 'NEW_SCULPTURE',
});

export const deleteSculptureAction = (id: string): SculpturesAction => ({
  type: 'DELETE_SCULPTURE',
  payload: { id },
});
