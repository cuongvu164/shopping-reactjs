import { GET_ALL_CATEGORY } from "../actionTypes";

const initialState = {
  categorys: []
}

const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        categorys: action.payload.data
      }
    default: return state
  }
}

export default categoryReducer