import {IPC} from '../types';
import {ipcStart, ipcEnd, ipcError} from '../ipc/ipcActions';

const { ipcRenderer } = window.require('electron');

const ipcMiddleware = ({ dispatch }) => next => action => {
    next(action);
    
    if(action.type !== IPC) return;

    const {
        eventSend,
        argSend,
        onSuccess,
        onFailure,
        label,
        continuous
    } = action.payload;

    if(label){
        dispatch(ipcStart(label));
    }

    ipcRenderer.send(eventSend, argSend);
    
    if(continuous){
        ipcRenderer.on(eventSend + '_REPLY', (event, arg) => {
            if(arg.err){
                dispatch(onFailure(arg.err));
                dispatch(ipcError(arg.err));
            }
            else{
                dispatch(onSuccess(arg.result));
            }
            
            dispatch(ipcEnd(label));
        });
    }
    else{
        ipcRenderer.once(eventSend + '_REPLY', (event, arg) => {
            if(arg.err){
                dispatch(onFailure(arg.err));
                dispatch(ipcError(arg.err));
            }
            else{
                dispatch(onSuccess(arg.result));
            }
            
            dispatch(ipcEnd(label));
        });
    }
}

export default ipcMiddleware;