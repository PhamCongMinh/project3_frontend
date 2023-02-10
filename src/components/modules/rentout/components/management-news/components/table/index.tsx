import { Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  title: string
  pricePerMonth: number
  area: number
  address: string
  status: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>
  },
  {
    title: 'Giá cho thuê',
    dataIndex: 'pricePerMonth',
    key: 'pricePerMonth'
  },
  {
    title: 'Diện tích',
    dataIndex: 'area',
    key: 'area'
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map(status => {
          let color = status.length > 5 ? 'geekblue' : 'green'
          if (status === 'Trống') {
            color = 'volcano'
          }
          return (
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Đã có người thuê </a>
        <a>Xóa</a>
      </Space>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    title: 'Test1',
    pricePerMonth: 5000000,
    area: 60,
    address: 'New York No. 1 Lake Park',
    status: ['Đã cho thuê']
  },
  {
    key: '2',
    title: 'Test2',
    pricePerMonth: 4200000,
    area: 50,
    address: 'New York No. 1 Lake Park',
    status: ['Trống']
  },
  {
    key: '3',
    title: 'Test3',
    pricePerMonth: 3200000,
    area: 30,
    address: 'New York No. 1 Lake Park',
    status: ['Đã cho thuê']
  }
]
export default function RentalNewsTable() {
  return <Table columns={columns} dataSource={data} />
}
