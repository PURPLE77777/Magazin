import { SHOW_MODAL, SHOW_SignIn, SHOW_LogIn } from "./consts.js";

export const Show_Modal = () => {
    console.log(SHOW_MODAL);
    return { type: SHOW_MODAL };
};
export const Show_SignIn = () => {
    console.log(SHOW_SignIn);
    return { type: SHOW_SignIn };
};
export const Show_LogIn = () => {
    console.log(SHOW_LogIn);
    return { type: SHOW_LogIn };
};
