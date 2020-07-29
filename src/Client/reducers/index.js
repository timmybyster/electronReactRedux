import {combineReducers} from 'redux';

import ipcReducer from '../ipc/ipcReducer';
import pongReducer from './pongReducer';


export default combineReducers({
    ipcReducer,
    pongReducer
})