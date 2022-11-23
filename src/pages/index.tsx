import { Breadcrumb, Layout } from 'antd'
import { Content, Footer } from 'antd/lib/layout/layout'
import CustomHeader from '../components/layouts/header'

export default function Home() {
  return (
    <Layout>
      <Layout>
        <CustomHeader />
        {/*<Content className="site-layout" style={{ padding: '0 50px' }}></Content>*/}
        {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
      </Layout>
    </Layout>
  )
}
