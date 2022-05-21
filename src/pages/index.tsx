import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../cms/client';

import { products, timeline } from '../cms/types/response';
import { Layout } from '../components/Layout';
import { Products } from '../components/Products';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import { Top } from '../components/Top';

type Props = {
  timelineInfoList: timeline[];
  productInfoList: products[];
};

export const getStaticProps: GetStaticProps = async () => {
  const timelineInfo = await client.gets('timeline', {
    limit: 3,
    orders: '-started_at',
  });
  const productInfo = await client.gets('products', {
    limit: 2,
    orders: '-finished_at',
  });

  return {
    props: {
      timelineInfoList: timelineInfo?.contents,
      productInfoList: productInfo?.contents,
    },
  };
};

const Home = (props: Props) => {
  const { timelineInfoList, productInfoList } = props;

  return (
    <>
      <Head>
        <title>tksx1227</title>
        <meta name='description' content="tksx1227's Portfolio" />
      </Head>
      <Layout>
        <Top />
        <Skills />
        <Products productInfoList={productInfoList} />
        <Timeline timelineInfoList={timelineInfoList} />
        <Profile />
      </Layout>
    </>
  );
};

export default Home;
