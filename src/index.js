import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './app/App';

// import { store } from './app/store';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // {store} т/к идет простой export а не export default

import './styles/_index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
