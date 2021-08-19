import {GET_ALL_PRODUCT, GET_PRODUCT_CATEGORY_ID, GET_PRODUCT_ID} from '../actionTypes'

const initialState = {
  products: [],
  productByID: []
}


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        products: action.payload.data
      }
    case GET_PRODUCT_CATEGORY_ID:
      return {
        ...state,
        products: action.id.data
      }
    case GET_PRODUCT_ID:
      return {
        ...state,
        productByID: action.id.data
      }
    default: return state
  }
}

export default productReducer