import { AUTH, REMEMBER_ME, USER_NAME, FORGET_ME } from "./consts.js";

const defaultState = {
    userName: localStorage.getItem(USER_NAME),
};

const AuthReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: action.data,
            };
        case REMEMBER_ME:
            return {
                ...state,
                userName: action.data,
            };
        case FORGET_ME:
            return {
                ...state,
                userName: action.data,
            };
        default:
            return state;
    }
};

export default AuthReducer;
