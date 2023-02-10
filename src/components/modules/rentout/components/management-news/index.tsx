import React from 'react'
import { Breadcrumb, Divider, Typography } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'

import styles from './style.module.scss'
import RentalNewsTable from './components/table'
import Contact from './components/contact'

const { Text } = Typography
export default function ManagementRentalNews() {
  return (
    <div className={styles.content}>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <UserOutlined />
          <span>Quản lý</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Danh sách tin đăng</Breadcrumb.Item>
      </Breadcrumb>
      <Text className={styles.title1}>Quản lí tin đăng</Text>
      <Divider style={{ width: 1350 }}></Divider>
      <RentalNewsTable />
      <Contact />
    </div>
  )
}
