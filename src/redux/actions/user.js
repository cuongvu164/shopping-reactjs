import callAPI from '../../callAPI/callAPI'
import { REGISTER_USER, LOGIN_USER } from '../actionTypes'
import { message } from 'antd';

const key = 'updatable'

export const registerUserRequest = payload => {
  return {
    type: REGISTER_USER,
    payload
  }
}

export const registerUserAPI = user => {
  return dispatch => {
    return callAPI('Customer', 'POST', user)
      .then(response => {
        dispatch(registerUserRequest(response))
      }).catch(error => {
        message.loading({ content: 'Đang xử lý...', key })

        setTimeout(() => {
          message.error({ content: 'Tài khoản này đã tồn tại !', key, duration: 2 })
        }, 1000);
      })
  }
}
