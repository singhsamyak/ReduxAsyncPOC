import { FETCH_FAILURE, FETCH_SUCCESS, RESET_SEARCH } from '../actions/types';
import { tidyRawData } from '../utilities';

const defaultState = {
  oops: false,
  posts: [],
  subRedditTitle: ''
}

export default function(state = defaultState, action) {
  switch(action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        oops: false,
        posts: action.posts,
        subRedditTitle: action.subRedditTitle
      };

    case FETCH_FAILURE:
      return {
        ...state,
        oops: true,
        posts: [],
        subRedditTitle: action.subRedditTitle
      };

    case RESET_SEARCH:
      return {
        ...state,
        oops: false,
        posts: [],
        subRedditTitle: ''
      };

    default:
      return state;
  };
}
