// this is the root reducer

import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';

export default combineReducers({
  // 'log:' assigns a name to the data coming from the reducer
  log: logReducer,
  tech: techReducer,
});
