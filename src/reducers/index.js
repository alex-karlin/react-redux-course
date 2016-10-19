import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // Short-hand property name
  courses
});

export default rootReducer;
