import {
  FETCH_DATA,
  RESET_SEARCH,
  SUBMIT_SEARCH,
  UPDATE_SEARCH
} from '../actions/types';

export const handleSearch = store => next => action => {
  const result = next(action);

  switch (action.type) {
    // When user is typing...
    case UPDATE_SEARCH:
      if (action.searchValue.length === 0) {
        store.dispatch({
          type: RESET_SEARCH
        });
      }
      break;

    case SUBMIT_SEARCH:
      if (action.query.length > 0) {
        store.dispatch({
          type: FETCH_DATA,
          query: action.query
        });
      }
      break;
  };

  return result;
}
