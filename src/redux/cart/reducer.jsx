import CartActionTypes from "./action-types";

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    /* ============================= ADD Produto ====================================== */
    case CartActionTypes.ADD_PRODUCT: {
      // Verificar se o produto já está no carrinho.
      const productInTheCart = state.products.some(
        (product) => product.id === action.payload.id
      );

      // Se o produto já estiver, adiciona + 1.
      if (productInTheCart) {
        return {
          ...state,
          products: [
            ...state.products.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          ],
        };
      }

      // Se não estiver, ele adiciona.
      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };
    }
    /* ============================= Remover Produto ============================== */
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id != action.payload
        ),
      };

    /* ============================= Aumentar +1 Produto ============================== */
    case CartActionTypes.MORE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    /* ============================= Diminuir -1 Produto ============================== */
    case CartActionTypes.LESS_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
