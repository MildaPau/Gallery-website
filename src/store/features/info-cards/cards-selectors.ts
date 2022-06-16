import { RootState } from '../../types';

export const selectCardsLoading = (state: RootState) => state.cards.loading;

export const selectCards = (state: RootState) => state.cards.cards;

export const selectCardById = (id?: string) => (state: RootState) => (id
  ? state.cards.cards.find((card) => id === card.id)
  : undefined);

export const selectCardsError = (state: RootState) => state.cards.error;
