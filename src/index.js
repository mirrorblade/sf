import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const rootBox = document.querySelector('#root');
const root = createRoot(rootBox);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
