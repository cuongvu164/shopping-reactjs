import callAPI from '../../callAPI/callAPI'
import { GET_ALL_PRODUCT,GET_PRODUCT_ID } from '../actionTypes'

export const getProduct = payload => {
  return {
    type: GET_ALL_PRODUCT,
    payload
  }
}

export const getProductResult = () => {
  return dispatch => {
    return callAPI('Product','GET',null)
      .then(response => {
         dispatch(getProduct(response))
      })
  }
}

export const getProductByID = id => {
  return {
    type: GET_PRODUCT_ID,
    id
  }
}

export const getProductByIDResult = id => {
  return dispatch => {
    return callAPI(`Product?CategoryId=${id}`,'GET',null)
      .then(response => {
        dispatch(getProductByID(response))
      })
  }
}