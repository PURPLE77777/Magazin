import { SHOW_MODAL, SHOW_SignIn, SHOW_LogIn } from "./consts.js";

const defaultState = {
    showModal: false,
    showSignIn: false,
    showLogIn: false,
};
const ModalReducer = (state = defaultState, action) => {
    console.log(action);
    switch (action.type) {
        case SHOW_MODAL:
            return { ...state, showModal: !state.showModal };
        case SHOW_SignIn:
            return { ...state, showSignIn: !state.showModal };
        case SHOW_LogIn:
            return { ...state, showLogIn: !state.showModal };
        default:
            return state;
    }
};
export default ModalReducer;
