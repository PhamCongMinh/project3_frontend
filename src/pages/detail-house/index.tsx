import AxiosService from '../../utils/axios'
import { parseUrlToJson } from '../../utils/url'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import RentContent, { TSearch } from '../../components/modules/rent'
import CustomHeader from '../../components/layouts/header'
import CustomFooter from '../../components/layouts/footer'
import { RentNews } from '../../types'
import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import DetailHouseContent from '../../components/modules/detail-house'

type IProps = {
  rentNews: RentNews[]
  appliedFilter: TSearch
}
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = parseUrlToJson(context)
  const axiosService = new AxiosService('application/json')
  const response = await axiosService.get('/rent', { params: url })
  const data: RentNews[] = response['data']

  return {
    props: { rentNews: data, appliedFilter: url }
  }
}

const DetailHouse: NextPage<IProps> = props => {
  return (
    <Layout>
      <CustomHeader />
      <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
        <DetailHouseContent />
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default DetailHouse
