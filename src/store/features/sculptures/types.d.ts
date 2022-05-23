import { Sculpture } from '../../../types';

export type SculpturesState = {
  sculptures: Sculpture[],
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

export type SculpturesAction = CreatNewSculptureAction | DeleteSculptureAction;
