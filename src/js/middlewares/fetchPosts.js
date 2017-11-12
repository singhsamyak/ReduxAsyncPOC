import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCHING_DATA
} from '../actions/types';
import { tidyRawData } from '../utilities';

const REDDIT_URL = 'https://www.reddit.com/r';

export const fetchPosts = store => next => action => {
  const result = next(action);

  switch (action.type) {
    case FETCH_DATA:
      const requestUrl = `${REDDIT_URL}/${action.query}.json`;
      // Loading mechanism while waiting for payload
      store.dispatch({
        type: FETCHING_DATA
      });
      fetch(requestUrl)
        .then((res) => res.json())
        .then((payload) => {
          // Successfully display posts
          store.dispatch({
            type: FETCH_SUCCESS,
            posts: tidyRawData(payload), // munges raw payload
            subRedditTitle: action.query
          });
        })
        .catch((err) => {
          // Error handling mechanism
          store.dispatch({
            type: FETCH_FAILURE,
            subRedditTitle: action.query
          });
        })
  };

  return result;
}
