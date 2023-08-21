import CartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const moreProductToCart = (payload) => ({
    type: CartActionTypes.MORE_PRODUCT,
    payload
})

export const lessProductFromCart = (payload) => ({
    type: CartActionTypes.LESS_PRODUCT,
    payload
})