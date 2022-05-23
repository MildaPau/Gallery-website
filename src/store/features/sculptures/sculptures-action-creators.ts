import { CreatNewSculptureAction, DeleteSculptureAction } from './types';

export const creatNewSculptureAction: CreatNewSculptureAction = ({
  type: 'NEW_SCULPTURE',
});

export const deleteSculptureAction = (id: string): DeleteSculptureAction => ({
  type: 'DELETE_SCULPTURE',
  payload: { id },
});
