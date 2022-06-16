import { Card } from '../../../types';

export type CardsState = {
  cards: Card[],
  loading: boolean,
  error: string | null,
};

export enum CardActionType {
  FETCH_CARDS_LOADING = 'FETCH_CARDS_LOADING',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_FAILURE = 'FETCH_CARDS_FAILURE',
  CARDS_CLEAR_ERROR = 'CARDS_CLEAR_ERROR',
}

export type FetchCardsLoadingAction = {
  type: CardActionType.FETCH_CARDS_LOADING,
};

export type FetchCardsSuccessAction = {
  type: CardActionType.FETCH_CARDS_SUCCESS,
  payload: {
    cards: Card[],
  }
};
export type FetchCardsFailureAction = {
  type: CardActionType.FETCH_CARDS_FAILURE,
  payload: {
    error: string,
  }
};

export type CardsClearErrorAction = {
  type: CardActionType.CARDS_CLEAR_ERROR,
};

export type CardsAction =
  FetchCardsLoadingAction |
  FetchCardsSuccessAction |
  FetchCardsFailureAction |
  CardsClearErrorAction;
