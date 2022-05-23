import { combineReducers } from 'redux';
import authReducer from './features/auth/auth-reducer';
import navigationReducer from './features/navigation/navigation-reducer';
import sculpturesReducer from './features/sculptures/sculptures-reducer';

const mainReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  sculptures: sculpturesReducer,
});
export default mainReducer;
