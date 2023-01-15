import { ADD_TO_CART, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS ,CHANGE_QUANTITY, DELETE_CART_ITEM} from "./actionTypes";

const getProductRequestAction = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

const getProductSuccessAction = (payload) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload,
  };
};
const getProductFailureAction = () => {
  return {
    type: GET_PRODUCT_FAILURE,
  };
};

const addToCartAction = (payload) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

const changeQuantityAction = (payload) => {
    return {
        type: CHANGE_QUANTITY,
        payload
    }
}

const deleteCartItem =(payload)=>{
    return {
        type: DELETE_CART_ITEM,
        payload
    }
}

export {
  getProductFailureAction,
  getProductRequestAction,
  getProductSuccessAction,
  addToCartAction,
  changeQuantityAction,
  deleteCartItem
};
