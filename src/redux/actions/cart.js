import { ADD_TO_CART, UPDATE_TO_CART,DELETE_TO_CART } from '../actionTypes'

export const addToCart = (listProduct, quantity, size) => {
  return {
    type: ADD_TO_CART,
    listProduct,
    quantity,
    size
  }
}

export const updateToCart = (listProduct, quantity, size) => {
  return {
    type: UPDATE_TO_CART,
    listProduct,
    quantity,
    size
  }
}

export const deleteToCart = (listProduct,size) => {
  return {
    type: DELETE_TO_CART,
    listProduct,
    size
  }
}