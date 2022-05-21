import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../cms/client';

import { timeline } from '../cms/types/response';
import { Layout } from '../components/Layout';
import { Products } from '../components/Products';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import { Top } from '../components/Top';

type Props = {
  timelineInfoList: timeline[];
};

export const getStaticProps: GetStaticProps = async () => {
  const timelineInfo = await client.gets('timeline', {
    limit: 3,
    orders: '-started_at',
  });

  return {
    props: {
      timelineInfoList: timelineInfo?.contents,
    },
  };
};

const Home = (props: Props) => {
  const { timelineInfoList } = props;

  return (
    <>
      <Head>
        <title>tksx1227</title>
        <meta name='description' content="tksx1227's Portfolio" />
      </Head>
      <Layout>
        <Top />
        <Skills />
        <Products />
        <Timeline timelineInfoList={timelineInfoList} />
        <Profile />
      </Layout>
    </>
  );
};

export default Home;
