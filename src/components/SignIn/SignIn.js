import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {
  useHistory
} from "react-router-dom";
import { loginUserAPI, getAllUserResult } from '../../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const user = useSelector(state => state.user.user)
  console.log('user------', user)
  const dispatch = useDispatch()

  const [form] = Form.useForm()
  let history = useHistory()

  useEffect(() => {
    dispatch(getAllUserResult())
  }, [])

  const styleSize = {
    paddingLeft: '47px',
    display: 'flex',
    color: 'black',
    fontSize: '30px',
    justifyContent: 'center',
    marginTop: '40px',
    marginBottom: '9px'
  }

  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 5,
    },
  };

  const tailLayoutSignUp = {
    wrapperCol: {
      offset: 12,
      span: 5,
    },
  };

  const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 5,
    },
  };


  const onFinish = async values => {
    const newData = { ...values }
    console.log('test newdata', newData)
    let emailUser = user.filter(item => item.Email === newData.Email)
    let passwordUser = user.filter(item => item.Password === newData.Password)
    // dispatch(getUserByEmailResult(newData.Email))

    if (emailUser.length !== 0 && passwordUser.length !== 0) {
      dispatch(loginUserAPI(newData.Email))
      // history.push('/product')
    } else {
      alert('Sai tên đăng nhập hoặc mật khẩu')
    }
  }

  const submitForm = async () => {
    const payload = await form.getFieldValue()

    console.log('payload Sign In', payload)

  }

  const validateEmail = (rule, value) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const match = regex.test(value)
    if (!match) {
      return Promise.reject('Phải nhập đúng định dạng Email')
    }
    return Promise.resolve()
  }
  return (
    <>
      <span style={styleSize}>ĐĂNG NHẬP</span>
      <Form
        {...layout}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onSubmit={submitForm}
      >
        <Form.Item {...tailLayout}
          name="Email"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { validator: validateEmail },
            { message: 'Phải nhập đúng định dạng Email' }
          ]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item {...tailLayout}
          name="Password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item {...tailLayoutSignUp}>
          <Button type="primary" htmlType="submit" className="login-form-button" onSubmit={submitForm}>
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default SignIn