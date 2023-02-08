import React, { useState } from 'react'
import { Button, Col, Input, message, Row, Typography, Upload, UploadProps } from 'antd'
import produce from 'immer'

import styles from './style.module.scss'
import { UploadOutlined } from '@ant-design/icons'
import { AxiosService } from '../../../../../../../utils/axios'
import { RentNews } from '../../../../../../../types'

const { TextArea } = Input

const { Text } = Typography

interface ICreateRentalNews {
  pricePerMonth: number
  area: number
  city: string
  district: string
  commune: string
  street: string
  specificAddress?: string
  title: string
  description: string
  // imageUrl?: string[]
}

const initialState: ICreateRentalNews = {
  pricePerMonth: 0,
  area: 0,
  city: '',
  district: '',
  commune: '',
  street: '',
  specificAddress: '',
  title: '',
  description: ''
}

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}
export default function RentOutForm() {
  const [state, setState] = useState<ICreateRentalNews>(initialState)
  const axiosService = new AxiosService()
  const handleChange = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState((prev: ICreateRentalNews) =>
      produce(prev, draft => {
        // @ts-ignore
        draft[key] = (key === 'pricePerMonth') | (key === 'area') ? Number(e.target.value) : e.target.value
      })
    )
  }
  const handleSubmit = async () => {
    console.log(state)
    try {
      const data = {
        area: 60,
        city: 'Hà Nội',
        commune: 'Tương Mai',
        description: 'Test',
        district: 'Hoàng Mai',
        pricePerMonth: 6000000,
        specificAddress: 'Test',
        street: 'Trương Định',
        title: 'Test'
      }
      const response = await axiosService.post('/rent-out', { body: data })
      console.log(response)
    } catch (error) {
      alert('Tạo tin thất bại, vui lòng kiểm tra lại thông tin trước khi thử lại')
      console.log(error)
    }
  }

  return (
    <div>
      <Text className={styles.title2}>Địa chỉ cho thuê</Text>
      <Row style={{ marginTop: 20, justifyContent: 'left', marginBottom: 30 }}>
        <Col span={4} style={{ marginRight: 40 }}>
          <div>
            <Text className={styles.title3}>Tỉnh/Thành phố</Text>
            <Input onChange={e => handleChange('city', e)} />
          </div>
        </Col>
        <Col span={4} style={{ marginRight: 40 }}>
          <div>
            <Text className={styles.title3}>Quận/Huyện</Text>
            <Input onChange={e => handleChange('district', e)} />
          </div>
        </Col>
        <Col span={4} style={{ marginRight: 40 }}>
          <div>
            <Text className={styles.title3}>Phường/Xã</Text>
            <Input onChange={e => handleChange('commune', e)} />
          </div>
        </Col>
        <Col span={4} style={{ marginRight: 40 }}>
          <div>
            <Text className={styles.title3}>Đường</Text>
            <Input onChange={e => handleChange('street', e)} />
          </div>
        </Col>
      </Row>
      <Text className={styles.title3}>Địa chỉ chính xác</Text>
      <Input style={{ maxWidth: 1000, marginBottom: 30 }} onChange={e => handleChange('specificAddress', e)} />
      <Text className={styles.title2}>Thông tin mô tả</Text>
      <div style={{ marginBottom: 20 }} />
      <Text className={styles.title3}>Tiêu đề</Text>
      <Input style={{ maxWidth: 1000, marginBottom: 30 }} onChange={e => handleChange('title', e)} />
      <Text className={styles.title3}>Nội dung mô tả</Text>
      <TextArea rows={4} style={{ maxWidth: 1000, marginBottom: 30 }} onChange={e => handleChange('description', e)} />
      <Text className={styles.title3}>Giá cho thuê</Text>
      <Input style={{ maxWidth: 1000, marginBottom: 30 }} onChange={e => handleChange('pricePerMonth', e)} />
      <Text className={styles.title3}>Diện tích</Text>
      <Input style={{ maxWidth: 1000, marginBottom: 30 }} onChange={e => handleChange('area', e)} />
      <Text className={styles.title2}>Hình ảnh</Text>
      <div />
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button type="primary" style={{ width: 200, marginTop: 40 }} onClick={handleSubmit}>
        Tạo tin
      </Button>
    </div>
  )
}
