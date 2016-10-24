import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

export function loadAuthorsFailure(error){
  throw(error);
}

export function loadAuthors() {
  return dispatch => {
    return authorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        dispatch(loadAuthorsFailure(error));
      });
  };
}
