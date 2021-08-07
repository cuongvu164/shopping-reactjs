import {GET_ALL_PRODUCT, GET_PRODUCT_ID} from '../actionTypes'

const initialState = {
  products: []
}


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload.data
      }
    case GET_PRODUCT_ID:
      return {
        ...state,
        products: action.id.data
      }
    default: return state
  }
}

export default productReducer