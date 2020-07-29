import {
    IPC_START,
    IPC_END,
    IPC_ERROR
}from '../types';

export default function(state = {}, action){
    switch(action.type){
        case IPC_START:
            return {
                ...state,
            };

        case IPC_END:
            return {
                ...state,
            };

        case IPC_ERROR:
            return {
                ...state,
            };

        default:
            return state;
    }

}