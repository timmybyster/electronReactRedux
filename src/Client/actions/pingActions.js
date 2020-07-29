import {
    IPC,
    PONG,
    ERROR
}from '../types';

export function ping(){
    return{
        type: IPC,
        payload: {
            eventSend: "EVENT_PING",
            argSend: null,
            onSuccess: (response) => {
                return {
                    type: PONG,
                    payload: response
                }
            },
            onFailure: (response) => {
                return {
                    type: ERROR,
                    payload: response
                }
            },
            label: "Send a ping to the node server."
        }
    }
}

