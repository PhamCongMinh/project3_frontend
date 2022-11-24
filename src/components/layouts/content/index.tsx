import ImagesCarousel from '../../elements/carousel'
import { Content } from 'antd/lib/layout/layout'

export default function CustomContent() {
  return (
    <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
      <ImagesCarousel />
    </Content>
  )
}
