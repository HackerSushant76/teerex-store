import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  CLOSE_SIDEBAR,
  DELETE_CART_ITEM,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  OPEN_SIDEBAR,
} from "./actionTypes";

export function reducer(state, action) {
  switch (action.type) {
    case GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    }
    case GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isErorr: true,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }

    case CHANGE_QUANTITY: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case DELETE_CART_ITEM: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case OPEN_SIDEBAR: {
      return { ...state, isSidebarOpen: true };
    }
    case CLOSE_SIDEBAR: {
      return { ...state,  isSidebarOpen: false  };
    }
    default:
      return state;
  }
}
