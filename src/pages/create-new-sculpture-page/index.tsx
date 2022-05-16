import React from 'react';
import { useDispatch } from 'react-redux';
import CreateNewSculptureForm from './create-new-sculpture-form';

const CreateNewSculpturePage: React.FC = () => {
  const dispatch = useDispatch();

  const createNewItem = (): void => {
    dispatch({
      type: 'NEW_SCULPTURE',
      payload: {},
    });
  };
  return (
    <CreateNewSculptureForm createNewItem={createNewItem} />
  );
};
export default CreateNewSculpturePage;
