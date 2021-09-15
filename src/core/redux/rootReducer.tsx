// import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';

export const config = (initState = { msg: 'hello' }): {} => {
  return initState;
};

const appReducers = combineReducers({
  config,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state.data = undefined;
    state.authentication = undefined;
    // AsyncStorage.removeItem('persist:authentication');
  }

  return appReducers(state, action);
};

export default rootReducer;
