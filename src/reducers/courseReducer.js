import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  "use strict";
  // switch can be replaced with function lookup table
  switch (action.type){
    case types.CREATE_COURSE:
      // these are 2 tools that are heavily used in ES6
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
