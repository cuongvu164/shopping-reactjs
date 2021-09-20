import { REGISTER_USER, LOGIN_USER, GET_USER,GET_ALL_USER,LOGOUT_USER } from '../actionTypes'
import { message } from 'antd';
const key = 'updatable';

// const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: [],
  isLogin: false
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        user: action.payload.data
      }
    case GET_USER:
      return {
        ...state,
        user: action.email.data
      }
      
    case REGISTER_USER:
      const { payload } = action
      message.loading({ content: 'Đang xử lý...', key });
            setTimeout(() => {
                message.success({ content: 'Đăng ký thành công', key, duration: 2 });
            }, 1000);
            const newUser = [...state.user];
            newUser.push(payload.data);
            return {
                ...state,
                user: newUser
            }
      
    default: return state
  }
}

export default userReducer