import { Layout } from 'antd'
import CustomHeader from '../../components/layouts/header'
import { Content } from 'antd/lib/layout/layout'
import CustomFooter from '../../components/layouts/footer'
import SignUpContent from '../../components/modules/signup'
import SignInContent from '../../components/modules/signin'
import RentOutContent from '../../components/modules/rentout'

export default function RentOut() {
  return (
    <Layout>
      <CustomHeader />
      <Content className="site-layout" style={{ padding: '0px', margin: '0px', minHeight: 1100 }}>
        <RentOutContent />
      </Content>
      <CustomFooter />
    </Layout>
  )
}
