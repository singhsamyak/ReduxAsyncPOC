import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './containers/Home';
import store from './store';
import '../scss/styles.scss';

const mount = document.getElementById('mount');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    mount
  );
}

render();
store.subscribe(render);
