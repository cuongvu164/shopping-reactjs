import callAPI from '../../callAPI/callAPI'
import { REGISTER_USER, LOGIN_USER, GET_USER, LOGOUT_USER, GET_ALL_USER } from '../actionTypes'
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
    return callAPI('User', 'POST', user)
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

export const getUserByEmail = email => {
  return {
    type: GET_USER,
    email
  }
}

export const getUserByEmailResult = email => {
  return dispatch => {
    return callAPI(`User?Email=${email}`, 'GET', null)
      .then(response => {
        dispatch(getUserByEmail(response))
      })
  }
}

export const getAllUser = payload => {
  return {
    type: GET_ALL_USER,
    payload
  }
}

export const getAllUserResult = () => {
  return dispatch => {
    return callAPI(`User`, 'GET', null)
      .then(response => {
        dispatch(getAllUser(response))
      })
  }
}