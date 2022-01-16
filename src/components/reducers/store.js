import { combineReducers, createStore } from "redux";
import ModalReducer from "./ModalReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    ModalReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
