import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './app/store';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <Provider store={store}>
    <App />
  </Provider>
);
