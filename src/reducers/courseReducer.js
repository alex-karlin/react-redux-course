import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  "use strict";
  // switch can be replaced with function lookup table
  switch (action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
