import { MenuProps } from 'antd'

export const menuItems: MenuProps['items'] = [
  {
    label: <a href="http://localhost:3000/home">Trang chủ</a>,
    key: '1'
  },
  {
    label: <a href="http://localhost:3000/rent">Tìm trọ</a>,
    key: '2'
  },
  {
    label: <a href="http://localhost:3000/rentout">Cho thuê</a>,
    key: '3'
  },
  {
    label: 'Blog',
    key: '4'
  },
  {
    label: <a href="http://localhost:3000/signup">Đăng kí</a>,
    key: '5'
  },
  {
    label: <a href="http://localhost:3000/signin">Đăng nhập</a>,
    key: '6'
  }
]
