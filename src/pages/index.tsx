import { Layout } from 'antd'
import CustomHeader from '../components/layouts/header'
import ImagesCarousel from '../components/elements/carousel'
import { Content, Footer } from 'antd/lib/layout/layout'
import CustomContent from '../components/layouts/content'

export default function Home() {
  return (
    <Layout>
      <CustomHeader />
      <CustomContent />
      {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
    </Layout>
  )
}
