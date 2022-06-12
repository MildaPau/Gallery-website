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

    case SculptureActionType.NEW_SCULPTURE:
      return {
        ...state,
        sculptures: [
          ...state.sculptures,
          {
            ...action.payload.sculpture,
            id: createId(),
          },
        ],
      };

    case SculptureActionType.UPDATE_SCULPTURE: {
      const index = state.sculptures.findIndex((sculpture) => sculpture.id === action.payload.sculpture.id);
      const newSculptures = [...state.sculptures];
      newSculptures[index] = action.payload.sculpture;
      return {
        ...state,
        sculptures: newSculptures,
      };
    }

    case SculptureActionType.DELETE_SCULPTURE:
      return {
        ...state,
        sculptures: state.sculptures.filter((sculptures) => sculptures.id !== action.payload.id),
      };

    default: return state;
  }
};
export default sculpturesReducer;
