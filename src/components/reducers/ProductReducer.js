import { SELECTED_PRODUCT, PRODUCT } from "./consts.js";

const defaultState = {
    productSelected: false,
    product: null,
};

const ItemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT: {
            return {
                ...state,
                productSelected: action.data,
            };
        }
        case PRODUCT: {
            return {
                ...state,
                product: action.data,
            };
        }
        default:
            return state;
    }
};

export default ItemReducer;
