import Image from 'next/image'
import { Button, Space, Typography } from 'antd'
import House1 from '../../../assets/images/house1.jpeg'
import RentOutImage from '../../../assets/images/image_introduction_rentout.png'

import styles from './style.module.scss'
import Paragraph from "antd/lib/typography/Paragraph";

const { Text, Title } = Typography

interface IProps {
  title: string;
  price: string;
  description: string
}

const House: React.FC<IProps> = (props): JSX.Element => {
  const {title, price, description} = props;

  return (
    <div style={{ marginLeft: 150, marginBottom: 50 }}>
      <Space className={styles.space}>
        <Image src={RentOutImage} alt="House1" style={{ width: 350, height: 250 }} />
        <div className={styles.container}>
            <Title ellipsis={{rows: 1}} className={styles.title}>{title}</Title>
            <Text className={styles.price}>{price}</Text>
            <Paragraph ellipsis={{rows: 2, expandable: false}} className={styles.text}>{description}</Paragraph>
            <Button className={styles.button}>Tìm hiểu thêm</Button>
        </div>
      </Space>
    </div>
  )
}

export default House;

// const title = 'PHÒNG CHO THUÊ NGAY LOTTE Q.7'
//   const price = '3.5 triệu'
//   const description =
//     'Các tiện ích chỉ có ở tại Fullhouse ngay Lotte Q.7. 100% cư dân đều đã chích vacxin 2 mũi và dân trí cao,\n' +
//     '            tuân thủ 5K và pháp luật.Ngay Lotte Q.7 (đi bộ 2 phút)...'
