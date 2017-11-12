import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { fetchPosts, handleSearch } from './middlewares';

const store = createStore(
  reducers,
  applyMiddleware(fetchPosts, handleSearch)
);

export default store;
