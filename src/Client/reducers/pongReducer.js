import {
    PONG
}from '../types';

const stateInit = {
    pong: null
}

export default function(state = stateInit, action){

    switch(action.type){
        case PONG:
            return {
                ...state,
                pong: action.payload,
            };

        default: 
            return state;
    }

}