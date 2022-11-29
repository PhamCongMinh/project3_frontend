import CustomHeader from '../../components/layouts/header'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import RentContent from '../../components/modules/rent'
import CustomFooter from '../../components/layouts/footer'

export default function Rent() {
  return (
    <Layout>
      <CustomHeader />
      <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
        <RentContent />
      </Content>
      <CustomFooter />
    </Layout>
  )
}
