import { combineReducers } from "redux";
import productReducer from './product'
import categoryReducer from './category'
import cartReducer from './cart'
import userReducer from './user'

const rootReducer = combineReducers({
  product:productReducer,
  category: categoryReducer,
  cart: cartReducer,
  user: userReducer
})

export default rootReducer