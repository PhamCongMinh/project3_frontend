import Image from 'next/image'
import { Button, Divider, Dropdown, Input, MenuProps, message, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import { FilterText, SortedByItems } from '../../../constants/rent.constants'
import SearchIcon from '../../../assets/images/search_icon.png'

import styles from './style.module.scss'
import House from '../../elements/house'
import SubContent from './components/subcontent'

export default function RentContent() {
  return (
    <div className={styles.container}>
      <Space className={styles.filter}>
        <Input placeholder={FilterText.ADDRESS} className={styles.input} />
        <Input placeholder={FilterText.PRICE} className={styles.input} />
        <Input placeholder={FilterText.AREA} className={styles.input} />
        <Button
          icon={<Image src={SearchIcon} alt="search" style={{ width: 45, height: 45 }} />}
          className={styles.button}
        />
      </Space>

      <Divider style={{ marginTop: 10 }} />

      <Space className={styles.content}>
        <div>
          <House />
          <House />
          <House />
          <House />
        </div>
        <div style={{ width: 550, display: 'flex', justifyContent: 'center' }}>
          <SubContent />
        </div>
      </Space>
    </div>
  )
}
