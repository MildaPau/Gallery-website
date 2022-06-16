import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { NavigationState, NavigationAction } from './features/navigation/navigation-types';
import { SculpturesState, SculpturesAction } from './features/sculptures/sculpture-types';
import { CardsState, CardsAction } from './features/info-cards/cards-types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState,
  sculptures: SculpturesState,
  cards: CardsState,
};

export type AppAction = AuthAction | NavigationAction | SculpturesAction | CardsAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
