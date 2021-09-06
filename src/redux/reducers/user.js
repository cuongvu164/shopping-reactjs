import { REGISTER_USER, LOGIN_USER} from '../actionTypes'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: [],
  isLogin: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const { payload } = action
      
      return state
    default: return state
  }
}

export default userReducer