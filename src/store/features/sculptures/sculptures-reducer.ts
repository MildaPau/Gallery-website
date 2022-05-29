/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
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

    default: return state;
  }
};
export default sculpturesReducer;
