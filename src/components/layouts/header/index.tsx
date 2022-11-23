import { Col, Menu, Row, Typography } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import type { MenuProps } from 'antd'
import styles from './style.module.scss'

const { Text } = Typography

export default function CustomHeader() {
  const items: MenuProps['items'] = [
    {
      label: 'Trang chủ',
      key: '1'
    },
    {
      label: 'Tìm trọ',
      key: '2'
    },
    {
      label: 'Cho thuê',
      key: '3'
    },
    {
      label: 'Blog',
      key: '4'
    },
    {
      label: 'Đăng kí',
      key: '5'
    },
    {
      label: 'Đăng nhập',
      key: '6'
    }
  ]

  return (
    <Header className={styles.header}>
      <Row>
        <Col span={2} style={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            <Text className={styles.logo_text}>Homestay</Text>
          </Typography>
        </Col>
        <Col span={10} offset={12}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
        </Col>
      </Row>
      <Row></Row>
    </Header>
  )
}
