/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'react';
import {
  CardsAction,
  CardsState,
  CardActionType,
} from './cards-types';

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: null,
};

const cardsReducer: Reducer<CardsState, CardsAction> = (state = initialState, action) => {
  switch (action.type) {
    case CardActionType.FETCH_CARDS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case CardActionType.FETCH_CARDS_SUCCESS: {
      return {
        ...state,
        loading: false,
        cards: action.payload.cards,
      };
    }

    case CardActionType.FETCH_CARDS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }

    case CardActionType.CARDS_CLEAR_ERROR: {
      return {
        ...state,
        error: null,
      };
    }

    default: return state;
  }
};
export default cardsReducer;
