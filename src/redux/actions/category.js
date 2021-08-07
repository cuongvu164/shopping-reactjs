import callAPI from '../../callAPI/callAPI'
import { GET_ALL_CATEGORY } from '../actionTypes'

export const getCategory = payload => {
  return {
    type: GET_ALL_CATEGORY,
    payload
  }
}

export const getCategoryResult = () => {
  return dispatch => {
    return callAPI('Category','GET',null)
      .then(response => {
         dispatch(getCategory(response))
      })
  }
}
