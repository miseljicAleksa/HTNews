/* eslint-disable camelcase */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_de from './translations/sr/common.json';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
    sr: {
      common: common_de,
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);
