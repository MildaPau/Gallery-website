/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import { v4 as createId } from 'uuid';
import {
  SculpturesAction,
  SculpturesState,
  SculptureActionType,
} from './sculpture-types';

const initialState: SculpturesState = {
  sculptures: [],
  loading: false,
  error: null,
};

const sculpturesReducer: Reducer<SculpturesState, SculpturesAction> = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case SculptureActionType.FETCH_SCULPTURES_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case SculptureActionType.FETCH_SCULPTURES_SUCCESS: {
      return {
        ...state,
        loading: false,
        sculptures: action.payload.sculptures,
      };
    }

    case SculptureActionType.FETCH_SCULPTURES_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case SculptureActionType.SCULPTURES_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    case SculptureActionType.NEW_SCULPTURE: {
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

    case SculptureActionType.DELETE_SCULPTURE:
      return {
        ...state,
        sculptures: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
      };

    default: return state;
  }
};
export default sculpturesReducer;
