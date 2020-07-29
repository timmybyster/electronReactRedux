import { IPC_START, IPC_END, IPC_ERROR } from "../types";

export const ipcStart = label => ({
    type: IPC_START,
    payload: label
});

export const ipcEnd = label => ({
    type: IPC_END,
    payload: label
});

export const ipcError = error => ({
    type: IPC_ERROR,
    error: error
});