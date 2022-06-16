import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import sculpturesReducer from './features/sculptures/sculptures-reducer';
import cardsReducer from './features/info-cards/cards-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  sculptures: sculpturesReducer,
  cards: cardsReducer,
});
export default mainReducer;
