import Image from 'next/image'
import RentOutImage from '../../../assets/images/image_introduction_rentout.png'
import styles from './style.module.scss'
import { Breadcrumb, Button, Typography } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import { RentNews } from '../../../types'
import { NextPage } from 'next'

const { Text, Title } = Typography

const characteristic =
  'Loại tin rao:\tPhòng trọ, nhà trọ\n' + 'Đối tượng thuê:\tTất cả\n' + 'Gói tin:\tTin VIP nổi bật\n'

const contact = 'Liên hệ:\tNguyễn Tấn Phương\n' + 'Điện thoại:\t0909058858\n' + 'Zalo\t0909058858'

type IProps = {
  rentNews: RentNews
  handleClickBack: () => void
}

const DetailHouseContent: NextPage<IProps> = props => {
  const { rentNews } = props
  return (
    <div style={{ marginLeft: 200, marginTop: 25 }}>
      <Breadcrumb>
        <Breadcrumb.Item onClick={props.handleClickBack}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={props.handleClickBack}>
          <UserOutlined />
          <span>Thuê trọ</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Thông tin chi tiết</Breadcrumb.Item>
      </Breadcrumb>
      <Text className={styles.title1}>
        Thông tin chi tiết nhà trọ
        <br />
      </Text>
      <Image src={RentOutImage} alt="House1" style={{ width: 800, height: 400 }} />
      <div>
        <Title ellipsis={{ rows: 1 }} className={styles.title2}>
          {rentNews.title}
        </Title>
        <Text className={styles.price}>
          {'=> Địa chỉ: ' +
            rentNews.specificAddress +
            ', ' +
            rentNews.commune +
            ', ' +
            rentNews.district +
            ', ' +
            rentNews.city}{' '}
          <br />
        </Text>
        <Text className={styles.price}>
          {'=> Giá: ' + rentNews.pricePerMonth + '/tháng'}
          <br />
        </Text>
        <Text className={styles.price}>
          {'=> Diện tích: ' + rentNews.area + ' m2'}
          <br />
        </Text>
        <Text className={styles.title3}>
          Thông tin mô tả <br />
        </Text>
        <pre className={styles.text} style={{ width: 800, whiteSpace: 'initial' }}>
          {rentNews.description}
        </pre>
        <Text className={styles.title3}>
          Đặc điểm tin đăng <br />
        </Text>
        <pre className={styles.text}>{characteristic}</pre>
        <Text className={styles.text}>
          {'Ngày đăng: ' + rentNews.startDay} <br />
        </Text>
        <Text className={styles.text} style={{ marginBottom: 30 }}>
          {'Ngày hết hạn: ' + rentNews.startDay}
          <br />
        </Text>
        <Text className={styles.title3}>
          Thông tin liên hệ <br />
        </Text>
        <pre className={styles.text}>{contact}</pre>
      </div>
    </div>
  )
}

export default DetailHouseContent
