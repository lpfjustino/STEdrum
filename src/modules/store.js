import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore
} from 'react-redux-i18n';
import {persistStore, autoRehydrate} from 'redux-persist';
import localforage from 'localforage';
import logger from 'redux-logger';
import translations from '../translations';
import reducers from './reducers/index';
import persistState from 'redux-localstorage';

export const history = createHistory();

const enhancers = [autoRehydrate()];
const middleware = [thunk, routerMiddleware(history), logger];

const {devToolsExtension} = window;

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(),
);

const store = createStore(reducers, enhancer);

persistStore(store, {
    "storage": [localforage]
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));

window.store = store;

export default store;