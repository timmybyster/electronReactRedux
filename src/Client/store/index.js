import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import ipcMiddleware from "../ipc/ipc";

const store = createStore(rootReducer, applyMiddleware(ipcMiddleware));
window.store = store;
export default store;