import { Button, Form, Input, Space, Typography } from 'antd'
import styles from './style.module.scss'
import { SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import produce from 'immer'
import AxiosService from '../../../../../utils/axios'

const { Text } = Typography

interface ISignInForm {
  email: string
  password: string
}

const initialState: ISignInForm = {
  email: '',
  password: ''
}

export default function SignInForm() {
  const [state, setState] = useState<ISignInForm>(initialState)
  const axiosService = new AxiosService('application/json')

  const handleChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev: ISignInForm) =>
      produce(prev, draft => {
        // @ts-ignore
        draft[key] = e.target.value
      })
    )
  }

  const handleSubmit = async () => {
    try {
      const response = await axiosService.post('/auth/login', state)
      console.log(response)
      window.location.href = '/rent'
    } catch (error) {
      alert('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin trước khi thử lại')
      console.log(error)
    }
  }
  return (
    <Space className={styles.space}>
      <Typography>
        <Text className={styles.title}>
          Quality Rooms at <br />
          Wallet-Friendly Prices
        </Text>
      </Typography>
      <Form name="basic" className={styles.form}>
        <Form.Item style={{ textAlign: 'center' }}>
          <Text className={styles.title2}>ĐĂNG NHẬP</Text>
        </Form.Item>

        <Form.Item>
          <Input placeholder="Email" onChange={e => handleChange('email', e)} />
        </Form.Item>

        <Form.Item>
          <Input placeholder="Mật khẩu" onChange={e => handleChange('password', e)} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button} onClick={handleSubmit}>
            Bắt đầu
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}
