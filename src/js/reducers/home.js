import {
  FETCH_DATA,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  FETCHING_DATA,
  RESET_SEARCH
} from '../actions/types';

const defaultState = {
  loading: false,
  postsDisplayed: false
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        postsDisplayed: true
      };

    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        postsDisplayed: true
      };

    case RESET_SEARCH:
      return {
        ...state,
        postsDisplayed: false
      };

    default:
      return state;
  };
}
