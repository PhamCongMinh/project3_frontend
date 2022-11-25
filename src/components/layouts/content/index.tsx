import ImagesCarousel from '../../elements/carousel'
import { Content } from 'antd/lib/layout/layout'
import ListHouse from './components/listhouse'
import IntroductionRent from './components/introduction-rent'
import IntroductionRentout from './components/introduction-rentout'
import { Divider } from 'antd'
import ListIcon from './components/list-icon'

export default function CustomContent() {
  return (
    <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
      <ImagesCarousel />
      <ListIcon />
      <IntroductionRent />
      <Divider style={{ marginTop: 100 }} />
      <ListHouse />
      <Divider style={{ marginTop: 100 }} />
      <IntroductionRentout />
    </Content>
  )
}
