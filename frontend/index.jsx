import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root.jsx';
import { monthGenerator } from './util/date_util.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.monthGenerator = monthGenerator;
  // TESTING END
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
