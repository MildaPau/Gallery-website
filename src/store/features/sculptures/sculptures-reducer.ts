/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import { v4 as createId } from 'uuid';
import { SculpturesAction, SculpturesState } from './types';

const initialState: SculpturesState = {
  sculptures: [
    {
      id: '1',
      img: 'images/Eina.jpg',
      title: 'Eina / Walking.',
      year: '2020',
      dimensions: '41,5 x 8,5 x 24,5 cm',
    },
    {
      id: '2',
      img: 'images/Kalnas.jpg',
      title: 'Kalnas / Mountain.',
      year: '2020',
      dimensions: '51 x 9 x 30,5 cm',
    },
    {
      id: '3',
      img: 'images/Peizažas su.jpg',
      title: 'Peizažas su gyvatėm / Landscape with Snakes.',
      year: '2021',
      dimensions: '51 x 9 x 30,5 cm',
    },
  ],
};

const sculpturesReducer: Reducer<SculpturesState, SculpturesAction> = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case 'NEW_SCULPTURE':
      return {
        ...state,
        sculptures: [
          ...state.sculptures,
          {
            id: createId(),
            img: 'images/Eina.jpg',
            title: 'Naujai sukurta skulptūra',
            year: '2020',
            dimensions: '41,5 x 8,5 x 24,5 cm',
          },
        ],
      };

    case 'DELETE_SCULPTURE':
      return {
        ...state,
        sculptures: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
      };

    default: return state;
  }
};
export default sculpturesReducer;
