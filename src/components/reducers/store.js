import { combineReducers, createStore } from "redux";
import ModalReducer from "./ModalReducer.js";
import AuthReducer from "./AuthReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    ModalReducer,
    AuthReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
