import {ADD_TO_CART} from '../actionTypes'

export const addToCart = (listProduct, quantity, size) => {
  return {
    type: ADD_TO_CART,
    listProduct,
    quantity,
    size
  }
}