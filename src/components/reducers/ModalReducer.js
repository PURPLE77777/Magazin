import { SHOW_MODAL, SHOW_SignIn, SHOW_LogIn } from "./consts.js";

const defaultState = {
    showModal: false,
    showSignIn: false,
    showLogIn: false,
};
const ModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, showModal: action.data };
        case SHOW_SignIn:
            return { ...state, showSignIn: action.data };
        case SHOW_LogIn:
            return { ...state, showLogIn: action.data };
        default:
            return state;
    }
};
export default ModalReducer;
