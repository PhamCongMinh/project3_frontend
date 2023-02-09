import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'

import CustomHeader from '../../components/layouts/header'
import RentContent, { TSearch } from '../../components/modules/rent'
import CustomFooter from '../../components/layouts/footer'
import { RentNews } from '../../types'
import { handleURLWhenClickSearchButton, parseUrlToJson } from '../../utils/url'
import { AxiosService } from '../../utils/axios'

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

const Rent: NextPage<IProps> = props => {
  const router = useRouter()
  const initialUrl = '/rent'

  if (!props.rentNews) {
    return <ErrorPage statusCode={404} />
  }

  const handleClickSearchButton = async (searchData: TSearch) => {
    const url = handleURLWhenClickSearchButton(initialUrl, searchData)
    await router.push(url)
  }

  return (
    <Layout>
      <CustomHeader />
      <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
        <RentContent data={props.rentNews} handleSearch={handleClickSearchButton} appliedFilter={props.appliedFilter} />
      </Content>
      <CustomFooter />
    </Layout>
  )
}

export default Rent
