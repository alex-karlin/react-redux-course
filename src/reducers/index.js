import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  // Short-hand property name
  authors,
  courses
});

export default rootReducer;
