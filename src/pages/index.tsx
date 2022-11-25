import { Layout } from 'antd'
import CustomHeader from '../components/layouts/header'
import CustomContent from '../components/layouts/content'
import CustomFooter from '../components/layouts/footer'

export default function Home() {
  return (
    <Layout>
      <CustomHeader />
      <CustomContent />
      <CustomFooter />
    </Layout>
  )
}
