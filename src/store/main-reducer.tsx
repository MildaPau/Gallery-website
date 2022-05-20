/* eslint-disable @typescript-eslint/default-param-last */
import { Reducer } from 'redux';
import { v4 as createId } from 'uuid';
import { State, Action } from './types';

const initialState: State = {
  sculptures: [
    {
      id: '1',
      img: 'images/Eina.jpg',
      title: 'Eina / Walking.',
      year: 2020,
      dimensions: '41,5 x 8,5 x 24,5 cm',
      price: 1000,
    },
    {
      id: '2',
      img: 'images/Kalnas.jpg',
      title: 'Kalnas / Mountain.',
      year: 2020,
      dimensions: '51 x 9 x 30,5 cm',
      price: 1000,
    },
    {
      id: '3',
      img: 'images/Peizažas su.jpg',
      title: 'Peizažas su gyvatėm / Landscape with Snakes.',
      year: 2021,
      dimensions: '51 x 9 x 30,5 cm',
      price: 1000,
    },
  ],
  cart: [],
  auth: {
    user: null,
    error: null,
    loading: false,
  },
  redirect: null,
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
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
            year: 2020,
            dimensions: '41,5 x 8,5 x 24,5 cm',
            price: 1000,
          },
        ],
      };

    case 'DELETE_SCULPTURE':
      return {
        ...state,
        sculptures: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
      };

    case 'AUTH_SUCCESS': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: action.payload.user,
          loading: false,
        },
        redirect: action.payload.redirect,
      };
    }

    case 'AUTH_FAILURE': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: action.payload.error,
          loading: false,
        },
      };
    }

    case 'AUTH_LOGOUT': {
      return {
        ...state,
        auth: {
          ...state.auth,
          user: null,
        },
      };
    }

    case 'AUTH_CLEAR_ERROR': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: null,
        },
      };
    }

    case 'CLEAR_REDIRECT': {
      return {
        ...state,
        redirect: null,
      };
    }

    case 'AUTH_LOADING': {
      return {
        ...state,
        auth: {
          ...state.auth,
          error: null,
          loading: true,
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
