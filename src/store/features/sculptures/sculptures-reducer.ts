/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import { v4 as createId } from 'uuid';
import { SculpturesAction, SculpturesState } from './types';

const initialState: SculpturesState = {
  sculptures: [],
  loading: false,
  error: null,
};

const sculpturesReducer: Reducer<SculpturesState, SculpturesAction> = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case 'FETCH_SCULPTURES_LOADING': {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case 'FETCH_SCULPTURES_SUCCESS': {
      return {
        ...state,
        loading: false,
        sculptures: action.payload.sculptures,
      };
    }

    case 'FETCH_SCULPTURES_FAILURE': {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case 'SCULPTURES_CLEAR_ERROR': {
      return {
        ...state,
        error: null,
      };
    }

    case 'NEW_SCULPTURE': {
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
    }

    case 'DELETE_SCULPTURE':
      return {
        ...state,
        sculptures: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
      };

    default: return state;
  }
};
export default sculpturesReducer;
