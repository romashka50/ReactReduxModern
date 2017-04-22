import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import posts from './posts-reducer';

const rootReducer = combineReducers({
  form: reduxForm,
  posts,
});

export default rootReducer;
