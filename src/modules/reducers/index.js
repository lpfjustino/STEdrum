import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {i18nReducer as i18n} from 'react-redux-i18n';
import rehydrate from './rehydrate';
import vst from './vst';
import board from './board';
import pieceType from './piecetype';

export default combineReducers({
    routing,
    i18n,
    rehydrate,
    vst,
    board,
    pieceType,
});