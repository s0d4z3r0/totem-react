import CartActionTypes from "./action-types"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return{
                ...state, 
                products: [...state.products, action.payload]}
        default:
            return state
    }
}

export default productsReducer