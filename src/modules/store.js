import {createStore, applyMiddleware, compose} from 'redux';
//import {routerMiddleware} from 'react-router-redux';
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore
} from 'react-redux-i18n';
import {persistStore, autoRehydrate, AsyncStorage} from 'redux-persist';
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

const store = createStore(connectRouter(history)(reducers), {}, enhancer);

persistStore(store, {
    "storage": [AsyncStorage]
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));

window.store = store;

export default store;