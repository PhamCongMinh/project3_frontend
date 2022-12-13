import { Layout } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import ErrorPage from "next/error";
import {GetServerSideProps, GetServerSidePropsContext, NextPage} from "next";

import CustomHeader from '../../components/layouts/header'
import RentContent from '../../components/modules/rent'
import CustomFooter from '../../components/layouts/footer'
import {RentNews} from "../../types";
import {mergeWith} from "immutable";

type IProps = {
    rentNews: RentNews[]
}
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    // const { min, max, ...price} = context.query
    const res = await fetch('http://localhost:5000/api/v1/rent');
    const metadata= await res.json();
    const data: RentNews[] = metadata['data'];

    return {
        props: { rentNews: data }
    }
}

const Rent: NextPage<IProps> = props => {
    if (!props.rentNews) {
        return <ErrorPage statusCode={404}/>
    }

    return (
        <Layout>
            <CustomHeader />
            <Content className="site-layout" style={{ padding: '0px', margin: '0px' }}>
                <RentContent data={props.rentNews} />
            </Content>
            <CustomFooter />
        </Layout>
    )
}

export default Rent;
