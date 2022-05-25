import { ThunkDispatch } from 'redux-thunk';
import { AuthState, AuthAction } from './features/auth/auth-types';
import { NavigationState, NavigationAction } from './features/navigation/types';
import { SculpturesState, SculpturesAction } from './features/sculptures/types';

export type RootState = {
  auth: AuthState,
  navigation: NavigationState,
  sculptures: SculpturesState,
};

export type AppAction = AuthAction | NavigationAction | SculpturesAction;

export type AppDispatch = ThunkDispatch<State, undefined, Action>;
