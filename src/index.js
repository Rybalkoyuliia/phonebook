import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <BrowserRouter basename="phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
