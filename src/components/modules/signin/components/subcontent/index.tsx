import { Button, Form, Input, Space, Typography } from 'antd'
import styles from './style.module.scss'
import { SearchOutlined } from '@ant-design/icons'

const { Text } = Typography

export default function SignInForm() {
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
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Input placeholder="Mật khẩu" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            Bắt đầu
          </Button>
        </Form.Item>
      </Form>
    </Space>
  )
}
