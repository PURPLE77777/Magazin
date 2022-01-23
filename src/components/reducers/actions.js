import {
    SHOW_MODAL,
    SHOW_SignIn,
    SHOW_LogIn,
    SHOW_Menu,
    AUTH,
    REMEMBER_ME,
    FORGET_ME,
    SELECTED_PRODUCT,
    PRODUCT,
} from "./consts.js";

export const Show_Modal = (value) => {
    return { type: SHOW_MODAL, data: value };
};
export const Show_SignIn = (value) => {
    return { type: SHOW_SignIn, data: value };
};
export const Show_LogIn = (value) => {
    return { type: SHOW_LogIn, data: value };
};
export const Show_Menu = (value) => {
    return { type: SHOW_Menu, data: value };
};
export const Auth = (value) => {
    return { type: AUTH, data: value };
};
export const Remember_Me = (value) => {
    return { type: REMEMBER_ME, data: value };
};
export const Forget_Me = () => {
    return { type: FORGET_ME, data: null };
};
export const Selected_Product = (value) => {
    return { type: SELECTED_PRODUCT, data: value };
};
export const Product = (product) => {
    return { type: PRODUCT, data: product };
};
