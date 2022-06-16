import { Dispatch } from 'react';
import { AppAction, RootState } from '../../types';
import {
  CardsAction,
  CardActionType,
} from './cards-types';
import { CreateCard, Card } from '../../../types';
import CardService from '../../../services/cards-service';

export const createfetchCardsLoadingAction: CardsAction = ({
  type: CardActionType.FETCH_CARDS_LOADING,
});

export const createFecthCardsSuccessAction = (cards: Card[]): CardsAction => ({
  type: CardActionType.FETCH_CARDS_SUCCESS,
  payload: { cards },
});

export const createFecthCardsFailureAction = (error: string): CardsAction => ({
  type: CardActionType.FETCH_CARDS_FAILURE,
  payload: { error },
});

export const cardsClearErrorAction: CardsAction = ({
  type: CardActionType.CARDS_CLEAR_ERROR,
});

export const createfetchCardsActionThunk = async (dispatch: Dispatch<AppAction>) => {
  dispatch(createfetchCardsLoadingAction);
  try {
    const cardsItems = await CardService.fetchCards();
    dispatch(createFecthCardsSuccessAction(cardsItems));
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    const fecthCardsFailureAction = createFecthCardsFailureAction(errMsg);
    dispatch(fecthCardsFailureAction);
  }
};

export const createNewCardActionThunk = (card: CreateCard) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
): Promise<void> => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await CardService.createNewCard(card, token);
  createfetchCardsActionThunk(dispatch);
};
export const createUpdateCardActionThunk = (card: Card) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await CardService.updateCard(card, token);
  createfetchCardsActionThunk(dispatch);
};

export const createDeleteCardActionThunk = (id: string) => async (
  dispatch: Dispatch<AppAction>,
  getState: () => RootState,
) => {
  const { token } = getState().auth;
  if (token === null) {
    throw new Error('Reikalingas prisijungimas');
  }
  await CardService.deleteCard(id, token);
  createfetchCardsActionThunk(dispatch);
};
