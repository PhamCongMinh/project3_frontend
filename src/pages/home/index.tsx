import { Layout } from 'antd'
import CustomHeader from '../../components/layouts/header'
import CustomContent from '../../components/layouts/content'
import CustomFooter from '../../components/layouts/footer'
import { Content } from 'antd/lib/layout/layout'

export default function Home() {
  return (
    <Layout>
      <CustomHeader />
      <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
        <CustomContent />
      </Content>
      <CustomFooter />
    </Layout>
  )
}
