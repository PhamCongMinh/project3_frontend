import { Breadcrumb, Divider, Typography } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import styles from './style.module.scss'
import EditProfileForm from './components/form'

const { Text } = Typography
export default function EditProfile() {
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
        <Breadcrumb.Item>Cập nhật thông tin cá nhân</Breadcrumb.Item>
      </Breadcrumb>
      <Text className={styles.title1}>Cập nhật thông tin cá nhân</Text>
      <Divider style={{ width: 1350 }}></Divider>
      <EditProfileForm />
    </div>
  )
}
