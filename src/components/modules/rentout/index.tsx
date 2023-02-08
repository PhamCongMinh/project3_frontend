import { Avatar, Breadcrumb, Divider, Menu, MenuProps, Space, Typography } from 'antd'
import styles from './style.module.scss'
import { AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import AvatarImage from '../../../assets/images/avatar.png'
import Image from 'next/image'
import React from 'react'
import CreateRentalnews from './components/create-rentalnews'

type MenuItem = Required<MenuProps>['items'][number]
const { Text } = Typography
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}
export default function RentOutContent() {
  const items: MenuProps['items'] = [
    getItem('Đăng tin mới', 'sub1', <AppstoreOutlined />),
    getItem('Quản lí tin đăng', 'sub2', <AppstoreOutlined />),
    getItem('Sửa thông tin cá nhân', 'sub3', <AppstoreOutlined />),
    getItem('Liên hệ', 'sub4', <MailOutlined />),
    getItem('Thoát', 'sub5', <SettingOutlined />)
  ]
  return (
    <div>
      <div className={styles.container}>
        <Space className={styles.space}>
          <div>
            <div className={styles.header}>
              <Image src={AvatarImage} alt="avatar" className={styles.avatar} />
              <Text strong style={{ marginLeft: '10px' }} className={styles.name}>
                Phạm Minh
              </Text>
            </div>
            <Menu
              // onClick={onClick}
              style={{ width: 256, height: 1020 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
              className={styles.menu}
            />
          </div>
          <CreateRentalnews />
        </Space>
      </div>
    </div>
  )
}
