import Image from 'next/image'
import RentOutImage from '../../../assets/images/image_introduction_rentout.png'
import styles from './style.module.scss'
import Paragraph from 'antd/lib/typography/Paragraph'
import { Breadcrumb, Button, Typography } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'

const { Text, Title } = Typography
const title = 'CHO THUÊ PHÒNG TRỌ CAO CẤP, ĐẦY ĐỦ NỘI THẤT P.Linh Trung, Thủ Đức'
const address = '65 Đường số 7, Phường Linh Trung, Quận Thủ Đức, Hồ Chí Minh'
const price = 5000000
const area = 50
const description =
  'Cho thuê phòng trọ cao cấp, sang trọng, an ninh, sạch sẽ.\n' +
  '\n' +
  'Diện tích : 30-32m2.\n' +
  '\n' +
  'Nội thất còn rất mới, đầy đủ tiện nghi, sang trọng, hiện đại.\n' +
  '\n' +
  '- 01 Phòng khách với Smart Tivi, ghế sofa.\n' +
  '\n' +
  '- 01 phòng tắm máy nước nóng lạnh, máy giặt.\n' +
  '\n' +
  '- 01 phòng ngủ riêng với giường nệm, tủ quần áo, máy điều hòa cao cấp .\n' +
  '\n' +
  '- 01 nhà bếp với tủ, kệ bếp thiết kế hiện đại.\n' +
  '\n' +
  '- Tầng trệt Nhà để xe rộng rãi, có ban công thoáng mát, sạch sẽ, yên tĩnh, có sân thượng rộng rãi ngắm Landmark81.\n' +
  '\n' +
  '- WIFI Inernet FPT\n' +
  '\n' +
  '- Vị trí đi lại thuận tiện cách Q.1 chỉ 20 phút đi xe , gần ngã 4 Thủ Đức 1.5Km.\n' +
  '\n' +
  '- Cách siêu thị SATRAFOOD chỉ 20m.\n' +
  '\n' +
  '- Cách ĐH Ngân Hàng TP.HCM 350m, cách ĐHSPKT 1.3Km.\n' +
  '\n' +
  '- Ra vào nhà xe bằng cửa vân tay\n' +
  '\n' +
  '-Camera an ninh các lối đi và hành lang,\n' +
  '\n' +
  '-Hệ thống đèn chiếu sáng hành lang và nhà xe tự động.\n' +
  '\n' +
  '-Giờ giấc tự do.\n' +
  '\n' +
  '- Ký hợp đồng tối thiểu 6 tháng, cọc 1 tháng.\n' +
  '\n' +
  '- Cho phép tối đa 3 người và 3 xe máy mỗi phòng.\n' +
  '\n' +
  '- Giá điện 3k/ 1kwh.\n' +
  '\n' +
  '-Giá nước : 15k/ m3.\n' +
  '\n' +
  '-Giá cho thuê : 5.5tr-6.5tr/ tháng.\n' +
  '\n' +
  'Địa chỉ : 65 đường 7, KP3, Phường Linh Trung, TP.Thủ Đức, HCM.\n' +
  '\n' +
  'Liên hệ : 0909 058 858 (Mr Phương) /0982 747 671 ( Ms Vân)'

const characteristic =
  'Loại tin rao:\tPhòng trọ, nhà trọ\n' +
  'Đối tượng thuê:\tTất cả\n' +
  'Gói tin:\tTin VIP nổi bật\n' +
  'Ngày đăng:\tThứ 3, 15:11 07/02/2023\n' +
  'Ngày hết hạn:\tChủ Nhật, 15:11 12/02/2023'

const contact = 'Liên hệ:\tNguyễn Tấn Phương\n' + 'Điện thoại:\t0909058858\n' + 'Zalo\t0909058858'
export default function DetailHouseContent() {
  return (
    <div style={{ marginLeft: 200, marginTop: 25 }}>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
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
          {title}
        </Title>
        <Text className={styles.price}>
          {'=> Địa chỉ: ' + address} <br />
        </Text>
        <Text className={styles.price}>
          {'=> Giá: ' + price + '/tháng'}
          <br />
        </Text>
        <Text className={styles.price}>
          {'=> Diện tích: ' + area + ' m2'}
          <br />
        </Text>
        <Text className={styles.title3}>
          Thông tin mô tả <br />
        </Text>
        <pre className={styles.text}>{description}</pre>
        <Text className={styles.title3}>
          Đặc điểm tin đăng <br />
        </Text>
        <pre className={styles.text}>{characteristic}</pre>
        <Text className={styles.title3}>
          Thông tin liên hệ <br />
        </Text>
        <pre className={styles.text}>{contact}</pre>
      </div>
    </div>
  )
}
