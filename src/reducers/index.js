import { combineReducers } from 'redux';
import authenticated from './authentication';

const rootReducer = combineReducers({
  authenticated,
});

export default rootReducer;
