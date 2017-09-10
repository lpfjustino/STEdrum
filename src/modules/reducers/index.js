import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {i18nReducer as i18n} from 'react-redux-i18n';
import rehydrate from './rehydrate';

export default combineReducers({
    routing,
    i18n,
    rehydrate,
});