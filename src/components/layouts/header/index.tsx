import { Col, Menu, Row, Typography } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import ImagesCarousel from '../../elements/carousel'
import { menuItems } from '../../../constants'

import styles from './style.module.scss'

const { Text } = Typography

export default function CustomHeader() {
  return (
    <Header className={styles.header}>
      <Row>
        <Col span={5} style={{ display: 'flex', alignItems: 'center', paddingLeft: 135 }}>
          <Typography>
            <Text className={styles.logo_text}>RentHouse</Text>
          </Typography>
        </Col>
        <Col span={10} offset={9}>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} className={styles.menu} />
        </Col>
      </Row>
    </Header>
  )
}
