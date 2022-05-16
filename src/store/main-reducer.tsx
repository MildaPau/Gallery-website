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
};

const mainReducer: Reducer<State, Action> = (state = initialState, action) => {
  console.log(state);
  // if (action.type === 'ADD_TO_CART') {
  //   return {
  //     ...state,
  //     cart: [
  //       ...state.cart,
  //       { id: createId(), itemId: action.payload.id, amount: 1 },
  //     ],

  //   };
  // }
  // if (action.type === 'DELETE_ITEM') {
  //   return {
  //     ...state,
  //     items: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
  //   };
  // }
  // return { ...state };
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          { id: createId(), itemId: action.payload.id, amount: 1 },
        ],
      };
    case 'DELETE_SCULPTURE':
      return {
        ...state,
        sculptures: state.sculptures.filter((sculpture) => sculpture.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default mainReducer;
