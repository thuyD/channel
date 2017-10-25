import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={ store } />, rootEl);
});
