import { SHOW_MODAL, SHOW_SignIn, SHOW_LogIn } from "./consts.js";

export const Show_Modal = (value) => {
    return { type: SHOW_MODAL, data: value };
};
export const Show_SignIn = (value) => {
    return { type: SHOW_SignIn, data: value };
};
export const Show_LogIn = (value) => {
    return { type: SHOW_LogIn, data: value };
};
