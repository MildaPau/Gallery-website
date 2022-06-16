import { CreateCard, Card } from '../types';
import ApiService, { formatError } from './api-service';

const fetchCards = async (): Promise<Card[]> => {
  try {
    const { data } = await ApiService.get<{ cards: Card[] }>('/api/cards');
    return data.cards;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const deleteCard = async (id: string, token: string) => {
  try {
    const { data } = await ApiService.delete<{ card: Card }>(`/api/cards/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return data.card;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const createNewCard = async (card: CreateCard, token: string) => {
  try {
    const { data } = await ApiService.post<{ card: Card }>(
      'api/cards/',
      card,
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.card;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const updateCard = async (card: Card, token: string) => {
  try {
    const { data } = await ApiService.patch<{ card: Card }>(
      `api/cards/${card.id}`,
      {
        title: card.title,
        city: card.city,
        year: card.year,
        location: card.location,
        image: card.image,
      },
      {
        headers: {
          Authorization: token,
        },
      },
    );
    return data.card;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const CardService = {
  fetchCards,
  deleteCard,
  createNewCard,
  updateCard,
};

export default CardService;
